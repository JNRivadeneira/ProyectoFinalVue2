<template>
      <main>
        <h1>Entradas</h1>
        <div class="d-grip gap-2 d-flex justify-content-end">
        <button class="btn btn-outline-dark">Ver carrito</button>
        </div>
        <table :class="cssClasses">
          <tr v-for="(plato, index) of entradas" :key="index">
                <pre>{{plato}}</pre>
            <td>
              <card-component 
                :title="plato.title" 
                :image="plato.image" 
                :available-items="plato.availableItems"
                :cost="plato.cost"
                :shopping-card="true"
              >
              </card-component>
              
            </td>
            <td>
              <p>{{plato.description}}</p>
            </td>
          </tr>
        </table>
        <button class="btn btn-dark btn-lg">Menu</button>
      </main>
    
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'MenuEntradas',
  components: {
    CardComponent
  },
  data() {
    return {
        entradas: [],
        // menues:[
        //     {
        //         title: "Tablas de Quesos",
        //         image: require("@/assets/img/entradas/tablaQuesos.jpg"),
        //         cost: 10,
        //         description: "Sunt exercitation officia elit qui officia do ut sunt ullamco incididunt ipsum pariatur cillum. Labore aliqua ipsum incididunt in elit minim duis adipisicing pariatur. Nulla magna in elit Lorem mollit non cillum commodo nostrud laborum consectetur.",
        //         shoppingCard: true,

        //     },
        //     {
        //         title: "Tabla de Fiambres",
        //         image: require("@/assets/img/entradas/tablaFiambres.jpg"),
        //         cost: 12,
        //         description: "Dolor culpa nisi pariatur exercitation culpa quis ullamco aliqua elit. Ea elit dolor mollit dolore nulla laborum excepteur nostrud. Veniam pariatur consequat occaecat laborum dolor consectetur non magna ex. Veniam anim velit duis incididunt amet aliqua pariatur nostrud esse pariatur nulla. Aliquip dolore labore aliqua consectetur. Ut eu magna cillum voluptate quis.",
        //         shoppingCard: true,

        //     },
        //     {
        //         title: "Papas Fritas",
        //         image: require("@/assets/img/entradas/papasFritas.jpg"),
        //         cost: 20,
        //         description: "Est ullamco ut minim tempor voluptate anim pariatur esse labore Lorem dolor culpa. Velit cillum consectetur ad irure consequat dolore duis aliqua proident quis sit sit nulla. Proident tempor est ea eu eu sint incididunt non mollit mollit cillum magna mollit.",
        //         shoppingCard: true,

        //     },
        // ],
        cssClasses:{
            tableTextColor: true,
            tableBackGndColor: true,
        },
    };
  },
  created(){
    const URLGET="https://6384e61b3fa7acb14f041a45.mockapi.io/api/platos";
    //fetch recibe una URL y si no aclaramos nada es un GET. Funciona mediante promesas
    fetch(URLGET)
        .then(response => response.json())
            
        .then(data => {
            console.log(data)
            this.entradas = data;
            console.log(`entradas es: ${this.entradas}`);
        })
  },
  filters: {
    // entradas: (platos) => {
    //     return platos.entradas;
    // }
  },
}
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

h1 {
  text-align: center;
  background-color: blueviolet;
  color: antiquewhite;
}

h6 {
  color: dimgrey;
  font-family: Ubuntu, sans-serif, cursive;
}

.logo{
  width: 35px;
  float: left;
  margin: 0 5px;
}

.membrete{
  display: inline-block;
}

.fit-picture{
  max-width: 100%;
}

.tableTextColor{
  color: coral;
}

.tableBackGndColor{
  background-color: rgb(255, 254, 209);
}

p{
  font-family: 'Times New Roman', Times, serif;
  color: rgb(17, 71, 71);
  margin: 5%;
  text-align: justify;
}
</style>
