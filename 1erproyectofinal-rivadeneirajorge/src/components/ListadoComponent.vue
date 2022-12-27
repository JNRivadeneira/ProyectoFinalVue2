<template>
<!-- con fetch -->
      <main>
        <h1>Menu</h1>
        <table :class="cssClasses">
          <tr v-for="(menu, index) of menues" :key="index">
            <td>
              <card-component 
                :title="menu.title" 
                :image="menu.image" 
                :available-items="menu.availableItems"
              >
              </card-component>
              
            </td>
            <td>
              <p>{{menu.description}}</p>
            </td>
          </tr>
        </table>
      </main>
    
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'ListadoComponent',
  components: {
    CardComponent
  },
  data() {
    return {
        menues:[],
        cssClasses:{
            tableTextColor: true,
            tableBackGndColor: true,
        },
    };
  },
  created(){
    const URLGET="https://6384e61b3fa7acb14f041a45.mockapi.io/api/menues";
    //fetch recibe una URL y si no aclaramos nada es un GET. Funciona mediante promesas
    fetch(URLGET)
        .then(response => response.json())
        .then(data => {
            this.menues = data;
            console.log(data);
        })
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
