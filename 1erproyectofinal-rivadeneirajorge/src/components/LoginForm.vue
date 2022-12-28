<template>
  <Vueform v-model="datosLogin">
    <StaticElement name="titulo"><h1>Login</h1></StaticElement>
    <GroupElement name="informacionPersonal" label="">
      <TextElement
        name="email"
        placeholder="Email"
        rules="required|email|max:255"
        :debounce="300"
        validate-on="change"
      />
      <TextElement
        name="password"
        input-type="password"
        placeholder="Contraseña"
        :rules="['required']"
        :debounce="300"
      />
    </GroupElement>
    <ButtonElement name="crearUsuario" add-class="mt-2" submits>
      Ingresar
    </ButtonElement>
    <StaticElement name="linkToLogin">
      <router-link to="/registro">No tengo una cuenta</router-link>
      <pre>{{datosLogin}}</pre>
    </StaticElement>
  </Vueform>
</template>

<script>
import { Vueform, useVueform } from "@vueform/vueform";

export default {
  //   name: 'LoginForm',
  mixins: [Vueform],
  setup: useVueform,
  data() {
    return {
      datosLogin: {},
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
  methods: {
    chequearUsuario() {
      console.log("Se ejecuta chequearUsuario()");
      const encontrado = this.$store.state.listaUsuarios.find(
        (usuario) =>
          usuario.email == this.datosLogin.email &&
          usuario.password == this.datosLogin.password
      );
      console.log(`encontrado es: ${encontrado}`);
    },
  },
};
</script>

<style scoped>
</style>