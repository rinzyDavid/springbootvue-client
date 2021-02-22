<template>
  <div id="container">
    <img alt="Vue logo" src="./assets/olafoods.jpg" style="width:150px;height:150px">
     <router-view />
  </div>
</template>

<script>
//import Home from './components/Home.vue'

export default {
  name: 'App',
  
}
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)

body {
  
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 2em;
  width: 80%;
  margin: 0 auto;
}

@import'~bootstrap/dist/css/bootstrap.css'

</style>
