<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLegalFormPageQuestionsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('legal_form_page_questions', function (Blueprint $table) {
			$table->id();
			$table->unsignedInteger('legal_form_page_id');
			$table->string('label')->nullable();
			$table->string('name')->nullable();
			$table->string('type')->nullable();
			$table->string('placeholder')->nullable();
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
		Schema::dropIfExists('legal_form_page_questions');
	}
}
