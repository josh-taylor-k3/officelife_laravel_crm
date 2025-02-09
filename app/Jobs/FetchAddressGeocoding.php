<?php

namespace App\Jobs;

use App\Models\Company\Place;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Services\Company\Place\GetGPSCoordinate;

class FetchAddressGeocoding implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The place instance.
     *
     * @var Place
     */
    public $place;

    /**
     * Create a new job instance.
     *
     * @var Place
     * @return void
     */
    public function __construct(Place $place)
    {
        $this->place = $place;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        (new GetGPSCoordinate)->execute([
            'place_id' => $this->place->id,
        ]);
    }
}
