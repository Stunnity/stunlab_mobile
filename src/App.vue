<template>
<div>
    <div id="app">
    <router-view/>
      <navbar />
  </div>
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

html,body{
  padding: 0;
  margin: 0;
  font-size: 11px;
  box-sizing: border-box;
}
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: $screen-size;
  // max-width: 450px;
  margin: auto;
  margin-bottom: 4rem;

}
</style>
