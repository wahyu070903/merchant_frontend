<template>
    <Navbar />
    <div class="w-full h-[42rem] relative">
        <Splide :options="{ rewind: true, autoplay: true, interval:3000, arrows: false, pagination:false}" class="w-full h-full" @splide:active="updateCarouselProgress">
            <SplideSlide>
                <img src="../assets/images/carousel1.png" class="w-full h-[42rem] object-cover">
            </SplideSlide>
            <SplideSlide>
                <img src="../assets/images/carousel2.png" class="w-full h-[42rem] object-cover">
            </SplideSlide>
            <SplideSlide>
                <img src="../assets/images/carousel3.png" class="w-full h-[42rem] object-cover">
            </SplideSlide>
            <SplideSlide>
                <img src="../assets/images/carousel4.png" class="w-full h-[42rem] object-cover">
            </SplideSlide>
        </Splide>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-red-500 h-2.5 duration-500" :style="{ width : carouselProgress + '%'}"></div>
        </div>
    </div>
    <div class="pl-24 pr-40">
        <div class="mt-12 grid grid-cols-4 gap-x-4 gap-y-6">
            <template v-if="topItems.length != 0">
                <template v-for="(item,index) in topItems">
                    <template v-if="index == 2">
                        <div class="col-span-2 flex flex-col justify-center items-center">
                            <div>
                                <p class="font-black text-[4rem] leading-none"><span class="text-red-500">GET</span> OUR</p>
                                <p class="font-black text-[4rem] leading-normal"><span class="text-red-500">NEW</span> PRODUCT</p>
                            </div>
                        </div>
                    </template>
                    <ProductCard :id="item.id" :img_name=item.image :name=item.name price="80.0" class="w-[16em] h-[20em]"/>
                </template>
            </template>
        </div>
    </div> 
    <Footer />
</template>
<style>
</style>
<script>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
    import ProductCard from '../components/ProductCard.vue'
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';
    import axios from 'axios'

    export default {
        data(){
            return {
                carouselProgress : 0,
                topItems : []
            }
        },
        components : {
            Navbar,
            Footer,
            ProductCard,
            Splide,
            SplideSlide,
        },
        methods : {
            async GetTopItem(){
                axios.get("http://127.0.0.1:8000/api/product/getrange/1/6")
                .then(response => {
                    this.topItems = response.data.message
                })
            },
            updateCarouselProgress(splide,prev,next){
                this.carouselProgress = (100 * (splide.index + 1)) / ( splide.length)
            }
        },
        mounted(){
            this.GetTopItem()
        }
    }
</script>