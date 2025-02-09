<?php

namespace Tests\Unit\Controllers\Company\Adminland;

use Tests\TestCase;
use App\Models\Company\Employee;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EmployeeControllerTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_lets_you_see_the_list_of_employees_only_with_the_right_permissions()  : void
    {
        $route = '/account/employees';
        $employee = factory(Employee::class)->create([]);

        $this->accessibleBy($employee, config('officelife.authorizations.administrator'), $route, 200);
        $this->accessibleBy($employee, config('officelife.authorizations.hr'), $route, 200);
        $this->accessibleBy($employee, config('officelife.authorizations.user'), $route, 401);
    }

    /** @test */
    public function it_lets_you_see_the_add_employee_screen_with_the_right_permissions(): void
    {
        $route = '/account/employees/create';
        $employee = factory(Employee::class)->create([]);

        $this->accessibleBy($employee, config('officelife.authorizations.administrator'), $route, 200);
        $this->accessibleBy($employee, config('officelife.authorizations.hr'), $route, 200);
        $this->accessibleBy($employee, config('officelife.authorizations.user'), $route, 401);
    }
}
