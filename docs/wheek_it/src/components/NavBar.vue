<template>
  <navbar class="aside-nav">
      <figure>
         <img src="${image}" alt="Wheek_It_logo">
      </figure>
   <ul class="nav-list">
      <li class="nav-list_item">
         <font-awesome-icon icon="fa-solid fa-house-chimney-window" />
      </li>
      <li class="nav-list_item">
         <font-awesome-icon icon="fa-solid fa-hashtag" />
      </li>
      <li class="nav-list_item">
         <font-awesome-icon icon="fa-solid fa-bell" />
      </li>
      <li class="nav-list_item">
         <font-awesome-icon icon="fa-solid fa-envelope" />
      </li>
      <li class="nav-list_item">
         <font-awesome-icon icon="fa-solid fa-bookmark" />
      </li>
      <li class="nav-list_item">
         <font-awesome-icon icon="fa-solid fa-list" />
      </li>
      <li class="nav-list_item">
         <font-awesome-icon icon="fa-solid fa-user" />
      </li>
      <li class="nav-list_item">
         <font-awesome-icon icon="fa-solid fa-grip" />
      </li>
   </ul>
   <button type="button">Wheek</button>
  </navbar>
</template>

<script>
export default {
   name: "NavBar",
   image: "/docs/wheek_it/src/assets/twitter_icon.png",
   msg: String,
}
</script>

<style scoped>
.aside-nav {
   grid-column: 1 / 2;
   grid-row: 1 / 4;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 0;
}

.nav-list {
   height: 80%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   padding: 0;
}

.nav-list_item {
   list-style-type: none;
}

</style>