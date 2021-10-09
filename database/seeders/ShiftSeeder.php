<?php

namespace Database\Seeders;

use App\Models\Shift;
use Illuminate\Database\Seeder;

class ShiftSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $shift = new Shift();
        $shift->shift = "morning";
        $shift->start_time = "08:00";
        $shift->end_time = "12:00";
        $shift->save();
        $shift2 = new Shift();
        $shift2->shift = "afternoon";
        $shift2->start_time = "12:00";
        $shift2->end_time = "04:00";
        $shift2->save();
        $shift3 = new Shift();
        $shift3->shift = "evening";
        $shift3->start_time = "04:00";
        $shift3->end_time = "09:00";
        $shift3->save();
    }
}
