<?php namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Gravatar;
use Illuminate\Database\Eloquent\Model;
use \Carbon\Carbon;

//use Illuminate\Support\Facades\Response;

class User extends \Cartalyst\Sentinel\Users\EloquentUser implements AuthenticatableContract, CanResetPasswordContract {

	use Authenticatable, CanResetPassword;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['first_name','last_name', 'email','username', 'password','phone'];

	protected $appends = ['avatar','name'];
	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['password'];


	function getAvatarAttribute(){
		return $this->attributes['avatar']= Gravatar::src($this->attributes['email']);
	}

	function getNameAttribute(){
		return $this->attributes['name']=$this->attributes['first_name'].' '.$this->attributes['last_name'];
	}

	function scopeActive($query){

        $active = Carbon::now()->subMonth(2);
        return $query->where('last_login', '>',$active );

    }

}
