<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConflictsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conflicts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('transaction_id');
            $table->integer('raised_by');
            $table->string('description');
            $table->string('short_description')->nullable();
            //should be a drop down
            //examples DHL, UPS etc
            $table->string('shipping_method')->nullable();
            $table->string('tracking_number')->nullable();
            //file path with receipt
            $table->string('receipt')->nullable();
            $table->timestamp('resolved_at');
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
        Schema::drop('conflicts');
    }
}
