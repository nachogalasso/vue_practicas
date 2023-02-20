<template>
   <section class="wheekit-container">
      <img src="" alt="user_profile_picture">
      <div class="message-container">
         <textarea name="message" id="message" placeholder="What's happening...?"></textarea>
         <div class="btns">
            <ul class="optBtns">
               <li class="optBtns-item">
                  <font-awesome-icon icon="fa-solid fa-image" />
               </li>
               <li class="optBtns-item">
                  <font-awesome-icon icon="fa-regular fa-gif" />
               </li>
               <li class="optBtns-item">
                  <font-awesome-icon icon="fa-solid fa-square-poll-horizontal" />
               </li>
               <li class="optBtns-item">
                  <font-awesome-icon icon="fa-solid fa-face-smile" />
               </li>
               <li class="optBtns-item">
                  <font-awesome-icon icon="fa-solid fa-calendar" />
               </li>
               <li class="optBtns-item">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
               </li>
            </ul>
            <button type="submit">Wheek it</button>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   name: "Message",
   props: {
      msg: String,
   },
}
</script>

<style scoped>

.wheekit-container {
   display: flex;
   border: .1rem solid #000;
   width: 100%;
   justify-content: space-between;
   padding: .5rem 0;
   grid-column: 2 / 3;
   grid-row: 2 / 4;
}

.wheekit-container img {
   width: 4rem;
   height: 4rem;
   margin: 0 0 0 .5rem;
   border: .1rem solid salmon;
   border-radius: 50%;
}

.message-container {
   /* width: 85%; */
   flex: 0 0 calc(80% - 1rem);
   padding: 0 .5rem;
}

textarea {
   width: 95%;
   padding: .5rem;
   border-radius: 1rem;
   border: none;
   resize: none;
}

.btns {
   display: flex;
   justify-content: space-between;
}

.optBtns {
   margin: 0;
   padding: 0;
   display: flex;
   flex: 0 0 calc(65% - 1rem);
}

.optBtns-item {
   display: flex;
   justify-content: space-around;
   width: 100%;
   list-style-type: none;
}

.btns button {
   padding: .5rem .6rem;
   border-radius: 1.2rem;
}
</style>