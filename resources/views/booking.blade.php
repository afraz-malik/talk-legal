<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">


                <form action="{{route('booking.store')}}" method="post">
                    @csrf
                    <div class="row">
                        <div><input type="text" name="user_id" placeholder="user_id"></div>
                        <br>
                        <div><input type="text" name="total_price" placeholder="total_price"></div>
                        <br>
                        <div><input type="text" name="discount_percentage" placeholder="discount_percentage"></div>

                        <br>
                        <div><input type="text" name="is_cancel" placeholder="is_cancel"></div>

                        <br>
                        <hr width="100%">
                        <br>
                        1)
                        <div><input type="text" name="shift_id[]" placeholder="shift_id"></div><br>
                        <div><input type="text" name="second_professional_id[]" placeholder="second_professional_id"></div>
                        <br>
                        <div><input type="text" name="booking_date[]" placeholder="booking_date"></div>
                        <br><hr width="100%">
                        <br>
                        2)
                        <div><input type="text" name="shift_id[]" placeholder="shift_id"></div><br>
                        <div><input type="text" name="second_professional_id[]" placeholder="second_professional_id"></div>
                        <br>
                        <div><input type="text" name="booking_date[]" placeholder="booking_date"></div>

                    </div>

                    <div> <button type="submit">save</button></div>

                </form>
            </div>
        </div>
    </div>
</x-app-layout>
