<?php

namespace Tests\Unit\Services\Company\Employee\Manager;

use Tests\TestCase;
use App\Models\Company\Employee;
use App\Exceptions\SameIdsException;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Services\Company\Employee\Manager\AssignManager;

class AssignManagerTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_assigns_a_manager() : void
    {
        $employee = factory(Employee::class)->create([]);
        $manager = factory(Employee::class)->create([
            'company_id' => $employee->company_id,
        ]);

        $request = [
            'company_id' => $employee->company_id,
            'author_id' => $employee->user->id,
            'employee_id' => $employee->id,
            'manager_id' => $manager->id,
        ];

        $manager = (new AssignManager)->execute($request);

        $this->assertDatabaseHas('direct_reports', [
            'company_id' => $employee->company_id,
            'employee_id' => $employee->id,
            'manager_id' => $manager->id,
        ]);

        $this->assertInstanceOf(
            Employee::class,
            $employee
        );
    }

    /** @test */
    public function it_logs_an_action() : void
    {
        $employee = factory(Employee::class)->create([]);
        $manager = factory(Employee::class)->create([
            'company_id' => $employee->company_id,
        ]);

        $request = [
            'company_id' => $employee->company_id,
            'author_id' => $employee->user->id,
            'employee_id' => $employee->id,
            'manager_id' => $manager->id,
        ];

        $manager = (new AssignManager)->execute($request);

        $this->assertdatabasehas('audit_logs', [
            'company_id' => $employee->company_id,
            'action' => 'manager_assigned',
        ]);

        $this->assertdatabasehas('employee_logs', [
            'company_id' => $employee->company_id,
            'employee_id' => $employee->id,
            'action' => 'manager_assigned',
        ]);

        $this->assertdatabasehas('employee_logs', [
            'company_id' => $employee->company_id,
            'employee_id' => $manager->id,
            'action' => 'direct_report_assigned',
        ]);
    }

    /** @test */
    public function it_fails_if_wrong_parameters_are_given() : void
    {
        $request = [
            'first_name' => 'Dwight',
        ];

        $this->expectException(ValidationException::class);
        (new AssignManager)->execute($request);
    }

    /** @test */
    public function it_fails_if_employee_and_manager_are_the_same_person() : void
    {
        $employee = factory(Employee::class)->create([]);

        $request = [
            'company_id' => $employee->company_id,
            'author_id' => $employee->user->id,
            'employee_id' => $employee->id,
            'manager_id' => $employee->id,
        ];

        $this->expectException(SameIdsException::class);
        (new AssignManager)->execute($request);
    }
}
