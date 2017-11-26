<script>
  import Nav from './components/Nav';
  export default {
    name: 'app',
    components : {
      MyNav: Nav
    },
  }
</script>

<template>
  <div id="app">
    <MyNav />
    <router-view></router-view>
  </div>
</template>

<style>

</style>
