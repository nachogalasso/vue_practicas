<template>
	<form action="" @submit.prevent="handleSubmit">
		<input type="text" name="newtask" id="newtask" v-model="text" />
	</form>
</template>

<script setup>
	// import {ref} from "@vue/reactivity"; para importar más cosas vamos a usar solamente Vue
	import { ref } from "vue";
    // defineEmits como es un paquete macro, y no es necesario importarlo

	const text = ref("");

	// tenemos una function que se llama defineEmits, la cual para que nos funcione la tenemos que importar
	const emits = defineEmits(["onNewItem"]);

	function handleSubmit() {
		//  verificamos si texto es distinto de un elemento vacío
		if (text !== "") {
			//  para ello vamos a mandar a llamar a un emit, en donde primero ponemos el nombre del emit y luego el parámetro
            // => emits('onNewItem, text)
            emits('onNewItem', text);
            // ahora tenemos que limpiar el valor de text para eso tenemos que acceder al valor => text.value
            text.value = "";
            // luego de boards, es cuando vamos a llamar a nuestro componente
		}
	}
</script>

<style>
</style> 