<template>
<div class="container">
  <Navbar msg="inicio" />
  <Message />
</div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Message from './components/Wheekit.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Message
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: 0 auto;
  width: 40rem;
  max-width: 100rem;
  display: grid; 
  grid-template-columns: 1fr 400px 1fr; 
  grid-template-rows: repeat(3, 1fr); 
  gap: 0px 0px; 
}

</style>
