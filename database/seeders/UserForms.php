<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UsersForms;

class UserForms extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UsersForms::truncate();

        $user_forms =  [
            [
                'user_id' => '2',
                'form_id' => '1',
          
            ],
       
        ];

        UsersForms::insert($user_forms);
    }
}
