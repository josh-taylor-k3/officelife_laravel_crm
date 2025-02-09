<?php

namespace App\Helpers;

use App\Models\Company\Place;

class MapHelper
{
    /**
     * Return the URL for a static image for the given place.
     *
     * @var Place $place
     * @var int $zoom
     * @var int $width
     * @var int $height
     * @return null|string
     */
    public static function getStaticImage(Place $place, int $zoom = 7, int $width, int $height): ?string
    {
        if (!config('officelife.mapbox_api_key')) {
            return null;
        }

        if (!config('officelife.mapbox_username')) {
            return null;
        }

        $url = 'https://api.mapbox.com/styles/v1/';
        $url .= config('officelife.mapbox_username');
        $url .= '/ck335w8te1vzj1cn7aszafhm2/static/';
        $url .= $place->longitude.',';
        $url .= $place->latitude.',';
        $url .= $zoom.'/';
        $url .= $width.'x'.$height.'@2x';
        $url .= '?access_token='.config('officelife.mapbox_api_key');

        return $url;
    }
}
