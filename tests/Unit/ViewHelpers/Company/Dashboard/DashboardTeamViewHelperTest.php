<?php

namespace Tests\Unit\ViewHelpers\Company\Dashboard;

use Carbon\Carbon;
use Tests\ApiTestCase;
use App\Models\Company\Team;
use App\Models\Company\Employee;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Http\ViewHelpers\Company\Dashboard\DashboardTeamViewHelper;
use App\Services\Company\Employee\WorkFromHome\UpdateWorkFromHomeInformation;

class DashboardTeamViewHelperTest extends ApiTestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_gets_a_collection_of_birthdates(): void
    {
        Carbon::setTestNow(Carbon::create(2018, 1, 1));
        $sales = factory(Team::class)->create([]);
        $michael = factory(Employee::class)->create([
            'birthdate' => null,
            'company_id' => $sales->company_id,
        ]);
        $dwight = factory(Employee::class)->create([
            'birthdate' => '1892-01-29',
            'first_name' => 'Dwight',
            'last_name' => 'Schrute',
            'company_id' => $sales->company_id,
        ]);
        $angela = factory(Employee::class)->create([
            'birthdate' => '1989-01-05',
            'first_name' => 'Angela',
            'last_name' => 'Bernard',
            'company_id' => $sales->company_id,
        ]);
        $john = factory(Employee::class)->create([
            'birthdate' => '1989-03-20',
            'company_id' => $sales->company_id,
        ]);

        $sales->employees()->syncWithoutDetaching([$michael->id]);
        $sales->employees()->syncWithoutDetaching([$dwight->id]);
        $sales->employees()->syncWithoutDetaching([$angela->id]);
        $sales->employees()->syncWithoutDetaching([$john->id]);

        $array = DashboardTeamViewHelper::birthdays($sales);

        $this->assertEquals(2, count($array));

        $this->assertEquals(
            [
                0 => [
                    'id' => $angela->id,
                    'name' => 'Angela Bernard',
                    'avatar' => $angela->avatar,
                    'url' => env('APP_URL').'/'.$angela->company_id.'/employees/'.$angela->id,
                    'birthdate' => 'January 5th',
                    'sort_key' => '2018-01-05',
                ],
                1 => [
                    'id' => $dwight->id,
                    'name' => 'Dwight Schrute',
                    'avatar' => $dwight->avatar,
                    'url' => env('APP_URL').'/'.$angela->company_id.'/employees/'.$dwight->id,
                    'birthdate' => 'January 29th',
                    'sort_key' => '2018-01-29',
                ],
            ],
            $array
        );
    }

    /** @test */
    public function it_gets_a_collection_of_people_working_from_home(): void
    {
        Carbon::setTestNow(Carbon::create(2018, 1, 1));
        $sales = factory(Team::class)->create([]);
        $michael = factory(Employee::class)->create([
            'company_id' => $sales->company_id,
        ]);
        $dwight = factory(Employee::class)->create([
            'first_name' => 'Dwight',
            'last_name' => 'Schrute',
            'company_id' => $sales->company_id,
        ]);
        $angela = factory(Employee::class)->create([
            'first_name' => 'Angela',
            'last_name' => 'Bernard',
            'company_id' => $sales->company_id,
        ]);
        $john = factory(Employee::class)->create([
            'company_id' => $sales->company_id,
        ]);

        $sales->employees()->syncWithoutDetaching([$michael->id]);
        $sales->employees()->syncWithoutDetaching([$dwight->id]);
        $sales->employees()->syncWithoutDetaching([$angela->id]);
        $sales->employees()->syncWithoutDetaching([$john->id]);

        $dwight = (new UpdateWorkFromHomeInformation)->execute([
            'company_id' => $dwight->company_id,
            'author_id' => $dwight->id,
            'employee_id' => $dwight->id,
            'date' => '2018-01-01',
            'work_from_home' => true,
        ]);

        $collection = DashboardTeamViewHelper::workFromHome($sales);

        $this->assertEquals(1, $collection->count());

        $this->assertEquals(
            [
                0 => [
                    'id' => $dwight->id,
                    'name' => 'Dwight Schrute',
                    'avatar' => $dwight->avatar,
                    'position' => $dwight->position,
                    'url' => env('APP_URL').'/'. $dwight->company_id.'/employees/'. $dwight->id,
                ],
            ],
            $collection->toArray()
        );
    }
}
