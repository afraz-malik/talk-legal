<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UsersForms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_forms', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('form_id');
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
        Schema::create('users_forms', function (Blueprint $table) {
            Schema::dropIfExists('users_forms');

        });
    }
}
