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
        menues:[
            // {
            //     title: "Entradas",
            //     image: require("@/assets/img/entradas.jpg"),
            //     availableItems: 8,
            //     description: "Exercitation nostrud in reprehenderit esse sit eiusmod Lorem aliqua quis Lorem. Elit dolor sit amet culpa commodo. Laboris eu dolore incididunt ex adipisicing mollit aliqua quis ea ea sint ea ad cillum. Sint laboris quis adipisicing aliqua culpa id anim aliquip. Minim consectetur minim ut ut occaecat incididunt dolor.",

            // },
            // {
            //     title: "Pastas",
            //     image: require("@/assets/img/pasta.jpg"),
            //     availableItems: 12,
            //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae dolores dicta, quidem nulla soluta similique aliquid unde aperiam voluptas. Veniam, iste dignissimos? Odio quisquam voluptatem, voluptates blanditiis officiis magni.",
            // },
            // {
            //     title: "Carnes",
            //     image: require("@/assets/img/carne.jpg"),
            //     availableItems: 20,
            //     description: "Enim tempor exercitation esse ad enim officia commodo deserunt magna deserunt aute. Culpa exercitation enim commodo mollit sunt cupidatat. Culpa amet aliquip labore ullamco veniam. Voluptate cillum dolor pariatur voluptate esse. Ex in consectetur ex do enim magna sint labore.",
            // },
            // {
            //     title: "Pescados y Mariscos",
            //     image: require("@/assets/img/pescados.jpg"),
            //     availableItems: 7,
            //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae dolores dicta, quidem nulla soluta similique aliquid unde aperiam voluptas. Veniam, iste dignissimos? Odio quisquam voluptatem, voluptates blanditiis officiis magni.",
            // },
            // {
            //     title: "Ensaladas",
            //     image: require("@/assets/img/ensaladas.jpg"),
            //     availableItems: 6,
            //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae dolores dicta, quidem nulla soluta similique aliquid unde aperiam voluptas. Veniam, iste dignissimos? Odio quisquam voluptatem, voluptates blanditiis officiis magni.",
            // },
            // {
            //     title: "Veganos",
            //     image: require("@/assets/img/veganos.jpg"),
            //     availableItems: 20,
            //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae dolores dicta, quidem nulla soluta similique aliquid unde aperiam voluptas. Veniam, iste dignissimos? Odio quisquam voluptatem, voluptates blanditiis officiis magni.",
            // },
        ],
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
            console.log(this.menues)
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
