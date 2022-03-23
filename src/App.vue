<template>
  <div id="nav" class="container-fluid connectionbar ">
    <div class="row">
        <div class="col-md-12 col-lg-12 ">
        </div>
      </div>
    <router-view/>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  
</template>

<style>
@import "./styles/style.css";
*{
  box-sizing: border-box;
  
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn-loading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

html {
  scroll-behavior: smooth;
}

.connectionbar {
  position: relative;
  z-index: 9;
  /* width: 1440px; */
  /* overflow-y: scroll; */
  /* padding: 0; */
  
  background-color: rgb(230, 230, 230);
}
</style>
