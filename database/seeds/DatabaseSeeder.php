<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();
		$this->call('RoleTableSeeder');
		$this->command->info('Role Table seeded');

		$this->call('UserTableSeeder');
        $this->command->info('Users table seeded');
		$this->call('TransactionTypeSeeder');
        $this->command->info('Transaction Type Table seeded');

        $this->call('TransactionStatusSeeder');
        $this->command->info('Transaction Status Table seeded');

		//for the transactions seed
        $this->call('TransactionsSeeder');
        $this->command->info('Transactions Table Seeded');


    }

}
