<template>
    <div class="flex flex-row items-start p-0">
      <div class="carousel relative w-fit h-[28rem] overflow-hidden">
        <button class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-8 z-50 bg-gray-500 opacity-80 hover:opacity-100" v-on:click="buttonUp">
          <svg class="mx-auto w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
        </button>
        <ul class="w-full h-full overflow-scroll snap-y">
          <li class="carousel-item active-carousel w-28 h-[9rem] mx-0 my-2 p-0 snap-center" v-on:click="currentImage = 0">
            <img class="w-28 h-full object-cover p-0 m-0" src="../assets/images/model1.webp">
          </li>
          <li class="carousel-item w-28 h-[9rem] mx-0 my-2 snap-center" v-on:click="currentImage = 1">
            <img class="w-28 h-full object-cover" src="../assets/images/model2.webp">
          </li>
          <li class="carousel-item w-28 h-[9rem] mx-0 my-2 snap-center" v-on:click="currentImage = 2">
            <img class="w-28 h-full object-cover" src="../assets/images/model3.webp">
          </li>
          <li class="carousel-item w-28 h-[9rem] mx-0 my-2 snap-center" v-on:click="currentImage = 3">
            <img class="w-28 h-full object-cover" src="../assets/images/model4.webp">
          </li>
          <li class="carousel-item w-28 h-[9rem] mx-0 my-2 snap-center" v-on:click="currentImage = 4">
            <img class="w-28 h-full object-cover" src="../assets/images/model5.webp">
          </li>
        </ul>
        <button class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-8 z-50 bg-gray-500 opacity-80 hover:opacity-100" v-on:click="buttonDown">
          <svg class="mx-auto w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
        </button>
      </div>
      <div class="large-gallery h-[600px] w-[500px] p-0 mx-4 relative">
        <img class="h-full w-[500px] object-cover" :src="carouselChange">
        <button class="absolute top-0 right-0 w-8 h-8 bg-gray-700 rounded-md mx-2 my-2">
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
    .active-carousel{
      border : solid 1px blue;
    }
    ul::-webkit-scrollbar {
      display: none;
    }
  </style>
  <script>
    export default {
      data(){
        return {
          currentImage : 0,
          itemCount : 5,
          images_src : [],
          perPage : 3
        }
      },
      mounted(){
        const carousel_img = document.querySelectorAll(".carousel-item img")
        carousel_img.forEach(element =>{
          this.images_src.push(element.src)
        })
      },
      computed : {
        carouselChange : function(){
          const carousel = document.querySelectorAll(".carousel-item")
          if(carousel.length){
            carousel.forEach((element,index) =>{
              if(index == this.currentImage){
                element.classList.add('active-carousel')
                console.log("aktif cuy")
              }else{
                element.classList.remove('active-carousel')
              }
            })
          }
          return this.images_src[this.currentImage]
        }
      },
      methods : {
        buttonUp : function(){
          if(this.currentImage > 0){
            this.currentImage  = this.currentImage - 1
          }
          const slides = document.querySelectorAll(".carousel-item")
          slides.forEach((slide,index) => {
            if(index == this.currentImage)
            slide.scrollIntoView(top)
          })
        },
        buttonDown :function(){
          if(this.currentImage < this.itemCount - 1){
            this.currentImage = this.currentImage + 1
          }
          if(this.currentImage <this.itemCount - 2){
            const slides = document.querySelectorAll(".carousel-item")
            slides.forEach((slide,index) => {
              if(index == this.currentImage){
                slide.scrollIntoView(top)
              }
            })
          }
  
        }
      }
    }
  </script>
  