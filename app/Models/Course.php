<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use SoftDeletes;
    // protected $fillable = [
    //     'title',
    //     'slug',
    //     'description',
    //     'price',
    //     'offer_price',
    //     'category',
    //     'language',
    //     'level',
    //     'duration',
    //     'instructor',
    //     'tags',
    //     'status',
    // ];

    public function chapters(): HasMany
    {
        return $this->hasMany(Chapter::class, 'course_id');
    }
}
