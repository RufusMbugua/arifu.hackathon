<?php


use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;


class UserTableSeeder extends Seeder
{
    public function run()
    {
        Model::unguard();

        DB::table('users')->delete();

        $users = array(
            ['first_name' => 'Kelvin','last_name' => 'Mureithi', 'email' => 'kelvinmwas@gmail.com', 'password' => 'secrets'],
            ['first_name' => 'Rufus','last_name' => 'Mbugua', 'email' => 'mbuguarufus@gmail.com', 'password' => 'secrets'],
            ['first_name' => 'Collins','last_name' => 'Ojenge', 'email' => 'collinsojenge@gmail.com', 'password' => 'secrets'],
            ['first_name' => 'Robert','last_name' => 'Njenga', 'email' => 'mr.njenga@gmail.com', 'password' => 'secrets']

        );

        // Loop through each user above and create the record for them in the database
        foreach ($users as $user)
        {
            Sentinel::registerAndActivate($user);
        }

        $assign= Sentinel::findById(1);

        $role = Sentinel::findRoleByName('Administrator');
        //dd($role);
        $role->users()->attach($assign);

        Model::reguard();
    }
}
