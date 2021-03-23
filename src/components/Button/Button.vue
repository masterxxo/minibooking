<template>
  <button
    class=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    :class="getButtonBackground"
    type="button"
    @click="buttonEvent"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    bg: {
      type: String,
      default: 'blue',
    },
  },
  computed: {
    getButtonBackground() {
      return this.bg === 'blue' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-red-500 hover:bg-red-700';
    },
  },
  methods: {
    buttonEvent(event) {
      this.$emit('click', event);
    },
  },
};
</script>
