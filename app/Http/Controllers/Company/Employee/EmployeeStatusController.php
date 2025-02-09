<?php

namespace App\Http\Controllers\Company\Employee;

use Illuminate\Http\Request;
use App\Helpers\InstanceHelper;
use App\Models\Company\Employee;
use App\Http\Controllers\Controller;
use App\Http\Resources\Company\Employee\Employee as EmployeeResource;
use App\Services\Company\Employee\EmployeeStatus\AssignEmployeeStatusToEmployee;
use App\Services\Company\Employee\EmployeeStatus\RemoveEmployeeStatusFromEmployee;

class EmployeeStatusController extends Controller
{
    /**
     * Assign an employee status to the given employee.
     *
     * @param int $companyId
     * @param int $employeeId
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, int $companyId, int $employeeId)
    {
        $loggedEmployee = InstanceHelper::getLoggedEmployee();

        $request = [
            'company_id' => $companyId,
            'author_id' => $loggedEmployee->id,
            'employee_id' => $employeeId,
            'employee_status_id' => $request->get('id'),
        ];

        $employee = (new AssignEmployeeStatusToEmployee)->execute($request);

        return new EmployeeResource($employee);
    }

    /**
     * Remove the employee status for the given employee.
     *
     * @param int $companyId
     * @param int $employeeId
     * @param int $employeeStatusId
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, int $companyId, int $employeeId, int $employeeStatusId)
    {
        $loggedEmployee = InstanceHelper::getLoggedEmployee();

        $request = [
            'company_id' => $companyId,
            'author_id' => $loggedEmployee->id,
            'employee_id' => $employeeId,
        ];

        $employee = (new RemoveEmployeeStatusFromEmployee)->execute($request);

        return new EmployeeResource($employee);
    }
}
