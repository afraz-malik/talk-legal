<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingItem extends Model
{
    use HasFactory;

    protected $table = 'booking_items';

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }

    public function shift()
    {
        return $this->belongsTo(Shift::class);
    }

}
