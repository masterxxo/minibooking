<template>
  <div class="overflow-auto max-h-64">
    <table-row
      v-for="booking in allBookings"
      :key="booking.id"
      :row-data="booking"
    >
    </table-row>
  </div>
</template>

<script>
import TableRow from './TableRow/TableRow.vue';

export default {
  name: 'AppTable',
  computed: {
    allBookings() {
      return this.$store.state.bookings;
    },
  },
  components: {
    TableRow,
  },
};
</script>
