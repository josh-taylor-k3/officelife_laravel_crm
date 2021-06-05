<?php

namespace App\Console;

use Carbon\Carbon;
use App\Jobs\LogTeamsMorale;
use App\Jobs\LogCompaniesMorale;
use App\Jobs\LogMissedWorklogEntry;
use App\Jobs\StopRateYourManagerProcess;
use App\Jobs\StartRateYourManagerProcess;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
    ];

    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     */
    protected function schedule(Schedule $schedule)
    {
        $midnight = '23:00';

        $schedule->job(new LogMissedWorklogEntry(Carbon::today()))->dailyAt($midnight);
        $schedule->job(new LogCompaniesMorale(Carbon::today()))->dailyAt($midnight);
        $schedule->job(new LogTeamsMorale(Carbon::today()))->dailyAt($midnight);

        $schedule->job(new StartRateYourManagerProcess())->lastDayOfMonth('01:00');
        $schedule->job(new StopRateYourManagerProcess())->hourly();

        // disabled until PTOs will be finally implemented
        //$schedule->command('timeoff:calculate '.Carbon::today()->format('Y-m-d'))->daily();

        if (config('trustedproxy.cloudflare')) {
            $schedule->command('cloudflare:reload')->daily();
        }

        if (config('officelife.demo_mode')) {
            $schedule->command('demo:reset', ['--force'])
                ->everyFiveMinutes()
                ->emailOutputOnFailure(config('officelife.email_instance_administrator'));
        }
    }

    /**
     * Register the commands for the application.
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        if ($this->app->environment() != 'production') {
            $this->load(__DIR__.'/Commands/Tests');
        }

        if (config('officelife.demo_mode')) {
            $this->load(__DIR__.'/Commands/Demo');
        }

        require base_path('routes/console.php');
    }
}
