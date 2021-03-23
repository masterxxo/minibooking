<template>
  <app-box class="max-w-sm">
    <h2 class="text-xl font-bold mb-5">Manage Bookings</h2>
    <app-table></app-table>
  </app-box>
</template>

<script>
import { AppBox, AppTable } from '@components';

export default {
  name: 'ManageBookings',
  components: {
    AppBox,
    AppTable,
  },
};
</script>
