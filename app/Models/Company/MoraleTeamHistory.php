<?php

namespace App\Models\Company;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MoraleTeamHistory extends Model
{
    protected $table = 'morale_team_history';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'team_id',
        'average',
        'number_of_team_members',
    ];

    /**
     * Get the team record associated with the morale company history object.
     *
     * @return BelongsTo
     */
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
