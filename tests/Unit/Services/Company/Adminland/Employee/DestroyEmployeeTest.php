<?php

namespace Tests\Unit\Services\Company\Adminland\Employee;

use Tests\TestCase;
use App\Jobs\LogAccountAudit;
use App\Models\Company\Employee;
use Illuminate\Support\Facades\Queue;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Services\Company\Adminland\Employee\DestroyEmployee;

class DestroyEmployeeTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_destroys_an_employee(): void
    {
        Queue::fake();

        $michael = $this->createAdministrator();
        $dwight = factory(Employee::class)->create([
            'company_id' => $michael->company_id,
        ]);

        $request = [
            'company_id' => $dwight->company_id,
            'author_id' => $michael->id,
            'employee_id' => $dwight->id,
        ];

        (new DestroyEmployee)->execute($request);

        $this->assertDatabaseMissing('employees', [
            'id' => $dwight->id,
        ]);

        Queue::assertPushed(LogAccountAudit::class, function ($job) use ($michael, $dwight) {
            return $job->auditLog['action'] === 'employee_destroyed' &&
                $job->auditLog['author_id'] === $michael->id &&
                $job->auditLog['objects'] === json_encode([
                    'employee_name' => $dwight->name,
                ]);
        });
    }

    /** @test */
    public function it_fails_if_wrong_parameters_are_given(): void
    {
        $request = [
            'name' => 'Selling team',
        ];

        $this->expectException(ValidationException::class);
        (new DestroyEmployee)->execute($request);
    }

    /** @test */
    public function it_fails_if_the_employee_does_not_match_the_company(): void
    {
        $michael = $this->createAdministrator();
        $dwight = factory(Employee::class)->create([]);

        $request = [
            'company_id' => $dwight->company_id,
            'author_id' => $michael->id,
            'employee_id' => $dwight->id,
        ];

        $this->expectException(ModelNotFoundException::class);
        (new DestroyEmployee)->execute($request);
    }
}
