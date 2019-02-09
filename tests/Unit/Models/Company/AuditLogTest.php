<?php

namespace Tests\Unit\Models\Account;

use Tests\ApiTestCase;
use App\Models\Company\Team;
use App\Models\Company\AuditLog;
use Illuminate\Support\Facades\Cache;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AuditLogTest extends ApiTestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_belongs_to_a_company()
    {
        $auditLog = factory(AuditLog::class)->create([]);
        $this->assertTrue($auditLog->company()->exists());
    }

    /** @test */
    public function it_returns_the_date_attribute()
    {
        $auditLog = factory(AuditLog::class)->create([
            'created_at' => '2017-01-22 17:56:03',
        ]);
        $this->assertEquals(
            'Jan 22, 2017 17:56',
            $auditLog->date
        );
    }

    /** @test */
    public function it_returns_the_object_attribute()
    {
        $auditLog = factory(AuditLog::class)->create([]);
        $this->assertEquals(
            1,
            $auditLog->object->{'user'}
        );
    }

    /** @test */
    public function it_returns_the_author_attribute()
    {
        $adminEmployee = $this->createAdministrator();

        Cache::shouldReceive('get')
            ->once()
            ->times(2)
            ->with('currentCompany')
            ->andReturn($adminEmployee->company);

        $auditLog = factory(AuditLog::class)->create([
            'objects' => json_encode([
                'author_id' => $adminEmployee->user->id,
            ]),
            'company_id' => $adminEmployee->company_id,
        ]);

        $this->assertEquals(
            '<a href="'.tenant('/employees/'.$adminEmployee->user->id).'">'.$adminEmployee->user->name.'</a>',
            $auditLog->author
        );

        $auditLog = factory(AuditLog::class)->create([
            'objects' => json_encode([
                'author_id' => 12345,
                'author_name' => 'Dwight Schrute',
            ]),
            'company_id' => $adminEmployee->company_id,
        ]);

        $this->assertEquals(
            'Dwight Schrute',
            $auditLog->author
        );
    }

    /** @test */
    public function it_returns_the_team_attribute()
    {
        $adminEmployee = $this->createAdministrator();
        $team = factory(Team::class)->create([
            'company_id' => $adminEmployee->company_id,
        ]);

        Cache::shouldReceive('get')
            ->once()
            ->times(2)
            ->with('currentCompany')
            ->andReturn($adminEmployee->company);

        $auditLog = factory(AuditLog::class)->create([
            'objects' => json_encode([
                'team_id' => $team->id,
            ]),
            'company_id' => $team->company_id,
        ]);

        $this->assertEquals(
            '<a href="'.tenant('/teams/'.$team->id).'">'.$team->name.'</a>',
            $auditLog->team
        );

        $auditLog = factory(AuditLog::class)->create([
            'objects' => json_encode([
                'team_id' => 12345,
                'team_name' => 'Sales',
            ]),
            'company_id' => $team->company_id,
        ]);

        $this->assertEquals(
            'Sales',
            $auditLog->team
        );
    }

    /** @test */
    public function it_returns_the_user_attribute()
    {
        $adminEmployee = $this->createAdministrator();

        Cache::shouldReceive('get')
            ->once()
            ->times(2)
            ->with('currentCompany')
            ->andReturn($adminEmployee->company);

        $auditLog = factory(AuditLog::class)->create([
            'objects' => json_encode([
                'user_id' => $adminEmployee->user->id,
            ]),
            'company_id' => $adminEmployee->company_id,
        ]);

        $this->assertEquals(
            '<a href="'.tenant('/employees/'.$adminEmployee->user->id).'">'.$adminEmployee->user->name.'</a>',
            $auditLog->user
        );

        $auditLog = factory(AuditLog::class)->create([
            'objects' => json_encode([
                'user_id' => 12345,
                'user_name' => 'dwight@dundermifflin.com',
            ]),
            'company_id' => $adminEmployee->company_id,
        ]);

        $this->assertEquals(
            'dwight@dundermifflin.com',
            $auditLog->user
        );
    }
}
