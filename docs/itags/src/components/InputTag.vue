<script>
	export default {
        // vamos a crear unas props con el fin de poder tener nuestros datos y utilizarlos en la medida que los necesitemos.
        // recordar que para pasar datos entre componentes utilizamos las props, luego importar e indicar el componente.
        props: ["onTagsChange"],
        // tambien para pasar las propiedades de un componente podemos usar las emits
        // emits: ["onTagsChange"],
		// Estamos utilizando la Options
		data() {
			return {
				currentValue: "",
				tags: [],
                sAlert: false,
			};
		},

		//  Aqui colocamos las funciones
		methods: {
			// Este es un evento de teclado
			// handleKeyDown(e) {
			// 	if (e.key === "Enter" && this.currentValue !== "") {
			// 		this.tags.push(this.currentValue);
			// 		this.currentValue = "";
			// 		console.log("Le diste al Enter guachin");
			// 	}
			// },
            // Vamos a crear un evento de keyDown para luego eliminar las tags con el backspace
            handleKeyDown(e) {
                if(e.key === "Backspace" && this.currentValue === "") {
                    this.tags.pop()
                    this.onTagsChange(this.tags);
                    // this.$emit("onTagsChange", this.tags)
                }
            },
			// este es un evento de formulario
			handleSubmit() {
				if (this.currentValue !== "") {
                // ahora tenemos que asegurarnos que la etiqueta ingresada no se repita
                const repeat = this.tags.some(item => item === this.currentValue)
                // const repeat = this.tags.some(this.showAlert)
                if(!repeat) {
					this.tags.push(this.currentValue);
					this.currentValue = "";
                    this.onTagsChange(this.tags);
                    // this.$emit("onTagsChange", this.tags)

                    }
				}
			},
            // ahora le creamos un boton para eliminar nuestras etiquetas
            deleteTag(tag) {
                this.tags = this.tags.filter((item) => item !== tag );
                this.onTagsChange(this.tags);
                // this.$emit("onTagsChange", this.tags)

            },
            // showAlert() {
            //     this.sAlert = true
            // },
		},
	};
</script>

<template>
	<section class="inputTag">
		<div class="tags">
			<div class="tag" v-for="(tag, index) in tags" :key="index">
				{{ tag }} <button @click="deleteTag(tag)">X</button>
			</div>
		</div>
		<!-- <input type="text" name="tags" id="tags" v-model="currentValue" @keydown="handleKeyDown"> -->
		<!-- Podemos hacerlo con un evento de form y le colocamos un handleSubmit con el prevent -->
		<form @submit.prevent="handleSubmit">
			<input type="text" name="tags" id="tags" v-model="currentValue" @keydown="handleKeyDown"/>
		</form>
        <p v-if="this.tags.some(item => item === this.currentValue)">Tag already inserted</p>
	</section>
</template>

<style lang="scss" scoped></style>
