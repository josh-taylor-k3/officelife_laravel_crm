<?php

namespace App\Http\ViewHelpers\Dashboard;

use Carbon\Carbon;
use App\Helpers\DateHelper;
use App\Helpers\TimeHelper;
use App\Helpers\MoneyHelper;
use App\Models\Company\Expense;
use App\Models\Company\Employee;
use App\Models\Company\Timesheet;
use Illuminate\Support\Facades\DB;
use App\Models\Company\OneOnOneEntry;
use App\Models\Company\EmployeeStatus;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Collection as SupportCollection;
use App\Services\Company\Employee\OneOnOne\CreateOneOnOneEntry;

class DashboardManagerViewHelper
{
    /**
     * Get all the expenses the manager needs to validate.
     *
     * @param Employee $manager
     * @param Collection $directReports
     * @return SupportCollection|null
     */
    public static function pendingExpenses(Employee $manager, Collection $directReports): ?SupportCollection
    {
        // get the list of employees this manager manages
        $expensesCollection = collect([]);
        $company = $manager->company;

        foreach ($directReports as $directReport) {
            $employeeExpenses = $directReport->directReport->expenses;

            $pendingExpenses = $employeeExpenses->filter(function ($expense) {
                return $expense->status == Expense::AWAITING_MANAGER_APPROVAL;
            });

            foreach ($pendingExpenses as $expense) {
                $employee = $expense->employee;

                $expensesCollection->push([
                    'id' => $expense->id,
                    'title' => $expense->title,
                    'amount' => MoneyHelper::format($expense->amount, $expense->currency),
                    'status' => $expense->status,
                    'category' => ($expense->category) ? $expense->category->name : null,
                    'expensed_at' => DateHelper::formatDate($expense->expensed_at),
                    'converted_amount' => $expense->converted_amount ?
                        MoneyHelper::format($expense->converted_amount, $expense->converted_to_currency) :
                        null,
                    'url' => route('dashboard.manager.expense.show', [
                        'company' => $company,
                        'expense' => $expense,
                    ]),
                    'employee' => ($employee) ? [
                        'id' => $employee->id,
                        'name' => $employee->name,
                        'avatar' => $employee->avatar,
                    ] : [
                        'employee_name' => $expense->employee_name,
                    ],
                ]);
            }
        }

        return $expensesCollection;
    }

    /**
     * Array containing information about the given expense.
     *
     * @param Expense $expense
     * @return array
     */
    public static function expense(Expense $expense): array
    {
        $expense = [
            'id' => $expense->id,
            'title' => $expense->title,
            'created_at' => DateHelper::formatDate($expense->created_at),
            'amount' => MoneyHelper::format($expense->amount, $expense->currency),
            'status' => $expense->status,
            'category' => ($expense->category) ? $expense->category->name : null,
            'expensed_at' => DateHelper::formatDate($expense->expensed_at),
            'converted_amount' => $expense->converted_amount ?
                MoneyHelper::format($expense->converted_amount, $expense->converted_to_currency) :
                null,
            'converted_at' => $expense->converted_at ?
                DateHelper::formatShortDateWithTime($expense->converted_at) :
                null,
            'exchange_rate' => $expense->exchange_rate,
            'employee' => ($expense->employee) ? [
                'id' => $expense->employee->id,
                'name' => $expense->employee->name,
                'avatar' => $expense->employee->avatar,
                'position' => $expense->employee->position ? $expense->employee->position->title : null,
                'status' => $expense->employee->status ? $expense->employee->status->name : null,
            ] : [
                'employee_name' => $expense->employee_name,
            ],
        ];

        return $expense;
    }

