<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MutualNoneDisclosureDocument extends Model
{
    use HasFactory;

    protected $table = 'mutual_non_disclosuer_document';
    protected $guarded = ['id']; 


}