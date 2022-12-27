<template>
      <main>
        <h1>Entradas</h1>
        <div class="d-grip gap-2 d-flex justify-content-end">
        <button class="btn btn-outline-dark">Ver carrito</button>
        </div>
        <table :class="cssClasses">
          <tr v-for="(plato, index) of entradas" :key="index">
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
import axios from 'axios'

export default {
  name: 'MenuEntradas',
  components: {
    CardComponent
  },
  data() {
    return {
        entradas: [],
        
        cssClasses:{
            tableTextColor: true,
            tableBackGndColor: true,
        },
    };
  },
  created(){
    const URLGET="https://6384e61b3fa7acb14f041a45.mockapi.io/api/platos";
    //fetch recibe una URL y si no aclaramos nada es un GET. Funciona mediante promesas
    // fetch(URLGET)
    //     .then(response => response.json())
            
    //     .then(data => {
    //         console.log(data)
    //         this.entradas = data;
    //         console.log(`entradas es: ${this.entradas}`);
    //     })
    // Using Axios
    axios.get(URLGET)
    .then(response =>{
        const platos = response.data
        this.entradas = platos[0].entradas
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
