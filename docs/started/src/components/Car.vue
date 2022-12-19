<template>
	<!-- Esto acá arriba refiere al evento @click en Composition -->
	<h2>Coches</h2>
	<p>Marca {{ brand }}</p>
	<p>Model: {{ model }}</p>
	<p>Potencia: {{ powered }}</p>
	<p>Potencia: </p>
	<!-- los botones para el evento @click -->
	<button @click="upPower(10)">Aumentar</button>
	<button @click="downPower(10)">Disminuir</button>
	<!-- Finaliza el ejemplo del evento @click -->
	<h2>Coches</h2>
	<Test />
	<p>Marca: {{ brand }}</p>
	<!-- podemos llamar variables sin necesidad de colocarlas dentro de etiquetas -->
	<p>Model: {{ model }}</p>
	<!-- Podemos llamar a un valor de un array utilizando el index {{color[1]}} -->
	<!-- <p>Color: {{ color[1] }}</p> -->
	<!-- Ahora renderizamos con el bucle v-for -->
	<p>
		Color:
		<!-- <span v-for="(color, index) in colors" :key="index">{{ color }}</span> -->
		<!-- <span v-for="(color, index) in colors" :key="index">
			{{index}}: {{color}} -
		</span> -->
		<!-- Podemos hacer una lista también -->
	</p>
	<ul>
		<li v-for="(color, index) in colors" :key="index">
			{{ index }}: {{ color }}
		</li>
	</ul>
	<p>Precio: € {{ price }}</p>
	<p>Potencia: {{ power }} CV</p>
	<p>Potencia menor a 300 HP: (con v-if)</p>
	<ul>
		<!-- Recordar que no podemos poner la comparación en el li, ya que todavía no tuvimos acceso a la variable output, es por ello que se tiene que crear dentro de otra etiqueta para renderizarlo, se recomienda utilizar <template></template>. Para no tener inconvenientes en la renderización, lo recomendable es colocar primero la condición y luego el bucle para renderizar. Si lo coloco en la etiqueta <ul></ul> no me renderiza -->
		<li v-for="(output, index) in outputs" :key="index">
			{{ output }}
		</li>
	</ul>
	<ul>
		<template v-for="(output, index) in outputs" :key="index">
			<li v-if="output < 300">
				{{ output }}
			</li>
		</template>
	</ul>
	<p>Potencia mayores a 300 HP: (con v-if)</p>
	<ul>
		<template v-for="(output, index) in outputs" :key="index">
			<li v-if="output > 299">
				{{ output }}
			</li>
		</template>
	</ul>
	<p>Potencias (con v-if/else)</p>
	<ul>
		<template v-for="(output, index) in outputs" :key="index">
			<li v-if="output < 280">Urbana: {{ output }}</li>
			<!-- aplicamos el v-else-if con el fin de renderizar más condiciones -->
			<li v-else-if="output === 280">Hibrido: {{ output }}</li>
			<li v-else="output > 299">Carrera: {{ output }}</li>
		</template>
	</ul>
	<!-- Para llamar a un objeto se hace igual que JS, recordar que no es necesario ponerlo dentro de una etiqueta -->
	{{ mensaje.title }} - {{ mensaje.text }}
</template>

