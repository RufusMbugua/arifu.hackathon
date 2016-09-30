<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{

  	protected $fillable = ['title', 'description','user_id', 'subject_id'];

    public function users(){
      $this->belongsTo('App\User');
    }

    public function subjects(){
      $this->belongsTo('App\Subject');
    }
}
