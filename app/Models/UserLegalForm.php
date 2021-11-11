<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLegalForm extends Model
{
    use HasFactory;


    public function form_answers()
    {
        return $this->hasMany(UserLegalFormAnswer::class);
    }

    public function user_detail()
    {
        return $this->belongsTo(User::class);
    }

    public function legal_form_detail()
    {
        return $this->belongsTo(LegalForm::class);
    }
}
