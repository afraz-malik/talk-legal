<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPlans extends Model
{
    use HasFactory;


    protected $table = 'subscription_plans';
    protected $guarded = ['id'];

    public function addOn()
    {
        return $this->hasMany(AddOnAttornyConsulting::class, 'subscription_plan_id');
    }
}
