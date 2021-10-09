<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMutualNonDisclosuerDocument extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mutual_non_disclosuer_document', function (Blueprint $table) {
            $table->id();
            $table->string('document_name');
            $table->longText('document_description');
            $table->string('company_one_name');
            $table->string('companu_one_street_address');
            $table->string('company_two_name');
            $table->string('companu_two_street_address');
            $table->string('agreement_construed_state');
            $table->string('agreement_brought_state');
            $table->string('company_one_signature');
            $table->string('company_one_name_of_representative');
            $table->string('company_one_title_of_representative');
            $table->string('company_two_signature');
            $table->string('company_two_name_of_representative');
            $table->string('company_two_title_of_representative');
            $table->dateTime('date_as_of');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mutual_non_disclosuer_document', function (Blueprint $table) {
            //
        });
    }
}
