<script setup>
	// Aquí también vamos a tener que definir los props
	import { ref } from "vue";
	import { pay } from "../store/store.js";
	// las variables las traemos de store
	const props = defineProps(['id', 'numberOfPerson', 'getPersonTotal', 'paid']);
	// tenemos que crear una referencia para que maneje el estado de paid
	let paid = ref(false);

	function handleChange(e) {
		// esto lo que hace es actualizar el estado de nuestra variable
		paid = e.target.value;
		// recordar que la function pay() nos pide 2 parámetros , por lo que se los tenemos que indicar aquí
		pay(props.id, paid);
	}
</script>

<template>
	
        <div>       
            <p class="person-number">Person {{ props.numberOfPerson }}</p>
            <p class="person-to-pay">
                {{
                    new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(props.getPersonTotal)
                }}
            </p>
            <section class="paid">
                <!-- luego tendremos que crear el evento -->
                <input type="checkbox" name="checkpaid" id="" @change="handleChange" />
                Paid
            </section>
        </div>
    
</template>

<style scoped>
</style>