<template>
  <!-- <Vueform> -->
    <form>
    <StaticElement name="titulo"><h1>Crear cuenta</h1></StaticElement>
    <GroupElement name="informacionPersonal" label="Información Personal">
      <TextElement
        name="nombre"
        placeholder="Nombre"
        rules="required"
        :columns="6"
      />
      <TextElement
        name="apellido"
        placeholder="Apellido"
        rules="required"
        :columns="6"
      />
    <!-- </GroupElement> -->
    <!-- <GroupElement name="informacionCuenta" label=""> -->
      <TextElement
        name="email"
        placeholder="Email"
        rules="required|email|max:255"
        :debounce="300"
        validate-on="change"
      />
      <DateElement name="fechaNacimiento" placeholder="Fecha de nacimiento" rules="required"/>
      <TextElement
        name="password"
        input-type="password"
        placeholder="Contraseña"
        :rules="[
          'required',
          'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/',
          'confirmed',
        ]"
        :debounce="300"
        :messages="{
          regex:
            'La contraseña debe tener al menos 8 caracteres y contener al menos un número, una mayúscula, y una minúscula.',
        }"
      />
      <TextElement
        name="password_confirmation"
        input-type="password"
        placeholder="Repite Contraseña"
        rules="required"
      />
    </GroupElement>

<div class="my-4 ">
    <ToggleElement name="notificame" :default="true">
      Quiero recibir correos con ofertas especiales. Podés desuscribirte en
      cualquier momento.
    </ToggleElement>
    <ButtonElement name="crearUsuario" add-class="mt-2" submits>
      Crear
    </ButtonElement>
    <StaticElement name="linkToLogin"><a href="#login">Ya tengo una cuenta</a></StaticElement>
</div>
    </form>
  <!-- </Vueform> -->
</template>

<script>
import { Vueform, useVueform } from "@vueform/vueform";

export default {
  mixins: [Vueform],
  setup: useVueform,
//   data: () => ({
    // vueform: {
    //   schema: {
    //     personal_information: {
    //       type: "group",
    //       label: "Personal information",
    //       schema: {
    //         firstname: {
    //           type: "text",
    //           placeholder: "First name",
    //           rules: "required",
    //           columns: 6,
    //         },
    //         lastname: {
    //           type: "text",
    //           floating: "Last name",
    //           placeholder: "Last name",
    //           rules: "required",
    //           columns: 6,
    //         },
    //       },
    //     },
    //     account_information: {
    //       type: "group",
    //       label: "Account information",
    //       schema: {
    //         email: {
    //           type: "text",
    //           placeholder: "Email address",
    //           rules: "required|email|max:255",
    //           debounce: 300,
    //         },
    //         password: {
    //           type: "text",
    //           inputType: "password",
    //           placeholder: "Password",
    //           rules: [
    //             "required",
    //             "regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/",
    //             "confirmed",
    //           ],
    //           debounce: 300,
    //           messages: {
    //             regex:
    //               "The Password must at least 8 characters long and contain at least one number, one uppercase and one lowercase character.",
    //           },
    //         },
    //         password_confirmation: {
    //           type: "text",
    //           inputType: "password",
    //           placeholder: "Password again",
    //           rules: "required",
    //         },
    //       },
    //     },
    //     remember_me: {
    //       type: "toggle",
    //       text: "Remember me",
    //     },
    //     submit: {
    //       type: "button",
    //       buttonLabel: "Register",
    //       addClass: "mt-2",
    //       submits: true,
    //     },
    //   },
    // },
//   }),
};
</script>

<style scoped>

</style>