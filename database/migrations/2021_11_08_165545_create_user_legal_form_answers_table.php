<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserLegalFormAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_legal_form_answers', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_legal_form_id');
            $table->unsignedInteger('ques_id');
            $table->string('value')->nullable();
            $table->smallInteger('status')->default('1');
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
        Schema::dropIfExists('user_legal_form_answers');
    }
}
