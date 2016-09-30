<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNameToItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("ALTER TABLE `items` ADD COLUMN `name` VARCHAR(45) NULL AFTER `id`,
        ADD COLUMN `transaction_id` INT(11) NULL AFTER `description`");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("ALTER TABLE `items`
          DROP COLUMN `transaction_id`,
          DROP COLUMN `name`;");
    }
}
