<template>
  <Vueform>
    <GroupElement name="group" :default="{Nombre: '', Apellido: ''}">
      <TextElement
        name="nombre"
        placeholder="Nombre"
        :columns="6"
      />
      <TextElement
        name="apellido"
        placeholder="Apellido"
        :columns="6"
      />
    </GroupElement>
    <ButtonElement name="button"> Submit </ButtonElement>
  </Vueform>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/*div {
background-color: burlywood;
}*/
</style>
