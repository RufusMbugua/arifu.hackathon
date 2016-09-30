<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserSubject extends Model
{

  protected $fillable = ['user_id','subject_id'];
  
  public function users(){
    $this->belongsTo('App\User');
  }

  public function subjects(){
    $this->belongsTo('App\Subject');
  }
}
