<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- dom缓存内存中 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header.vue'
  import Tab from 'components/tab/tab'
  import Player from 'components/player/player.vue'

  export default {
    components: {
      MHeader,
      Tab,
      Player
    }
  }
</script>

<style>

</style>
