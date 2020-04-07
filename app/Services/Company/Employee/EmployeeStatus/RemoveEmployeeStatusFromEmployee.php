<?php

namespace App\Services\Company\Employee\EmployeeStatus;

use Carbon\Carbon;
use App\Jobs\LogAccountAudit;
use App\Services\BaseService;
use App\Jobs\LogEmployeeAudit;
use App\Models\Company\Employee;

class RemoveEmployeeStatusFromEmployee extends BaseService
{
    /**
     * Get the validation rules that apply to the service.
     *
     * @return array
     */
    public function rules():array
    {
        return [
            'company_id' => 'required|integer|exists:companies,id',
            'author_id' => 'required|integer|exists:employees,id',
            'employee_id' => 'required|integer|exists:employees,id',
            'is_dummy' => 'nullable|boolean',
        ];
    }

    /**
     * Remove an employee's status.
     *
     * @param array $data
     *
     * @return Employee
     */
    public function execute(array $data):Employee
    {
        $this->validateRules($data);

        $this->author($data['author_id'])
            ->inCompany($data['company_id'])
            ->asAtLeastHR()
            ->canExecuteService();

        $employee = $this->validateEmployeeBelongsToCompany($data);

        $employeeStatus = $employee->status;

        $employee->employee_status_id = null;
        $employee->save();

        LogAccountAudit::dispatch([
            'company_id' => $data['company_id'],
            'action' => 'employee_status_removed',
            'author_id' => $this->author->id,
            'author_name' => $this->author->name,
            'audited_at' => Carbon::now(),
            'objects' => json_encode([
                'employee_id' => $employee->id,
                'employee_name' => $employee->name,
                'employee_status_id' => $employeeStatus->id,
                'employee_status_name' => $employeeStatus->name,
            ]),
            'is_dummy' => $this->valueOrFalse($data, 'is_dummy'),
        ])->onQueue('low');

        LogEmployeeAudit::dispatch([
            'employee_id' => $data['employee_id'],
            'action' => 'employee_status_removed',
            'author_id' => $this->author->id,
            'author_name' => $this->author->name,
            'audited_at' => Carbon::now(),
            'objects' => json_encode([
                'employee_status_id' => $employeeStatus->id,
                'employee_status_name' => $employeeStatus->name,
            ]),
            'is_dummy' => $this->valueOrFalse($data, 'is_dummy'),
        ])->onQueue('low');

        $employee->refresh();

        return $employee;
    }
}
