<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LegalFormPage extends Model
{
	use HasFactory;


	public function questions()
	{
		return $this->hasMany(LegalFormPageQuestion::class, 'legal_form_page_id');
	}

	public function form()
	{
		return $this->belongsTo(LegalForm::class, 'legal_form_id');
	}
}
