<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LegalForm extends Model
{
	use HasFactory;


	public function pages()
	{
		return $this->hasMany(LegalFormPage::class);
	}
}
