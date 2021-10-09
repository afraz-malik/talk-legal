<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AddOnAttornyConsulting;

class AddOn extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AddOnAttornyConsulting::truncate();

        $add_on =  [
            [
                'cost' => 100,
                'subscription_plan_id' => 1,
                'description' => '100 per month for unlimited 30-minut sessions per month(no-refund)',
                'session_benifits' => 'unlimited 30-minut sessions per month(no-refund)'
            ],
            [
                'cost' => 50,
                'subscription_plan_id' => 1,
                'description' => 'One time 30 minutes session for $50',
                'session_benifits' => 'One time 30 minutes session'
            ],
            [
                'cost' => 100,
                'subscription_plan_id' => 2,
                'description' => '100 per month for unlimited 30-minut sessions per month(no-refund)',
                'session_benifits' => 'unlimited 30-minut sessions per month(no-refund)'
            ],
            [
                'cost' => 50,
                'subscription_plan_id' => 2,
                'description' => 'One time 30 minutes session for $50',
                'session_benifits' => 'One time 30 minutes session'
            ],
        ];

        AddOnAttornyConsulting::insert($add_on);
    }
}
