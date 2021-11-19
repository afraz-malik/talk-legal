<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubscriptionPlansSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $plan = null;
        $documents = null;
        $access_period = null;
        $units = '';
        $cost = null;
        $membership_description = null;
        for ($i = 0; $i < 3; $i++) {
            switch ($i) {
                case 0:
                    $plan = 'Silver';
                    $cost = 110;
                    $membership_description = '$110 Membership (You can save up to $105)';
                    $documents = 4;
                    $access_period = 7;
                    $units = 'days';
                    break;
                case 1:
                    $plan = 'Gold';
                    $cost = 200;
                    $membership_description = '$200 Membership (You can save up to $175)';
                    $documents = 8;
                    $access_period = 20;
                    $units = 'days';
                    break;
                default:
                    $plan = 'Platinum';
                    $cost = 500;
                    $membership_description = '$500 Membership (You save a lot)';
                    $documents = -1;
                    $access_period = 1;
                    $units = 'month';
            }
            DB::table('subscription_plans')->insert([
                'title' => $plan,
                'membership_cost' => $cost,
                'membership_description' => $membership_description,
                'no_of_documents' => $documents,
                'units' => $units,
                'access_period' => $access_period
            ]);
        }
    }
}
