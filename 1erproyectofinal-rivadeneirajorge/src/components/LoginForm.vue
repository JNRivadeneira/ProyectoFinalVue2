<template>
  <form>
    <h1>Inicia sesión</h1>
    <GroupElement name="datosDeUsuario">
      <TextElement name="email" placeholder="e-mail" label="" :columns="12" rules="required|email:debounce=300"/>
      <TextElement name="contraseña" placeholder="Contraseña" :columns="12"/>
      <ButtonElement name="iniciar" :submits="true">Iniciar</ButtonElement>
    </GroupElement>
    <a href="#registro">No tengo una cuenta</a>
  </form>
</template>

<script>
import { Vueform, useVueform } from '@vueform/vueform'

export default {
  mixins: [Vueform],
  setup: useVueform,
  data: () => ({
    vueform: {
      schema: {
        email: { type: 'text', label: 'Email' },
        password: { type: 'text', inputType: 'password', label: 'Password' },
      }
    }
  }) 
}
</script>

<style scoped>

</style>