<template>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        {{ label }}
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        :placeholder="label"
        @change="handleInput"
        v-model="inputValue">
    </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    val: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
  },
  created() {
    this.inputValue = this.val;
  },
};
</script>

<style scoped>
.input-error label{
  color: red;
}
.input-error input{
  border-color: red;
}
</style>
