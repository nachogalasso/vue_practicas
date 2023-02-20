<template>
   <header class="home">

      <h2>{{msg}}</h2>
      <ul class="list">
         <li>Para ti</li>
         <li>Siguiendo</li>
      </ul>
   </header>
</template>

<script>
export default {
   name: "Home",
   props: {
      msg: String,
   },
   
}
   
</script>

<style scoped>
.home {
   margin: 0 auto;
   width: 100%;
   grid-column: 2 / 3;
   border: .1rem solid #000;
}

.list {
   display: flex;
   justify-content: space-around;
}

li {
   list-style-type: none;
}

</style>