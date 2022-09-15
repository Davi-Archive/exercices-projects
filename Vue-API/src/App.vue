<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ArtigosBlog />
  <NavigationBar msg="Navbar" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ArtigosBlog from './components/ArtigosBlog.vue'
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ArtigosBlog,
    NavigationBar,
}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
