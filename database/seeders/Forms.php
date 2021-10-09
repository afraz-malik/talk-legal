<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Form;

class Forms extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Form::truncate();

        $form_detail =  [
            [
                'name' => 'Mutual Non-Disclosure Agreement',
                'description' => '',
                'fields' => json_encode([
                    "company_one_name",
                    "companu_one_street_address",
                    "company_two_name",
                    "companu_two_street_address",
                    "agreement_construed_state",
                    "agreement_brought_state",
                    "company_one_signature",
                    "company_one_name_of_representative",
                    "company_one_title_of_representative",
                    "company_two_signature",
                    "company_two_name_of_representative",
                    "company_two_title_of_representative",
                    "date_as_of"
                    ])
            ],
       
        ];

        Form::insert($form_detail);
    }
}
