<template>
    <div>
        <h1>Carrito de compras</h1>
        <table>
            <tr>
                <th></th>
                <th></th>
                <th>Items</th>
                <th>Descripción</th>
                <th>Precio unitario</th>
                <th>Subtotal</th>
                <th></th>
            </tr>
            <tr v-for="(item, index) in carritoItems" :key="index">
                <!-- <pre>{{carritoItems}}</pre> -->
                <td><button class="btn btn-outline-info">+</button></td>
                <td><button class="btn btn-outline-info">-</button></td>
                <td>{{item.cantidad}}</td>
                <td>{{item.descripcion}}</td>
                <td>{{item.precioUnitario}}</td>
                <td>{{item.cantidad * item.precioUnitario}}</td>
                <td><button class="btn btn-outline-danger">X</button></td>

            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>TOTAL</th>
                <th>550</th>
            </tr>
        </table>
        <div class="d-grid gap-2 d-flex justify-content-end py-5">
            <button class="btn btn-lg btn-outline-danger">Cancelar</button>
            <button class="btn btn-lg btn-success">Pagar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarritoComponent',

    data() {
        return {
            carritoItems:[
                {
                    cantidad: 2,
                    descripcion: "Papas fritas",
                    precioUnitario: 200,
                },
                {
                    cantidad: 3,
                    descripcion: "Tabla de quesos",
                    precioUnitario: 50
                }
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>