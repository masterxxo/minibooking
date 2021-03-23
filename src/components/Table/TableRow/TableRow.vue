<template>
<div class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3">
  <div class="mr-3 inline-block">{{ writeName }}</div>
  <div class="mr-3 inline-block">{{ rowData.date }}</div>
  <div class="mr-3 inline-block">
    <app-button bg="red" @click="deleteRow">Delete</app-button>
  </div>
</div>
</template>

<script>
import { AppButton } from '@components';

export default {
  name: 'TableRow',
  props: {
    rowData: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    writeName() {
      return `${this.rowData.firstName} ${this.rowData.lastName}`;
    },
  },
  methods: {
    deleteRow() {
      this.$store.dispatch('deleteBooking', this.rowData.id);
    },
  },
  components: {
    AppButton,
  },
};
</script>
