<?php

use Illuminate\Database\Seeder;
use App\TransactionStatus;

class TransactionStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $statuses =['Completed','Pending','Rejected','Lapsed','Under Review','Cancelled','Accepted'];
        foreach($statuses as $status){
            TransactionStatus::create(
                [
                    'name'=>$status
                ]
            );
        }

    }
}
