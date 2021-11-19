<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLegalFormAnswer extends Model
{
    use HasFactory;


    public function user_legal_form_detail()
    {
        return $this->belongsTo(UserLegalForm::class);
    }

    public function question_detail()
    {
        return $this->belongsTo(LegalFormPageQuestion::class, 'ques_id');
    }
}
