<?php

namespace App\Jobs;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use App\Models\Company\Employee;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class LogMissedWorklogEntry implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $date;

    /**
     * Create a new job instance.
     *
     * @param Carbon $date
     * @return void
     */
    public function __construct(Carbon $date)
    {
        $this->date = $date;
    }

    /**
     * Find all the employees that haven't logged a worklog at the end of the
     * day, and increase the counter of missed worklog days.
     * This job is meant to be executed every day at 11pm (UTC).
     *
     * @return void
     */
    public function handle()
    {
        $date = $this->date;
        $employeesWithLogs = Employee::whereHas('worklogs', function ($query) use ($date) {
            $query->whereBetween(
                'created_at',
                [
                    $date->toDateString().' 00:00:00',
                    $date->toDateString().' 23:59:59',
                ]
            );
        })->get();

        $allEmployees = Employee::select('id')->get();
        $employeesWithoutLogs = $allEmployees->diff($employeesWithLogs);

        foreach ($employeesWithoutLogs as $employee) {
            $employee->consecutive_worklog_missed = $employee->consecutive_worklog_missed + 1;
            $employee->save();
        }
    }
}
