<template>
  <app-box class="max-w-sm">
    <h2 class="text-xl font-bold">Add Booking</h2>
    <div class="flex flex-col mt-5">
      <app-input
        label="First name"
        v-model="firstName"
        :class="{ 'input-error': $v.firstName.$error }"
      ></app-input>
      <app-input
        label="Last name"
        v-model="lastName"
        :class="{ 'input-error': $v.lastName.$error }"
      ></app-input>
      <app-datepicker :class="{ 'input-error': $v.date.$error }" v-model="date">
        Date
      </app-datepicker>
      <div class="flex items-center justify-center">
        <app-button @click="addBooking">Add booking</app-button>
      </div>
    </div>
  </app-box>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import {
  AppBox,
  AppInput,
  AppButton,
  AppDatepicker,
} from '@components';

export default {
  name: 'AddBooking',
  mixins: [validationMixin],
  data() {
    return {
      firstName: '',
      lastName: '',
      date: '',
    };
  },
  components: {
    AppBox,
    AppInput,
    AppButton,
    AppDatepicker,
  },
  methods: {
    addBooking() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          date: this.date,
          id: this.$store.state.currentId,
        };
        this.$store.dispatch('createBooking', data);
      }
    },
  },
  validations: {
    firstName: { required },
    lastName: { required },
    date: { required },
  },
};
</script>
