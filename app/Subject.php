<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
  protected $fillable = ['name','description'];

  public function users(){
    return $this->hasMany('App\Content');
  }
}
