<template>
  <Navbar></Navbar>
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar.vue';
export default{
  components : {
    Navbar
  }
}
</script>
<style>
#app {
  max-width: 500px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
