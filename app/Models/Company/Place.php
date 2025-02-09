<?php

namespace App\Models\Company;

use App\Helpers\MapHelper;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'street',
        'city',
        'province',
        'postal_code',
        'country_id',
        'latitude',
        'longitude',
        'placable_id',
        'placable_type',
        'is_active',
        'is_dummy',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'is_active' => 'boolean',
        'is_dummy' => 'boolean',
    ];

    /**
     * Get the owning placable model.
     */
    public function placable()
    {
        return $this->morphTo();
    }

    /**
     * Get the country record associated with the place.
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    /**
     * Get the address as a sentence.
     *
     * @return string|null
     */
    public function getCompleteAddress()
    {
        $address = '';

        if (! is_null($this->street)) {
            $address = $this->street;
        }

        if (! is_null($this->city)) {
            $address .= ' '.$this->city;
        }

        if (! is_null($this->province)) {
            $address .= ' '.$this->province;
        }

        if (! is_null($this->postal_code)) {
            $address .= ' '.$this->postal_code;
        }

        if (! is_null($this->country)) {
            $address .= ' '.$this->getCountryName();
        }

        if (empty($address)) {
            return;
        }

        // trim extra whitespaces inside the address
        $address = preg_replace('/\s+/', ' ', $address);
        if (is_string($address)) {
            return $address;
        }
    }

    /**
     * Get the country of the place.
     *
     * @return string
     */
    public function getCountryName(): string
    {
        if ($this->country) {
            return $this->country->name;
        }
    }

    /**
     * Get the partial address, used to show basic information to other employees.
     */
    public function getPartialAddress()
    {
        $address = '';

        if (! is_null($this->city)) {
            $address = $this->city;
        }

        if (! is_null($this->country)) {
            $address .= ' ('.$this->getCountryName().')';
        }

        if (empty($address)) {
            return;
        }

        // trim extra whitespaces inside the address
        $address = preg_replace('/\s+/', ' ', $address);
        if (is_string($address)) {
            return $address;
        }
    }

    /**
     * Get the static image map for this place.
     *
     * @param integer $zoom
     * @param integer $width
     * @param integer $height
     * @return string|null
     */
    public function getStaticMapImage(int $zoom, int $width, int $height): ?string
    {
        return MapHelper::getStaticImage($this, $zoom, $width, $height);
    }

    /**
     * Get the URL on OpenStreetMap for the partial URL.
     *
     * @return string
     */
    public function getMapUrl(): string
    {
        $place = $this->getPartialAddress();
        $place = urlencode($place);

        return "https://www.openstreetmap.org/search?query={$place}";
    }
}
