<?php


use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Role;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;


class RoleTableSeeder extends Seeder
{
    public function run()
    {
        Model::unguard();

        DB::table('roles')->delete();

        $roles = array(
            ['name' => 'Administrator','slug' => 'admin'],
            ['name' => 'User','slug' => 'user']

        );

        // Loop through each user above and create the record for them in the database
        foreach ($roles as $role)
        {
            Role::create($role);
        }

        Model::reguard();
    }
}
