<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Company\Employee;
use App\Jobs\CalculateTimeOffBalance;

class CalculateTimeOffBalanceForAllEmployees extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'timeoff:calculate {day}';

    /**
     * The date the calculation is made.
     */
    protected $date;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Trigger the calculation of available time off balance for all employees';

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->date = $this->argument('day');
        Employee::select('id')->chunk(100, function ($employees) {
            $employees->each(function (Employee $employee) {
                CalculateTimeOffBalance::dispatch(
                    $employee,
                    $this->date
                )->onQueue('low');
            });
        });
    }
}
