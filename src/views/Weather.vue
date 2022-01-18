<template>
  <div class="weather">
    <div class="weather__content">
      <div class="weather__search">
        <input
          type="text"
          v-model="cityName"
          placeholder="Город"
          class="weather__input"
        >
        <button
          class="weather__button"
          @click="showWeather"
        >
          Показать погоду
        </button>
      </div>
      <div v-if="weather.coord" class="weather__block">
        <div class="weather__place">{{ weather.name + ', ' + weather.sys.country }}</div>
        <div class="weather__date">{{ dateString }}</div>
        <div class="weather__temp">{{ Math.round(weather.main.temp - 273.15) + ' ℃' }}</div>
        <div class="weather__desc">{{ weather.weather[0].description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const weather = namespace('weather');

@Component
export default class WeatherPage extends Vue {
  cityName = '';
  dateString = '';

  created(): void {
    const date = new Date().toString();
    this.dateString = date.split(' ')[0] + ' ' + date.split(' ')[2] + ' ' + date.split(' ')[1] + ' ' + date.split(' ')[3];
  }

  @weather.State
  public weather!: Record<string, unknown>;

  @weather.Action
  public getId!: (city: string) => void;

  showWeather(): void {
    this.getId(this.cityName);
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main';
@import '@/assets/scss/weather';
</style>
