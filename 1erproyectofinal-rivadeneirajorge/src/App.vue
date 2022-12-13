<template>
  <div class="container-sm" id="app" style="padding: 2px; max-width: 540px">
    <div class="componente my-4">
      <registro-form/>
    </div>
    <div class="componente my-4">
      <login-form/> 
    </div>
    <div class="componente my-4">
    <listado-component />
    </div>
    <div class="componente my-4">
    <menu-entradas/>
    </div>
    <div class="componente my-4">
    <carrito-component/>
    </div>
  </div>
</template>

<script>
import CarritoComponent from './components/CarritoComponent.vue';
import ListadoComponent from './components/ListadoComponent.vue';
import LoginForm from './components/LoginForm.vue';
import MenuEntradas from './components/MenuEntradas.vue';
import RegistroForm from "./components/RegistroForm.vue";

export default {
  name: "App",
  components: {
    RegistroForm,
    LoginForm,
    ListadoComponent,
    MenuEntradas,
    CarritoComponent,
  },
};
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
.componente {
  background-color: rgb(255, 254, 209);
}
</style>
