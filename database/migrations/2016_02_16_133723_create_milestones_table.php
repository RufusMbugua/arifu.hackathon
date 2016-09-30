<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMilestonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('milestones', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('name');
          $table->integer('duration');
          $table->integer('cost');
          $table->timestamp('start_date');
          $table->integer('transaction_id');
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
        Schema::drop('milestones');
    }
}
