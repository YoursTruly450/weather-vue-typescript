import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import weather from '@/store/modules/weather';


axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    alert('Не удалось найти город, введите название города полностью');
    return Promise.reject(error);
  }
);

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    weather,
  },
});