    /**
     * Get the one on ones with the direct report(s) if they exist.
     *
     * @param Employee $manager
     * @param Collection $directReports
     * @return SupportCollection|null
     */
    public static function oneOnOnes(Employee $manager, Collection $directReports): ?SupportCollection
    {
        $oneOnOnesCollection = collect([]);
        $company = $manager->company;

        foreach ($directReports as $directReport) {
            $employee = $directReport->directReport;

            $entry = OneOnOneEntry::where('employee_id', $employee->id)
                ->where('manager_id', $manager->id)
                ->where('happened', false)
                ->latest()
                ->first();

            if (! $entry) {
                // there is no active entry, we need to create one
                $entry = (new CreateOneOnOneEntry)->execute([
                    'company_id' => $company->id,
                    'author_id' => $employee->id,
                    'manager_id' => $manager->id,
                    'employee_id' => $employee->id,
                    'date' => Carbon::now()->format('Y-m-d'),
                ]);
            }

            $oneOnOnesCollection->push([
                'id' => $employee->id,
                'name' => $employee->name,
                'avatar' => $employee->avatar,
                'position' => (! $employee->position) ? null : $employee->position->title,
                'url' => route('employees.show', [
                    'company' => $company,
                    'employee' => $employee,
                ]),
                'entry' => [
                    'id' => $entry->id,
                    'happened_at' => $entry->happened_at->format('Y-m-d'),
                    'url' => route('dashboard.oneonones.show', [
                        'company' => $company,
                        'entry' => $entry,
                    ]),
                ],
            ]);
        }

        return $oneOnOnesCollection;
    }

    /**
     * Get the information about employees who have a contract that ends in
     * the next 3 months or less.
     *
     * @param Employee $manager
     * @param Collection $directReports
     * @return SupportCollection|null
     */
    public static function contractRenewals(Employee $manager, Collection $directReports): ?SupportCollection
    {
        $collection = collect([]);
        $company = $manager->company;

        foreach ($directReports as $directReport) {
            $employee = $directReport->directReport;

            if (! $employee->status) {
                continue;
            }

            if ($employee->status->type == EmployeeStatus::INTERNAL) {
                continue;
            }

            if (! $employee->contract_renewed_at) {
                continue;
            }

            $dateInOneMonth = Carbon::now()->addMonths(1);

            if ($employee->contract_renewed_at->isAfter($dateInOneMonth)) {
                continue;
            }

            $collection->push([
                'id' => $employee->id,
                'name' => $employee->name,
                'avatar' => $employee->avatar,
                'position' => (! $employee->position) ? null : $employee->position->title,
                'url' => route('employees.show', [
                    'company' => $company,
                    'employee' => $employee,
                ]),
                'contract_information' => [
                    'contract_renewed_at' => DateHelper::formatDate($employee->contract_renewed_at),
                    'number_of_days' => $employee->contract_renewed_at->diffInDays(Carbon::now()),
                    'late' => $employee->contract_renewed_at->isBefore(Carbon::now()),
                ],
            ]);
        }

        return $collection;
    }

    /**
     * Get the information about timesheets that need approval.
     *
     * @param Employee $manager
     * @param Collection $directReports
     * @return SupportCollection|null
     */
    public static function timesheetApprovals(Employee $manager, Collection $directReports): ?SupportCollection
    {
        $employeesCollection = collect([]);
        $company = $manager->company;

        foreach ($directReports as $directReport) {
            $employee = $directReport->directReport;

            $pendingTimesheets = $employee->timesheets()
                ->where('status', Timesheet::READY_TO_SUBMIT)
                ->orderBy('started_at', 'desc')
                ->get();

            $timesheetCollection = collect([]);
            foreach ($pendingTimesheets as $timesheet) {
                $totalWorkedInMinutes = DB::table('time_tracking_entries')
                    ->where('timesheet_id', $timesheet->id)
                    ->sum('duration');

                $arrayOfTime = TimeHelper::convertToHoursAndMinutes($totalWorkedInMinutes);

                $timesheetCollection->push([
                    'id' => $timesheet->id,
                    'started_at' => DateHelper::formatDate($timesheet->started_at),
                    'ended_at' => DateHelper::formatDate($timesheet->ended_at),
                    'duration' => trans('dashboard.manager_timesheet_approval_duration', [
                        'hours' => $arrayOfTime['hours'],
                        'minutes' => $arrayOfTime['minutes'],
                    ]),
                ]);
            }

            if ($pendingTimesheets->count() !== 0) {
                $employeesCollection->push([
                    'id' => $employee->id,
                    'name' => $employee->name,
                    'avatar' => $employee->avatar,
                    'position' => (! $employee->position) ? null : $employee->position->title,
                    'url' => route('employees.show', [
                        'company' => $company,
                        'employee' => $employee,
                    ]),
                    'timesheets' => $timesheetCollection,
                ]);
            }
        }

        return $employeesCollection;
    }
}
