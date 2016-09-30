<?php

namespace App\Http\Controllers;

use App\User;
use Cartalyst\Sentinel\Laravel\Facades\Activation;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Cartalyst\Sentinel\Laravel\Facades\Reminder;
use Illuminate\Support\Facades\Mail;



class AuthController extends Controller
{

  function __construct(Request $request)
  {
      $this->Request = $request;

  }

    public function index()
    {
        //

    }

    public function login(Request $request)
    {
        //$credentials = $request->only('email', 'password');
        //validate
        $rules = [
            'email' => 'required|email|exists:users',
            'password' => 'required|min:6'
        ];

        $input = Input::only(
            'email',
            'password'
        );
//        dd($input);
        $validator = Validator::make($input, $rules);
        // dd($validator);
        if ($validator->fails()) {
            return Response::json([
                'error' => [
                    'message' => $validator->errors()->all(),

                ]
            ], 422);


        }else {
            $credentials = [
                'email' => Input::get('email'),
                'password' => Input::get('password'),
            ];
            $user = Sentinel::findByCredentials($credentials);

            if (!$activation = Activation::completed($user)) {
                return response()->json(['error' => [
                    'message' => 'Please make sure your account is active',

                ]
              ], 401);
            }

            try {
                // verify the credentials and create a token for the user
               // print_r($credentials);exit;
//                dd(JWTAuth::attempt($credentials));

                if (! $token = JWTAuth::attempt($credentials)) {
                    return response()->json(['error' => [
                        'message' => 'Failed to authenticate because of bad credentials.',

                    ]
                  ], 401);
                }
            } catch (JWTException $e) {
                // something went wrong
                return response()->json(['error' => [
                    'message' => 'User not authorized.',

                ]], 500);
            }

        }


        // if no errors are encountered we can return a JWT and user data

        if ($user= Sentinel::authenticate($credentials)) {

         $admin = Sentinel::inRole('admin');

            $user_id=$user->id;
            $email=$user->email;
            $permisions=$user->permissions;
            $first_name=$user->first_name;
            $last_name=$user->last_name;
            $last_login=$user->last_login;

            return Response::json(
              compact('id','user_id','email','permisions','first_name','last_name','last_login','role','token')
                , 200, array(), JSON_PRETTY_PRINT);


        }


    }

    public function logout()
    {
        //execute logout
        //dd(JWTAuth::parseToken()->getToken());
        JWTAuth::invalidate(JWTAuth::getToken());

        Sentinel::logout(null, true);
        return Response::json([
            'success' => [
                'message' => 'Successful Logout.',
                'data' => [

                ]
            ]
        ], 200);


    }

    public function password_reset()
    {

      $rules = [
          'email' => 'required|exists:users',//role_id

      ];

      $input = Input::only(
          'email'

      );

      $validator = Validator::make($input, $rules);

      if ($validator->fails()) {

          return Response::json([
              'error' => [
                  'message' => $validator->errors()->all(),

              ]
          ], 422);
      } else {

        $credentials = ['login' => Input::get('email'),];

        $user = Sentinel::findByCredentials($credentials);


        if (Reminder::exists($user)) {
          return Response::json([
              'error' => [
                  'message' => 'You rescently requested for a password reset. Check email',

              ]
          ], 401);
        }else {

          $reminder=Reminder::create($user);
          $reset_code=$reminder->code;

          Mail::send('emails.password_reset', ['user' => $user,'reset_code'=>$reset_code], function ($m) use ($user) {
            $m->from('postmaster@sandbox62888e3e7d934411ba499c21e33c44f0.mailgun.org', 'Kescrow');

            $m->to($user->email, $user->first_name)->subject('Password Reset!');
       });



          return Response::json([
              'success' => [
                  'message' => 'Success. Check email',

              ]
          ], 200);
        }

      }



    }

    public function register()
    {
        //validate
        $rules = [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'username'  => 'required|min:6|unique:users',
            'password' => 'required|min:6',
            'phone' => 'required|numeric',
        ];

        $input = Input::only(
            'email',
            'first_name',
            'last_name',
            'username',
            'password',
            'phone'
        );

        $validator = Validator::make($input, $rules);

        if ($validator->fails()) {
            return Response::json([
                'error' => [
                    'message' => $validator->errors()->all(),

                ]
            ], 422);
        } else {

            $credentials = [
                'email' => Input::get('email'),
                'username' => Input::get('username'),
                'first_name' => Input::get('first_name'),
                'last_name' => Input::get('last_name'),
                'phone' => Input::get('phone'),
                'password' => Input::get('password')
            ];

            //save data

            Sentinel::register($credentials);

            $user = Sentinel::findByCredentials($credentials);

            //create activation code+detail

            $activation = Activation::create($user);

            //attatch default role
            if ($this->Request->has('role')) {

              $role = Sentinel::findRoleById(Input::get('role'));

              $role->users()->attach($user);


            }else {
              $role = Sentinel::findRoleBySlug('user');

              $role->users()->attach($user);
            }


            /**
             * send verification email
             */

             //$message = new \stdClass();

             //$message->user = $user->name;


             //$message->text = "Dear $message->user,
             //Your account was created. Your activation code is $activation->code
             //";

             //return View::make('emails.verify', compact('message'));

             //            //Send email here using the mailer function
             //            Change this when going live to make it send email
             $user_email=$user->email;
             $user_name=$user->first_name;

               Mail::send('emails.verify', ['user' => $user,'activation_code'=>$activation->code], function ($m) use ($user) {
                 $m->from('info@kescrow.co.ke', 'Kescrow');
                 $m->replyTo('info@kescrow.co.ke', 'Kescrowinfo');

                 $m->to($user->email, $user->first_name)->subject('Account creation.');
            });


            return Response::json([
                'success' => [
                    'message' => 'User created. A verification code was sent to Email.',

                ]
            ], 200);
        }


    }

    public function verify()
    {

      //validate
      $rules = [
          'email' => 'required|email|exists:users',
          'code' => 'required|exists:activations',

      ];

      $input = Input::only(
          'email',
          'code'

      );

      $validator = Validator::make($input, $rules);

      if ($validator->fails()) {
          return Response::json([
              'error' => [
                  'message' => $validator->errors()->all(),

              ]
          ], 422);
      } else {

        $credentials = [
            'login' => Input::get('email'),
        ];

        $user = Sentinel::findByCredentials($credentials);

        $activation = Activation::exists($user);

        if (Activation::complete($user, Input::get('code')))
          {
            return Response::json([
                'success' => [
                    'message' => 'Account activated.',

                ]
            ], 200);
          }
          else
          {
            return Response::json([
                'error' => [
                    'message' => 'Activation not found or not completed or expired.',

                ]
            ], 401);
          }




      }





    }
}
