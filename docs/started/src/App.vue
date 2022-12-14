<script setup>
  import Car from "./components/Car.vue"
  import CarOptions from "./components/CarOptions.vue"
// Si nuestro componente no funciona, podemos hacer export default {components: {Car,},} De esta manera veremos que nuestro
// componente se despliega en la app. A su vez Car puede importar otros componentes y utilizarlos. De esta manera puedo ir
// armando mi amplicación

// suele colocarse en el script también
// export default {
//   components: {
//     Car,
//     CarOptions,
//   }
// }
</script>

<template>
 <h1>Hola desde VUE JS</h1>
 <p>Hello World</p>
 <!-- de esta forma estoy utilizando el componente de Car. Así puedo hacer con todos-->
 <CarOptions />
 <hr />
 <Car /> 

</template>

<style scoped>

</style>
