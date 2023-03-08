<script setup>
// importamos las props desde vue
// ahora creamos un array con los strings que va a contener
    const props =  defineProps(['title', 'value']);
</script>

<template>
  <nav>
      <h2 class="title">{{props.title}}</h2>
      <!-- para props.value vamos a llamar a una API que le de correspondencia a la moneda. Le indicamos en en-US que lo que buscamos es que sea en dólares y luego le indicamos el tipo de moneda. Al final le indicamos que haga un format de props.value -->
      <h2 class="value">{{
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(props.value)
        }}</h2>
  </nav>
</template>

<style scoped>

</style>