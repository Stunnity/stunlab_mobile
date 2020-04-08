<template>
  <div class="about">
    <div class="bg-image">
      <div class="search">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 21L16.65 16.65" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <p>Search book</p>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name:"Home",
  data(){
    return {
      visible:true
    }
  }
}
</script>
<style lang="scss" scoped>
	@import "../assets/scss/main.scss";


.about{
  .bg-image{
    width:100%;
    height: 15rem;
    background-image: url("../assets/images/lib_image.png");
    background-size: cover;
    position:relative;

    .search{
      background: white;
      width:70%;
      display: grid;
      grid-template-columns: 10% 90%;
      box-sizing: border-box;
      border-radius: 0.7rem;
      top:4rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      svg{
        padding:.5em
      }

      p{
        margin:.6rem;
        font-family: $poppins;
        font-style: normal;
        color:$lightgrayish;
        font-size: 1.1rem;
        text-align: left;
      }
    }
  }
}
  
</style>