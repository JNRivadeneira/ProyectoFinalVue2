<template>
  <Vueform size="md" @submit.prevent="chequearUsuario()" v-model="prueba">
    <StaticElement name="title">
      <h1>Inicia Sesión</h1>
    </StaticElement>
      <GroupElement name="datosDeUsuario">
        <TextElement
          name="email"
          placeholder="e-mail"
          label=""
          :columns="12"
          rules="required|email:debounce=300"
        />
        <TextElement
          name="password"
          placeholder="Contraseña"
          label=""
          :columns="12"
          :rules="[
          'required',
          'confirmed',
        ]"
        />
        <ButtonElement name="iniciar" :submits="true">Iniciar</ButtonElement>
      </GroupElement>
      <StaticElement name="linkToRegister">
      <router-link to="/registro">No tengo una cuenta</router-link>
      <pre>{{prueba}}</pre>
    </StaticElement>
  </Vueform>
</template>

<script>
import { Vueform, useVueform } from "@vueform/vueform";

export default {
  name: 'LoginForm',
  mixins: [Vueform],
  setup: useVueform,
  data() {
    return {
      prueba: {},
    };
  },
  // data: () => ({
  //   // vueform: {
  //   // //   schema: {
  //   // //     email: { type: "text", label: "Email" },
  //   // //     password: { type: "text", inputType: "password", label: "Password" },
  //   // //   },
  //   // },
  //   email:'',
  //   password:''
  // }),
  methods:{
    chequearUsuario(){
        console.log("Se ejecuta chequearUsuario()");
        // const encontrado = this.$store.state.listaUsuarios.find((usuario) => (usuario.email == this.schema.email && usuario.password == this.schema.password));
        // console.log(`encontrado es: ${encontrado}`)
    }
  }
};
</script>

<style scoped>
</style>