<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\BookingItem;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        return 1;
        $bookings = Booking::with('bookingitems.shift')->get();
        return response([
            'message' => 'success',
            'data' => $bookings
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('booking');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $validator = Validator::make($request->all(), [

            'total_price' => 'required',
            'discount_percentage' => 'required',
            'is_cancel' => 'required',


            'shift_id' => 'required|array',
            'shift_id.*' => 'required',

            'second_professional_id' => 'required|sometimes|array',
            'second_professional_id.*' => 'sometimes',

            'booking_date' => 'required|array',
            'booking_date.*' => 'required',

        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }


        $booking = new Booking();
        $booking->user_id = Auth::user()->id;
        $booking->total_price = $request->total_price;
        $booking->discount_percentage = $request->discount_percentage;
        $booking->is_cancel = $request->is_cancel;
        $booking->save();

        for ($i = 0; $i < count($request->shift_id); $i++) {
            $booking_item = new BookingItem();
            $booking_item->booking_id = $booking->id;
            $booking_item->shift_id = $request->shift_id[$i];
            $booking_item->user_id = $request->second_professional_id[$i];
            $booking_item->booking_date = $request->booking_date[$i];
            $booking_item->save();

        }
        return response([
            'message' => 'Booking Created Successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $id)
    {

        $booking = $id->with('bookingitems.shift')->get();
        return response([
            'message' => 'success',
            'data' => $booking
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $id)
    {

        $bookings = $id->with('bookingitems.shift')->get();
        return response([
            'message' => 'success',
            'data' => $bookings
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {


        $validator = Validator::make($request->all(), [


            'user_id' => 'required',
            'total_price' => 'required',
            'discount_percentage' => 'required',
            'is_cancel' => 'required',


            'shift_id' => 'required|array',
            'shift_id.*' => 'required',

            'second_professional_id' => 'required|sometimes|array',
            'second_professional_id.*' => 'sometimes',

            'booking_date' => 'required|array',
            'booking_date.*' => 'required',

        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $booking_item_prevoious = BookingItem::where('booking_id', $id)->delete();

        $booking = Booking::where('id', $id)->first();
        $booking->user_id = $request->user_id;
        $booking->total_price = $request->total_price;
        $booking->discount_percentage = $request->discount_percentage;
        $booking->is_cancel = $request->is_cancel;
        $booking->save();


        for ($i = 0; $i < count($request->shift_id); $i++) {
            $booking_item = new BookingItem();
            $booking_item->booking_id = $booking->id;
            $booking_item->shift_id = $request->shift_id[$i];
            $booking_item->user_id = $request->second_professional_id[$i];
            $booking_item->booking_date = $request->booking_date[$i];
            $booking_item->save();

        }
        return response([
            'message' => 'Booking Updated Successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $id)
    {
        $booking=Booking::where('id',$id)->delete();
        $booking_item= BookingItem::where('booking_id', $id)->delete();
        return response([
            'message' => 'Booking Deleted Successfully']);
    }
}
