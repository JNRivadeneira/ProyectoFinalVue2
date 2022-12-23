<template>
  <div class="Listado">
    <listado-component/>
  </div>
</template>

<script>
import ListadoComponent from '@/components/ListadoComponent.vue'
export default {
    components: { ListadoComponent },
    name: 'ListadoView'
}
</script>