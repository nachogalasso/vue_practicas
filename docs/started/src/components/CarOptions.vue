<template>
	<h2>Coches - Options API</h2>
	<p>Marca: {{ brand }}</p>
	<p>Model: {{ model }}</p>
	<p>Potencia: {{ power }}</p>
	<!--  Le vamos a agregar 2 botones para aumentar o disminuir la potencia -->
	<!-- <button @click="upPower">Aumentar</button> -->
	<!-- Le pasamos un parámetro a nuestra function -->
	<button @click="upPower(100)">Aumentar</button>
	<!-- Para llamar a los eventos click utilizamos el @click="" dentro le colocamos el nombre de la function que queremos utilizar -->
	<!-- <button @click="downPower">Disminuir</button> -->
	<button @click="downPower(100)">Disminuir</button>
</template>

<script>
	export default {
		data() {
			return {
				brand: "Ferrari",
				model: "812 GTS",
				power: 280,
			};
		},
		// Dentro del objeto 'methods' es donde colocamos las funciones que se van a ejecutar en nuestro <template></template>
		methods: {
			// las functions las llamamos igual que cuando lo hacemos en JS
			// upPower() {
			// 	console.log('Aumentar Potencia')
			// },
			// recordar que le podemos pasar variables o datos a las functions, se lo tenemos que indicar luego en el template
			upPower(newPower) {
				console.log("Aumentar potencia -->", +newPower);
				// para poder acceder a power, tenemos que utilizar 'this' console.log(this.power) . Si queremos interactuar
				// entonces tenemos que hacer lo siguiente:
				// this.power = this.power + 10; con this.power++ aumenta de 1 en 1
				// this.power += 10. Si quiero aumetar de forma específica puedo usar un parámetro
				this.power += newPower;
			},
			// hagamos el ejemplo con la de disminuir
			downPower(newPower) {
				console.log("Disminuir Potencia -->", +newPower);
				this.power -= newPower;
			},
			// downPower() {
			// 	console.log('Disminuir Potencia')
			// }
		},
	};

	// con el BINDING podremos interactuar con las demás variables cuando utilicemos el @click. NO OLVIDAR QUE PARA PODER
	// ACCEDER A CUALQUIER VARIABLE, TENEMOS QUE UTILIZAR LA PLABRA RESERVADA 'THIS'
</script>

<style scoped></style>
