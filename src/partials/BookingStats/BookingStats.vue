<template>
  <app-box>
    <h2 class="text-xl font-bold mb-5">Bookings Stats</h2>
    <app-chart :chartData="getChartData"></app-chart>
  </app-box>
</template>

<script>
import { AppBox, AppChart } from '@components';

export default {
  name: 'StatsBookings',
  computed: {
    getChartData() {
      const dates = this.$store.getters.getBookingsData;
      const keys = Object.keys(dates);
      const chartValues = [];

      for (let i = 0; i < keys.length; i += 1) {
        chartValues.push(
          {
            x: keys[i],
            y: dates[keys[i]],
          },
        );
      }

      return chartValues;
    },
  },
  components: {
    AppBox,
    AppChart,
  },
};
</script>
