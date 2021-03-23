<template>
<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2">
    <slot></slot>
  </label>
  <datepicker
    input-class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Date"
    v-model="dateValue"
    @change="handleChange"
    value-type="MM/DD/YYYY"
  ></datepicker>
</div>
</template>

<script>
import Datepicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: 'AppDatepicker',
  components: {
    Datepicker,
  },
  data() {
    return {
      dateValue: '',
    };
  },
  methods: {
    handleChange(date) {
      this.$emit('input', date);
    },
  },
};
</script>

<style>
  .input-error label{
    color: red;
  }
  .input-error input{
    border-color: red;
  }
</style>
