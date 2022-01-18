<template>
  <div class="home">
    <h1 class="home__text">Welcome</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import '@/assets/scss/main';
@import '@/assets/scss/home';
</style>
