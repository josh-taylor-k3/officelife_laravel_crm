<?php

namespace App\Http\Controllers\Company\Employee;

use Illuminate\Http\Request;
use App\Helpers\InstanceHelper;
use App\Models\Company\Employee;
use App\Http\Controllers\Controller;
use App\Http\Resources\Company\Employee\Employee as EmployeeResource;
use App\Services\Company\Employee\Description\SetPersonalDescription;
use App\Services\Company\Employee\Description\ClearPersonalDescription;

class EmployeeDescriptionController extends Controller
{
    /**
     * Assign an employee description to the given employee.
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
            'description' => $request->get('description'),
        ];

        $employee = (new SetPersonalDescription)->execute($request);

        return new EmployeeResource($employee);
    }

    /**
     * Remove the employee description for the given employee.
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

        $employee = (new ClearPersonalDescription)->execute($request);

        return new EmployeeResource($employee);
    }
}
