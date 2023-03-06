<script setup>
    import InputData from "./InputData.vue"
    import PeopleView from "./PeopleView.vue"

</script>

<template>
<!-- Aquí vamos a crear un contenedor y luego vamos a crear 2 componentes en los cuales en uno vamos a crear los inputs para ingresar la información y en el otro para poder vizualizar lo que cada persona debe pagar y poder chequear los que ya abonaron lo correspondiente a la división de gastos. -->
    <main class="container">
       <InputData />
       <PeopleView />
    </main>
</template>


<style scoped>

</style>