<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddOnAttornyConsulting extends Model
{
    use HasFactory;
    protected $table = 'add_on';
    protected $guarded = ['id'];

    // protected $fillable = ['subscription_plan_id', 'cost', 'description', 'session_benifits'];
  
}
