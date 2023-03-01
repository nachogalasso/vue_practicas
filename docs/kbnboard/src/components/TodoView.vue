<template>
	<nav>
		<ul>
			<li><a href="#">Create Boards</a></li>
			<!-- estoy en el minuto 37 -->
		</ul>
	</nav>
</template>

<script setup>
	// para este ejercicio utilizamos la COMPOSITION API
	import { reactive } from "vue";

	// utilizamos ref() para declarar un valor sensillo como una variable reactiva, como un string, number o booleano
	// mientras que reactive() lo utilizamos para arrays u objetos. En boards vamos a definir cada variable de nuestros trableros
	// una vez que tenemos nuestra estructura es el momento de renderizarla en la etiqueta <template></template>
	let boards = reactive([
		{
			id: crypto.randomUUID(),
			name: "Board 1",
			items: [
				{
					id: crypto.randomUUID(),
					title: "Archivos",
				},
				{
					id: crypto.randomUUID(),
					title: "Resolver bug",
				},
			],
		},
		{
			id: crypto.randomUUID(),
			name: "Board 2",
			items: [
				{
					id: crypto.randomUUID(),
					title: "Textos",
				},
				{
					id: crypto.randomUUID(),
					title: "Envio reportes",
				},
			],
		},
	]);
	// export default {

	// }
</script>

<style scope></style>
