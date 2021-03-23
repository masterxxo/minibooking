import Vue from 'vue';
import Vuex from 'vuex';
import { prepareDateKey, sortKeys, prepareFinalData } from '../helpers/helpers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookings: [],
    currentId: 0,
  },
  mutations: {
    addNewBooking(state, payload) {
      state.bookings.push(payload);
    },
    removeBooking(state, payload) {
      state.bookings = state.bookings.filter((element) => element.id !== payload);
    },
    increaseId(state) {
      state.currentId += 1;
    },
  },
  actions: {
    createBooking(context, payload) {
      context.commit('addNewBooking', payload);
      context.commit('increaseId');
    },
    deleteBooking(context, payload) {
      context.commit('removeBooking', payload);
    },
  },
  getters: {
    getBookingsData(state) {
      let bookingsDates = [];

      for (let i = 0; i < state.bookings.length; i += 1) {
        bookingsDates.push(prepareDateKey(state.bookings[i].date));
      }

      bookingsDates = sortKeys(bookingsDates);

      return prepareFinalData(bookingsDates);
    },
  },
});
