<template>
  <div class="time">
    <div class="time__value">{{ time }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Time extends Vue {
  private timer = 0;
  private time = new Date().toTimeString().replace(/ .*/, '');

  created(): void {
    this.startTimer();
  }

  beforeUnmount(): void {
    this.stopTimer();
  }

  public startTimer(): void {
    this.timer = setInterval(() => {
      this.time = new Date().toTimeString().replace(/ .*/,'');
    }, 1000);
  }

  public stopTimer(): void {
    clearTimeout(this.timer);
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/main";
@import "@/assets/scss/time";
</style>
