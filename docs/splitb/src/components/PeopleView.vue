
<script setup>
	// Aquí es dónde se van a renderizar los datos de nuestros cálculos.
	// Al importar el store, no tendremos que estar pasando información a través de las props o de los emits, ya que el estado
	// no está atado a un componente en especifico sino que lo tenemos centralizado en el archivo "store"
	import { store, getTotal } from "../store/store.js";
	// importamos nuestras etiquetas en este caso no son necesarias los {} porque estamos importando el componente
	// no los valores que hay dentro del mismo.
	import Label from "./Label.vue";
	import PerPerson from "./PerPerson.vue";
</script>

<template>
	<!-- Lo primero es saber si nuestro contenedor contiene items, en el caso de que no haya nada, entonces no vamos a ver el container, para ello le colocamos un v-if , vamos a tener que importar "store" a nuestro componente. -->
	<section class="no-items" v-if="store.people.length === 0">
		No People
	</section>
	<main class="people-view" v-if="store.people.length > 0" >
		<header class="header">
			<!-- <nav>
				 No olvidar de poner los () cuando colocamos un function y que la tenemos que importar en script 
				<h2>{{ getTotal() }}</h2>
				<h2>{{ store.params.remaining }}</h2> En vez de utilizar los tags por separado vamos a crear un componente que contenga las etiquetas y sea más escalable el proyecto 
			</nav> -->
			<div>
                <Label title="Total + tip: " :value="getTotal()" />
            </div>
			<div>
                <Label title="Remaining: " :value="store.params.remaining" />
            </div>
		</header>
		<section class="people-container">
			<!-- aquí vamos a renderizar lo que debe pagar cada persona, para eso vamos a utilizar v-for en store.people. Tenemos que indicarle lo que queremos renderizar de nuestro objeto. Vamos a crearlo con un componente -->
			<!-- {{person.getPersonTotal}} -->

			
                <PerPerson
                    v-for="person in store.people"
                    :key="person.id"
                    :id="person.id"
                    :person-number="person.numberOfPerson"
                    :person-to-pay="person.getPersonTotal"
                    :paid="person.paid"
                />
          
		</section>
	</main>
</template>

<style scoped>
</style>