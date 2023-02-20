<template>
<div class="container">
  <Home msg="inicio" />
  <Message />
</div>
</template>

<script>

import Home from './components/Home.vue'
import Message from './components/Wheekit.vue'

export default {
  name: 'App',
  components: {
    Home,
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

:root {
  --title: 'Open Sans', Arial, Helvetica, sans-serif;
  --text: 'Merriweather Sans', Arial, Helvetica, sans-serif;
  --mainTransition: all 0.3s linear;  
  /* muzli colors */
  --primaryGreen: rgba(0,179,0);
  --mainDarkgreen: rgba(0,125,0);
  --mainLightgreen: rgba(191,255,191);
  --mainRed: rgba(179,0,0);
  --mainDarkred: rgba(125,0,0);
  --mainSpacing: .1rem;
}

html {
  font-size: 62.5%; 
  box-sizing: border-box;
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
  /* height: auto; */
  object-fit: contain;
}

h1, h2, h3,
h4, h5, h6 {
  font-family: var(--title);
}

p, a, li,
label, input, legend {
  font-family: var(--text);
}

</style>
