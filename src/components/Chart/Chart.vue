<template>
  <apexcharts
    v-if="chartData.length"
    type="bar"
    :options="chartDefaultOptions"
    :series="getChartSeries"
  ></apexcharts>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'AppChart',
  props: {
    chartData: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      chartDefaultOptions: {
        chart: {
          id: 'bookings',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [],
        },
      },
    };
  },
  computed: {
    getChartSeries() {
      const series = [{
        name: 'bookings',
        data: this.chartData,
      }];
      return series;
    },
  },
  components: {
    apexcharts: VueApexCharts,
  },
};
</script>
