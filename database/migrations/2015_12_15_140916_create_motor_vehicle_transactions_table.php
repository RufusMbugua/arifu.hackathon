<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMotorVehicleTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('motor_vehicle_transactions', function (Blueprint $table) {
            $table->increments('id');
            //foreign key from the transaction table
            $table->integer('transaction_id');
            $table->string('model');
            $table->string('make');
            $table->string('odometer');
            $table->string('vin_no');
            $table->string('notes');
            $table->string('registration_number');
            $table->date('registration_expiry');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('motor_vehicle_transactions');
    }
}
