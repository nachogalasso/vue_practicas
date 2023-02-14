// aquí es donde empezamos a trabajar con VUE. El Vue.createApp viene del CDN
const app = Vue.createApp({
   setup() {
      const title = "Coche";
      let power = 80;

      // function
      const upPower = () => {
         power += power;
      }

      const downPower = () => {
         power -= power;
      }

      return {
         title,
         power,
         upPower,
         downPower,
      }
   }
})