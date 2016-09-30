<?php namespace App;

use Illuminate\Database\Eloquent\Model;

//use Illuminate\Support\Facades\Response;

class Role extends \Cartalyst\Sentinel\Roles\EloquentRole
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'roles';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['slug','name', 'permissions'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = [''];

}
