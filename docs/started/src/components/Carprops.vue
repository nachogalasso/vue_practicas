<template>
	<h2>Coches</h2>
	<p>Marca {{ brand }}</p>
	<p>Model: {{ model }}</p>
   <!-- para poder vizualizar el resultado con solo colocar la variable entre {{}} veremos que nos llega el resultado le tengo que colocar el nombre con la que llamo la variable en App.vue como nos llegan, no hace exportar los variables -->
	<p>Potencia: {{power}}</p>
   <button @click="upPower">Aumentar</button>
   <!-- Creamos un button para disminuir el power utilizando el EMIT -->
   <button @click="downPowerFn">Disminuir</button>
</template>

<script>
	export default {
		// PROPS. Como ahora trabajamos con props, tendremos que indicarle a vue cuáles serán, con el fin de que las pueda
		// renderizar. Para declararlas tendremos que hacer llamar a props. Le tenemos que indicar de que tipo es y si tiene
		// un valor por default. Siempre que trabajamos con props conviene que definamos el tipo de variable
      // y que además utilicemos un valor de default
		props: {
			power: {
				type: Number,
				default: 60,
			},
         // ahora pasamos nuestra function
         upPower: Function,
		},
      // los emits son arrays, luego en el setup, llegan como variable context
      emits: ["downPower"],

		setup(props, context) {
			const brand = "Audi";
			const model = "A4";

         console.log(props)
         // console.log(props.power )
         // Una forma de hacer funcionar nuestra function, es realizando lo siguiente
         // const testPower = () => {
          //    props.upPower()
         // Aquí dentro podemos poner todo lo que querramos que la function ejecute.
         // }
         // Aunque solamente de la forma en la que se encuentra veremos que también se puede utilizar sin tener que escribir
         // todo lo anterior

         console.log(context)
         // una forma de pasar nuestro emit
         const downPowerFn = () => {
            console.log('Disminuye el power')
            context.emit("downPower")
         }

			return {
				brand,
				model,
            // testPower,
            downPowerFn,
			};
		},
	};
</script>

<style>
/* Ahora es el momento de pasar functions a través de las props. Para ello tendremos que crear un function igual que cuando declaramos las variables en las props */
</style>
