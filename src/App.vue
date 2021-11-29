<template>
  <div id="app">
    Apple
    <router-link to="/news/detail/:newsId">News</router-link>-
    <router-link to="/iPad">iPad</router-link>-
    <router-link to="/iPhone">iPhone</router-link>-
    <router-link to="/API">Watch</router-link>-
    <router-link to="/AirPods">AirPods</router-link>-
    <router-link to="/youtube/:videoId">Youtube</router-link>-
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data(){
    return{

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
