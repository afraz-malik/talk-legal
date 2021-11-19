<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LegalFormPageQuestion extends Model
{
	use HasFactory;


	public function getValueAttribute()
	{
		return explode(',', $this->attributes['price']);
	}

	public function page()
	{
		$this->belongsTo(LegalForm::class, 'legal_form_id');
	}
}
