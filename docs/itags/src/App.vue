<script>
  import InputTag from "./components/InputTag.vue"

  export default {
    data() {
        return {
            msg: "Enter your tag"
        }
    },
    // no tenemos que olvidar de indicarle el componente que le estamos pasando
    components: {
        InputTag,
    },
    methods: {
        // le indicamos que le estamos pasando la variable de tags que viene del componente inputTag
        handleOnTagsChange(tags) {
            console.log(tags)
        }
    }
  }
</script>

<template>
	<InputTag  :onTagsChange="handleOnTagsChange" />
    <!-- para utilizar el emit cambiamos los : por un @ -->
    <!-- <InputTag @onTagsChange="handleOnTagsChange" /> -->
    <p>{{msg}}</p>
</template>

<style scoped>
</style>
