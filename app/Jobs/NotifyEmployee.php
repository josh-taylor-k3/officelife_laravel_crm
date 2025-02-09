<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Services\Company\Employee\Notification\AddNotificationInUIForEmployee;

class NotifyEmployee implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The notification instance.
     *
     * @var array
     */
    public $notification;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(array $notification)
    {
        $this->notification = $notification;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $isDummy = true;
        if (empty($this->notification['is_dummy'])) {
            $isDummy = false;
        }

        (new AddNotificationInUIForEmployee)->execute([
            'employee_id' => $this->notification['employee_id'],
            'action' => $this->notification['action'],
            'objects' => $this->notification['objects'],
            'is_dummy' => $isDummy,
        ]);
    }
}
