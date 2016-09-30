<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*//** @var TYPE_NAME $api */
$api = app('Dingo\Api\Routing\Router');
//Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');
$api->version('v1', ['middleware' => 'api.auth','namespace' => 'App\Http\Controllers'], function ($api) {


});

$api->version('v1', ['namespace' => 'App\Http\Controllers'], function ($api) {
 $api->resource('contents', 'ContentController');
 $api->resource('subjects', 'SubjectsController');
 $api->resource('users', 'UsersController');
 $api->post('login', 'AuthController@login');

});
Route::get('/', 'TestController@index');
// Authentication routes...

Route::get('logout', 'AuthController@logout');
