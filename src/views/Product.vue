<template>
  <div class="flex flex-row items-start p-0">
    <div class="carousel relative w-fit">
      <button class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-8 bg-gray-500 opacity-80 hover:opacity-100">
        <svg class="mx-auto w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
      </button>
      <ul class="w-full">
        <li class="carousel-item active-carousel w-28 h-36 bg-red-500 mx-0 my-2 p-0 border border-blue-500" v-on:click="carouselChange">
          <img class="w-28 h-full object-cover p-0 m-0" src="../assets/images/model1.jpg">
        </li>
        <li class="carousel-item w-28 h-36 bg-red-500 mx-0 my-2" v-on:click="carouselChange">
          <img class="w-28 h-full object-cover" src="../assets/images/model2.jpg">
        </li>
        <li class="carousel-item w-28 h-36 bg-red-500 mx-0 my-2" v-on:click="carouselChange">
          <img class="w-28 h-full object-cover" src="../assets/images/model3.jpg">
        </li>
      </ul>
      <button class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-8 bg-gray-500 opacity-80 hover:opacity-100">
        <svg class="mx-auto w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
      </button>
    </div>
    <div class="large-gallery h-[600px] w-[300px] p-0 mx-4 relative">
      <img class="h-full w-[300px] object-cover" src="../assets/images/model1.jpg">
      <button class="absolute top-0 right-0 w-8 h-8 bg-gray-700 rounded-md mx-2">
        <svg class="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
      </button>
    </div>
  </div>
</template>
<style>
  .carousel-item:first-child {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .carousel-item:last-child {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
</style>
<script>
  export default {
    data(){
      return {

      }
    },
    mounted(){
      const carousel_item = document.getElementsByClassName("carousel-item")
      console.log(carousel_item)
    },
    methods : {
      carouselChange : function(event){
        const large_gallery = document.querySelector(".large-gallery img")
        const option_img = event.target.src;
        large_gallery.src = option_img;
      }
    }
  }
</script>
