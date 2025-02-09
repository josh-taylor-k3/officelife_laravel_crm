<?php

namespace Tests\Unit\Services;

use Tests\TestCase;
use App\Models\User\User;
use App\Models\Company\Employee;
use App\Http\Controllers\Controller;
use App\Exceptions\NotEnoughPermissionException;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ControllerTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_validates_permission_level(): void
    {
        // administrator has all rights
        $stub = $this->getMockForAbstractClass(Controller::class);
        $employee = factory(Employee::class)->create([
            'permission_level' => config('officelife.authorizations.administrator'),
        ]);

        $this->assertInstanceOf(
            User::class,
            $stub->validateAccess(
                $employee->user_id,
                $employee->company_id,
                $employee->id,
                config('officelife.authorizations.hr')
            )
        );

        // now testing the HR access level
        $employee = factory(Employee::class)->create([
            'permission_level' => config('officelife.authorizations.hr'),
        ]);
        $stub->validateAccess(
            $employee->user_id,
            $employee->company_id,
            $employee->id,
            config('officelife.authorizations.hr')
        );

        // now testing the normal access level
        $employee = factory(Employee::class)->create([
            'permission_level' => config('officelife.authorizations.user'),
        ]);
        $stub->validateAccess(
            $employee->user_id,
            $employee->company_id,
            $employee->id,
            config('officelife.authorizations.hr')
        );

        // test that a normal user can't see another employee's forbidden content
        $employee = factory(Employee::class)->create([
            'permission_level' => config('officelife.authorizations.user'),
        ]);
        $employeeB = factory(Employee::class)->create([
            'permission_level' => config('officelife.authorizations.user'),
            'company_id' => $employee->company_id,
        ]);

        $this->expectException(NotEnoughPermissionException::class);
        $stub->validateAccess(
            $employee->user_id,
            $employee->company_id,
            $employeeB->id,
            config('officelife.authorizations.hr')
        );

        // same, but with different companies
        $employee = factory(Employee::class)->create([
            'permission_level' => config('officelife.authorizations.user'),
        ]);
        $employeeB = factory(Employee::class)->create([
            'permission_level' => config('officelife.authorizations.user'),
        ]);

        $this->expectException(NotEnoughPermissionException::class);
        $stub->validateAccess(
            $employee->user_id,
            $employee->company_id,
            $employeeB->id,
            config('officelife.authorizations.hr')
        );
    }
}
