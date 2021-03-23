<template>
  <div>
    <app-header></app-header>
    <div class=" container mx-auto grid grid-rows-2 grid-flow-col gap-6">
      <div class="row-span-1">
        <add-booking></add-booking>
      </div>
      <div class="row-span-2">
        <manage-bookings></manage-bookings>
      </div>
      <div class="row-span-3 col-span-8">
        <booking-stats></booking-stats>
      </div>
    </div>
  </div>
</template>

<script>
import { AppHeader } from '@components';
import { AddBooking, ManageBookings, BookingStats } from '@partials';

export default {
  name: 'Booking',
  components: {
    AppHeader,
    AddBooking,
    ManageBookings,
    BookingStats,
  },
};
</script>
