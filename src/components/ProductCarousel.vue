<template>
    <div class="flex flex-row items-start p-0">
        <div class="w-[6rem] h-[36rem] relative">
            <Splide :options="{ pagination:false, direction:'ttb', height:'100%',perPage: 4, focus:'center'}" class="w-full h-full">
                <SplideSlide>
                    <img src="../assets/images/baju1.jpg" class="w-[6rem] h-[8.8rem] object-cover">
                </SplideSlide>
                <SplideSlide>
                    <img src="../assets/images/baju2.jpg" class="w-[6rem] h-[8.8rem] object-cover">
                </SplideSlide>
                <SplideSlide>
                    <img src="../assets/images/model1.jpg" class="w-[6rem] h-[8.8rem] object-cover">
                </SplideSlide>
                <SplideSlide>
                    <img src="../assets/images/model2.jpg" class="w-[6rem] h-[8.8rem] object-cover">
                </SplideSlide>
                <SplideSlide>
                    <img src="../assets/images/model3.jpg" class="w-[6rem] h-[8.8rem] object-cover">
                </SplideSlide>
            </Splide>
        </div>
        <div class="large-gallery h-[36rem] w-[500px] p-0 mx-4 relative">
            <img class="h-full w-[500px] object-cover" :src="carouselChange">
            <button class="absolute top-0 right-0 w-8 h-8 bg-gray-700 rounded-md mx-2 my-2">
                <svg class="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
            </button>
        </div>
    </div>
  </template>
  <style scoped>
    .carousel-item:first-child {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .carousel-item:last-child {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .splide__list .is-active{
      border-bottom : solid 3px blue;
      transition: 0.15s;
    }
    ul::-webkit-scrollbar {
      display: none;
    }
  </style>
  <script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';

    export default {
      data(){
        return {
          currentImage : 0,
          itemCount : 5,
          images_src : [],
          perPage : 3
        }
      },
      components : {
        Splide,
        SplideSlide,
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
  