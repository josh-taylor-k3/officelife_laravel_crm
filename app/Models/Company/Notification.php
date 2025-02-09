<?php

namespace App\Models\Company;

use App\Helpers\NotificationHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Notification extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'employee_id',
        'action',
        'objects',
        'read',
        'is_dummy',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'read' => 'boolean',
        'is_dummy' => 'boolean',
    ];

    /**
     * Get the employee record associated with the notification.
     *
     * @return BelongsTo
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    /**
     * Get the JSON object.
     *
     * @return array
     * @param mixed $value
     */
    public function getObjectAttribute($value)
    {
        return json_decode($this->objects);
    }

    /**
     * Get the content of the notification, if defined.
     *
     * @return string
     * @param mixed $value
     */
    public function getContentAttribute($value): string
    {
        return NotificationHelper::process($this);
    }
}
