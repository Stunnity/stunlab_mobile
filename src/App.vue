<template>
  <div id="app">
    <router-view/>
      <navbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar"

export default {
  name:"App",
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
@import "assets/scss/main.scss";

html,body{
  padding: 0;
  margin: 0;
}
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: $screen-size;
  max-width: 450px;
  margin: auto;

}
</style>
