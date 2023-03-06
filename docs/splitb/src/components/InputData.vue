<template>
  <form action="" @submit.prevent="handleSubmit">
    <section class="form-container">
        <div class="form-inputs">
            <label for="total">Total</label>
            <input type="number" name="total" id="" v-model="total" required>
        </div>
        <div class="form-inputs">
            <label for="tio">Tip</label>
            <input type="number" name="tip" id="" v-model="tip" required>
        </div>
        <div class="form-inputs">
            <label for="people">People</label>
            <input type="number" name="people" id="" v-model="people" required>
        </div>
        <div class="form-inputs">
            <input type="submit" value="Calcular">
        </div>
    </section>
  </form>
</template>

<script setup>
import {ref} from "vue";
// importamos store y calculate de nuestra carpeta store
import {store, calculate} from "../store/store.js"
// Tenemos que definir un estado para cada uno de nuestros valores, para eso vamos a usar ref(0) con el fin de importar la
// referencia para cada uno de nuestros inputs. Recordar que cuando tenemos las referencias tenemos que hacer un v-model
// No olvidar de importar el ref => import {ref} from 'vue'
const total = ref(0);
const tip = ref(0);
const people = ref(0);

// Por último  le tenemos que agregar nuestro submit al formulario, evento reactivo
function handleSubmit() {
    // aquí es dónde modificamos el estado de nuestro 'store' sin necesidad de llamar a ningún emit o algún prop con respecto
    // al padre, ya que todo va a estar centralizado en la carpeta de store. Para eso tenemos que hacer el import, por store
    // y por calculate. Solamente tendremos que darle referencia a nuestro objeto, para que al darle al submit nos haga
    // los calculos
    store.params.total = total;
    store.params.tip = tip;
    store.params.people = people;
    // Por último llamamos a la function calculate
    calculate()

}
</script>

<style>

</style>