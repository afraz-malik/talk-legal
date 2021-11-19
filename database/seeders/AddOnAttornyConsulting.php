<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddOnAttornyConsulting extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       
        
        for ($i = 0; $i < 3; $i++) {
            $count = 1;
            if($count <= 2){
                $cost = 100;
                $subscription_plan_id = 1;
                $description = '100 per month for unlimited 30-minut sessions per month(no-refund)';  
                $session_benifits = 'unlimited 30-minut sessions per month(no-refund)';
            }else{
                $cost = 50;
                $description =  'One time 30 minutes session for $50';
                $session_benifits = 'One time 30 minutes session'; 
            }

            //  if($i == 0){
            //      $cost = 100;
            //     $description = '100 per month for unlimited 30-minut sessions per month(no-refund)';  
            //     $session_benifits = 'unlimited 30-minut sessions per month(no-refund)';
            //  }else{
            //     $cost = 50;
            //      $description =  'One time 30 minutes session for $50';
            //      $session_benifits = 'One time 30 minutes session';
            //  };
            DB::table('add_on')->insert([
                'cost' => $cost,
                'description' => $description,
                'session_benifits' => $session_benifits
            ]);
        }
    }

}