<script>
	// para crear variables con la API de opciones tenemos que utilizar el sector de script
	import Test from "./Test.vue";
	// Tenemos que importar 'ref' para poder interactuar con los variables con @click y binding
	import { ref } from "vue";
	export default {
		
		components: {
			Test,
		},
		// API de opciones
		// data() {
		// 	return {
		// aquí le estamos ingresando datos y le indicamos que nos devuelva los mismos con return. Para utilizar la variable
		// debemos ir al template colocamos los siguiente <p>Marca {{brand}}</p> veremos que nos sale en nuestra web
		// se queremos agregar más variables solamente tenemos que escribirlas dentro de nuestro obj data
		// Podemos crear Arrays dentro de nuestro data o variables objeto
		// brand: "Audi",
		// model: "A4",
		// color: "Black",
		// 		color: ["Azul", "Black", "Rojo", "Naranja"],
		// 		price: 38000,
		// 		power: 180,
		// 		mensaje: {
		// 			title: "Hola Mundo",
		// 			text: "Adios",
		// 		},
		// 	};
		// },

		// API COMPOSITION
		// La diferencia de esta API es que tendremos que hacer un return para que pueda aparacer en nuestro template. La
		// diferencia que ahora guardamos los valores en variables
		setup() {
			const brand = "Audi";
			const model = "A4";
			// cambiamos el array para poder trabajar con el
			// const color = ["Azul", "Rojo", "Verde", "Negro"];
			const colors = ["Rojo", "Azul", "Negro", "Verde", "Azul", "Amarillo"];
			const price = 35000;
			const power = 220;
			const outputs = [60, 80, 120, 160, 200, 280, 300, 390, 540, 500];
			const mensaje = {
				title: "Hola Mundo",
				text: "Adios",
			};

			// ahora tenemos que inicializar la variable con la function de ref
			// let powered = 50;
			let powered = ref(50);

			//  A diferencia de "Options", no necesitamos utilizar el methods y podemos crear nuestra function dentro de una
			// variable con una función flecha. Para exportarlos los tenemos que colocar dentro del return. Se utilizan de la misma
			// manera que el anterior, que para pasarle variables tenemos que hacerlo dentro de los ()
			// con el BINDING, podremos interactuar con otros valores y podremos ver reflejado en otros lugares. Aquí cambia un
			// la forma en la actuan los parámetros, ya no necesitamos utilizar this. Tenemos que tener en cuenta que si nuestra
			// variable va a cambiar de valor, declararla con un let. Veremos que en la consola el valor cambia, pero para poder
			// utilizarlo en la app tendremos que importar la function 'ref' de VUE
			const upPower = (newPower) => {
				console.log("Aumentar Potencia", +newPower);
				// powered++;
				// tendremos que llamar a la variable con el .value => powered.value
				// console.log(powered.value)
				// powered.value += 10;
				powered.value += newPower;
			};
			const downPower = (newPower) => {
				console.log("Disminuir Potencia", +newPower);
				// powered.value -= 10;
				// powered.value = powered.value - 10
				powered.value -= newPower;
			};


			return {
				brand,
				model,
				// color,
				colors,
				price,
				power,
				outputs,
				mensaje,
				powered,
				upPower,
				downPower,
			};
		},
	};
	// Aplicamos los bucles v-for que nos permiten renderizar varias cosas al mismo tiempo. Tenemos que tener en cuenta que
	// cuando trabajamos con un bucle v-for, le tenemos que indicar el index, podemos hacerlo mediante una 'key' única omitirla.
	// Para indicar la key tenemos que hacerlo con los :por delante, entonces :key="nombre". Si no tengo clave única, puedo
	// generar una para ello en el template tenemos que poner v-for="(color, index)" in colors" :key="index". Luego podemos
	// sumarle cosas cuando ponemos el color {{index}}: {{color}} - el guión al final permite separar los valores

	// CONDICIONALES v-IF-ELSE
	//	En este caso veremos cómo aplican los condicionales del if-else. Con el array de outputs buscaremos renderizar solamente
	// los valores que sean menores a cierta condición. Conviene siempre ponerlos juntos. No olvidar que si tenemos más
	// condiciones podemos utilizar el v-else-if

	// EVENTOS DE CLICK
	// Para estos eventos podemos utilizar también la API de OPCIONES y la COMPOSITION. En el archivo CarOptions está
	// la forma en la que escriben los eventos @click

	// PROPS
	// Las 'PROPS' es información que se traslada entre componentes. Por lo general es entre padre e hijos. El componente padre
	// enviará la información y el hijo es el que recibe los valores de las variables. De esta manera el componente hijo tendrá
	// disponible la información y podrá renderizar la información enviada en su template sin problemas. Además el hijo, le podrá
	// pasar información a otro componente dentro de él. Recordad que las 'props' es el paso de información entre componentes.
	// Lo podemos hacer mediante funciones. Por los 'props' podemos enviar variables simples, arrays, functions (que se 
	// declaren en el componente padre y que se ejecuten en el componente hijo), objetos y muchas cosas más.
	// Lo que vamos a hacer es trasladar datos desde App.vue a Car.vue a través de las props. En App.vue es dónde vamos a
	// declarar la nueva variable
</script>

<style></style>
