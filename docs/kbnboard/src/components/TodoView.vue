<template>
	<nav>
		<ul class="navbar">
			<!-- Aquí agregamos la function para crear un nuevo tablero -->
			<li><a href="#" @click.prevent="createNewBoard">Create Boards</a></li>
		</ul>
	</nav>
	<section class="board-container">
		<div class="boards">
			<!-- No olvidar que cuando colocamos un v-for tenemos que indicarle el key que vamos a utilizar. Recordar que cada elemento tiene que renderizar sus propios elementos. luego aquí también vamos a indicarle los eventos de drag and drop, tenemos que también decirle cuando nos estamos moviendo y cuando termina, además de los momentos en los que se deben accionar. Recordar que el evento onDrop() recibe 2 parámetros, el 1ro es el evento por defecto y el 2do es el lugar de destino con @drop="onDrop($event, board)" estamos haciendo referencia a su mismo tablero. Lo que estamos haciendo es sacarlo de su tablero origen y lo estamos colocando en el de destino. Luego tenemos que configurar cada uno de nuestros elementos para que se puedan arrastrar -->
			<div class="board" 
                @drop="onDrop($event, board)" 
                @dragover.prevent
                @dragenter.prevent 
                v-for="board in boards" :key="board.id">
				<div class="item-title">{{ board.name }}</div>
				<!-- Aquí es dónde llamamos a nuestro componente para agregar los nuevos items, no olvidar que le tenemos que agregar el emit para que funcione correctamente @on-new-item y pasarle la function correspondiente -->
				<!-- <InputNew @onNewItem="handleNewItem" /> El problema con esto es que no tenemos al referencia del tablero con el que estamos trabajando por lo que tenemos que indicarle en nuestro comando -->
				<InputNew @onNewItem="(text) => handleNewItem(text, board)" />
				<div class="items">
                    <!-- Aqui configuramos a nuestros elementos para que se puedan arrastrar. Recordar que le tenemos que poner la propiedad de HTML draggable="true", luego tenemos que configurar nuestra function que en este caso es dragStart, en esta function vamos a tener que utilizar 3 parámetros -->
					<div class="item" 
                    draggable="true" 
                    @dragstart="startDrag($event, board, item)" 
                    v-for="item in board.items" :key="item.id">
						{{ item.title }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	// para este ejercicio utilizamos la COMPOSITION API
	import { reactive } from "vue";

	import InputNew from "./InputNew.vue";
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

	// ahora creamos la function para poder agregar las nuevas tareas a nuestras boards
	function handleNewItem(text, board) {
		// console.log(text.value, board.id, board.name) tenemos referencia del valor del texto y nuestros tableros. Ahora
		// tenemos que crear un nuevo objeto
		board.items.push({
			id: crypto.randomUUID(),
			title: text.value,
		});
	}

	// function para crear nuevos tableros
	function createNewBoard() {
		// aquí vamos a necesitar pedir un nombre al usuario, para ello creamos una variable solicitando la mismo
		const boardName = prompt("Name of the board");
		// ahora creamos la condicion de que si recibimos un valor distinto de vacio, tendremos que crear nuestro elemento.
		if (!!boardName) {
			boards.push({
				id: crypto.randomUUID(),
				name: boardName,
				items: [],
			});
		}
	}

	// Para el drag and drop tenemos muchos métodos, pero en nuestro caso vamos a usar startDrag y onDrop, para ello vamos
	// a crear functions especificas para cada uno. También tendremos que configurar las áreas dónde vamos a colocar los
    // elementos, en este caso va a ser cada uno de nuestros boards.
    // luego tenemos que indicarle cuando estamos moviendo y soltando nuestro elemento, eso lo hacemos en nuestra
    // etiqueta del boards.
    // Todos los eventos de drag and drop se refieren a que vamos estar trasnfiriendo datos. Para ello vamos a estar haciendo
    // transformaciones que van a terminar en un string

    // Para esta function vamos a tener que utilizar 3 parámetros, 1ro nuestro evento, 2do podemos pasar todo el board o el board.id, y por último todo el item.
	function startDrag(evt, board, item) {
        // vamos a utilizar el dataTransfer.setData( le indicamos que es texto y luego el 2do parámetro, un JSON.stringify con
        // con el fin de transformar un obj en un string) vamos a estar mandando el id de nuestro tablero y el id de nuestro obj
        // esta información es la que vamos a mandar a onDrop
        evt.dataTransfer.setData('text/plain', JSON.stringify({boardId: board.id, itemId: item.id}))
    }

    // La function onDrop() recibe 2 parámetros, una es el evento y el otro es el destino, para este caso son evt y dst
	function onDrop(evt, dest) {
        // acá vamos a tener que desestructurar el obj que estamos recibiendo =>
        const {boardId, itemId} = JSON.parse(evt.dataTransfer.getData('text/plain'));
        // console.log(boardId, itemId)
        // ahora creamos una variable donde busque un en boards, el id del board que estamos moviendo y que sea igual al 
        // elemento que estamos moviendo. Si
        // encuentra eso, entonces ahora vamos a hacer lo mismo con el item que estamos moviendo
        const boardOrigin = boards.find(item => item.id === boardId);
        const itemOrigin = boardOrigin.items.find(item => item.id === itemId);
        // Esto nos tendría que traer nuestro board e item
        console.log(boardOrigin.name, itemOrigin.title)
        // Ahora vamos con la 2da parte que es que se tienen que actualizar nuestros datos, en el tablero destino
        dest.items.push({...itemOrigin})
        // una vez que lo agrego puede eliminar el item de nuestro tablero de origen
        boardOrigin.items = boardOrigin.items.filter(item => item !== itemOrigin)


    }

	// export default {

	// }
</script>

<style scope>
	.navbar {
		width: 100%;
		height: 2.5rem;
		padding: 0;
		display: flex;
		align-items: center;
		background-color: aquamarine;
	}

	.navbar li {
		list-style-type: none;
		padding-left: 1.5rem;
		font-size: 1.4rem;
		font-variant: small-caps;
	}

	.navbar li > a {
		text-decoration: none;
	}
	.boards {
		display: flex;
		gap: 1rem;
	}

	.board {
		background-color: #efefef;
		padding: 1rem;
	}

	.items {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.item-title {
		text-align: center;
		padding: 0.5rem;
		text-transform: uppercase;
	}

	.item {
		background-color: #fff;
		padding: 1rem;
	}
</style>
