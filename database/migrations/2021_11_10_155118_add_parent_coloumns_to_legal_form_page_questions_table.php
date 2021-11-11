<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddParentColoumnsToLegalFormPageQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('legal_form_page_questions', function (Blueprint $table) {
            $table->unsignedInteger('parent_id')->after('status')->nullable();
            $table->string('parent_value')->after('parent_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('legal_form_page_questions', function (Blueprint $table) {
            $table->dropColumn('parent_id');
            $table->dropColumn('parent_value');
        });
    }
}
