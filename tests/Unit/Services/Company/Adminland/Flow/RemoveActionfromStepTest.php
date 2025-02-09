<?php

namespace Tests\Unit\Services\Company\Adminland\Flow;

use Tests\TestCase;
use App\Models\Company\Flow;
use App\Models\Company\Step;
use App\Models\Company\Action;
use App\Models\Company\Employee;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Services\Company\Adminland\Flow\RemoveActionFromStep;

class RemoveActionfromStepTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_removes_an_action_from_a_step(): void
    {
        $employee = factory(Employee::class)->create([]);
        $flow = factory(Flow::class)->create([
            'company_id' => $employee->company_id,
        ]);
        $step = factory(Step::class)->create([
            'flow_id' => $flow->id,
        ]);
        $action = factory(Action::class)->create([
            'step_id' => $step->id,
        ]);

        $request = [
            'company_id' => $employee->company_id,
            'author_id' => $employee->id,
            'step_id' => $step->id,
            'action_id' => $action->id,
        ];

        $step = (new RemoveActionFromStep)->execute($request);

        $this->assertDatabaseMissing('actions', [
            'id' => $action->id,
            'step_id' => $action->step_id,
        ]);

        $this->assertInstanceOf(
            Step::class,
            $step
        );
    }

    /** @test */
    public function it_fails_if_wrong_parameters_are_given(): void
    {
        $employee = factory(Employee::class)->create([]);

        $request = [
            'company_id' => $employee->company_id,
        ];

        $this->expectException(ValidationException::class);
        (new RemoveActionFromStep)->execute($request);
    }
}
