<template>
  <div id="app">
    <navbar-component/>
    <router-view/>
  </div>

</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
export default {
  components: { NavbarComponent },
    
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  text-align: center;
  background-color: blueviolet;
  color: antiquewhite;
}

h6 {
  color: dimgrey;
  font-family: Ubuntu, sans-serif, cursive;
}

p{
  font-family: 'Times New Roman', Times, serif;
  color: rgb(17, 71, 71);
  margin: 5%;
  text-align: justify;
}

</style>
