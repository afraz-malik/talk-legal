<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_cards', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('card_holder_name');
            $table->bigInteger('card_number');
            $table->tinyInteger('expiry_month');
            $table->integer('expiry_year');
            $table->integer('cvv')->nullable();
            $table->string('notes')->nullable();
            $table->tinyInteger('is_active')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('account_cards');
    }
}
