
<script>
// OJO QUE SI ME PONE <script setup> PUEDE DARME ERROR

  // import Car from "./components/Car.vue"
  import Carprops from "./components/Carprops.vue"
  // import CarOptions from "./components/CarOptions.vue"
// Si nuestro componente no funciona, podemos hacer export default {components: {Car,},} De esta manera veremos que nuestro
// componente se despliega en la app. A su vez Car puede importar otros componentes y utilizarlos. De esta manera puedo ir
// armando mi amplicación
// Para lograr que las variables se importen a los componentes no olvidar el import {ref} from "vue"
import {ref} from "vue"

// suele colocarse en el script también
export default {
  components: {
    // Car
    // CarOptions,
    Carprops,
  },
  // aquí es donde vamos a declarar nuestra nueva variable con el fin de pasarla luego como Props en Car.vue. Como la variable
  // va a cambiar no la declaramos con const, por ello utilizamos let
  setup() {
    // let powered = 30;
    let powered = ref(30);
    // aquí tenemos nuestra variable declara, ahora tendremos que exportarla a nuestro template

// trabajamos con functions a través de las props. Las mismas conviene que las declaremos de tipo flecha
const upPower = () => {
  // Para lograr que nuestra variable se incremente, tenemos que utilizar el import {ref}
  powered.value++;
}

const downPower = () => {
  powered.value--
}
// Con return ya podemos exportar nuestra variable, la cual ahora la tenemos que enviar a Car.vue y lo hacemos mediante los
// props, para eso utilizamos el <Car />, en la etiqueta pasamos nuestra variable 'powered'
    return {
      powered,
      upPower,
      downPower,
    };
  },
};
</script>

<template>
 <h1>Hola desde VUE JS</h1>
 <p>Hello World</p>
 <Carprops :power="powered"  :upPower="upPower" @downPower="downPower"/>
 <!-- de esta forma estoy utilizando el componente de Car. Así puedo hacer con todos. De la misma forma que enviamos un :key lo mismo hacemos con la function, le indicamos nombre y le decimos qué vamos a pasar. Luego tenemos que indicarle a nuestro componente que le va a llegar una function y lo hacemos en el apartado de props. Funciona igual que el anterior, tenemos que colocarle los 2 puntos por delante :upPower="upPower"-->
 <!-- Con el EMIT pasamos la function utilizando el @downPower, luego lo tenemos que configurar en nuestro componente, la única diferencia es que no irá en los props, sino que tendremos que crear un objeto EMIT, pero estos en realidad son un array -->
 <!-- <CarOptions /> -->
 <hr />
 <!-- <Car />  lo guardamos porque ahora le pasaremos una prop -->
 <!-- Al colocar power="powered" (el 1er nombre es una clave y el 2do es un texto), por el momento estamos pasando un texto. Si queremos pasar una variable entonces le tendremos que colocar los :delante, nos queda :power="powered". Luego recordar que en nuestro componente Car.vue, tendremos que indicar nuestro props -->
 <!-- <Car power="powered" /> -->

</template>

<style scoped>

</style>
