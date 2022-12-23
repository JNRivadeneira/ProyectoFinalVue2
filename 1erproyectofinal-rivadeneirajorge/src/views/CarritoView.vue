<template>
  <div class="carrito">
    <carrito-component/>
  </div>
</template>

<script>
import CarritoComponent from '@/components/CarritoComponent.vue';
export default {
  components: { CarritoComponent },
    name: 'CarritoView'
};
</script>