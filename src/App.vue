<template>
  <div id="app">
    <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/time">Time</router-link>
    <router-link to="/weather">Weather</router-link>
  </div>
  <router-view />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/main';
</style>
