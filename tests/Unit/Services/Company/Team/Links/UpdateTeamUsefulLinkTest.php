<?php

namespace Tests\Unit\Services\Company\Employee\Team\Links;

use Tests\TestCase;
use App\Jobs\LogTeamAudit;
use App\Models\Company\Team;
use App\Jobs\LogAccountAudit;
use App\Models\Company\Employee;
use Illuminate\Support\Facades\Queue;
use App\Models\Company\TeamUsefulLink;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Services\Company\Team\Links\UpdateTeamUsefulLink;

class UpdateTeamUsefulLinkTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_updates_a_team_useful_link(): void
    {
        Queue::fake();

        $michael = factory(Employee::class)->create([]);
        $team = factory(Team::class)->create([
            'company_id' => $michael->company_id,
        ]);
        $link = factory(TeamUsefulLink::class)->create([
            'team_id' => $team->id,
        ]);

        $request = [
            'company_id' => $michael->company_id,
            'author_id' => $michael->id,
            'team_useful_link_id' => $link->id,
            'type' => 'email',
            'label' => '@email',
            'url' => 'https://email.com',
        ];

        $link = (new UpdateTeamUsefulLink)->execute($request);

        $this->assertDatabaseHas('team_useful_links', [
            'id' => $link->id,
            'team_id' => $team->id,
            'type' => 'email',
            'label' => '@email',
            'url' => 'https://email.com',
        ]);

        $this->assertInstanceOf(
            TeamUsefulLink::class,
            $link
        );

        Queue::assertPushed(LogAccountAudit::class, function ($job) use ($michael, $link, $team) {
            return $job->auditLog['action'] === 'team_useful_link_updated' &&
                $job->auditLog['author_id'] === $michael->id &&
                $job->auditLog['objects'] === json_encode([
                    'link_id' => $link->id,
                    'link_name' => $link->label,
                    'team_id' => $team->id,
                    'team_name' => $team->name,
                ]);
        });

        Queue::assertPushed(LogTeamAudit::class, function ($job) use ($michael) {
            return $job->auditLog['action'] === 'useful_link_updated' &&
                $job->auditLog['author_id'] === $michael->id;
        });
    }

    /** @test */
    public function it_cant_update_a_link_with_the_wrong_team(): void
    {
        $michael = factory(Employee::class)->create([]);
        $dwight = factory(Employee::class)->create([]);
        $team = factory(Team::class)->create([
            'company_id' => $dwight->company_id,
        ]);
        $link = factory(TeamUsefulLink::class)->create([
            'team_id' => $team->id,
        ]);

        $request = [
            'company_id' => $michael->company_id,
            'author_id' => $michael->id,
            'team_useful_link_id' => $link->id,
            'type' => 'email',
            'label' => '@email',
            'url' => 'https://email.com',
        ];

        $this->expectException(ModelNotFoundException::class);
        $link = (new UpdateTeamUsefulLink)->execute($request);
    }

    /** @test */
    public function it_fails_if_wrong_parameters_are_given(): void
    {
        $michael = factory(Employee::class)->create([]);

        $request = [
            'company_id' => $michael->company_id,
        ];

        $this->expectException(ValidationException::class);
        (new UpdateTeamUsefulLink)->execute($request);
    }
}
