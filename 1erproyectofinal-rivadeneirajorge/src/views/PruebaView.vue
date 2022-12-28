<template>
  <div class="prueba">
    <prueba-component />
  </div>
</template>

<script>
// @ is an alias to /src
import PruebaComponent from '@/components/PruebaComponent.vue'

export default {
  name: 'PruebaView',
  components: {
    PruebaComponent
  }
}
</script>

    PruebaComponent