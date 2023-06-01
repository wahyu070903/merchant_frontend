<template>
    <Navbar />
    <div class="pl-24 pr-40">
        <div class="w-full flex flex-row items-center mt-8">
            <div class="w-[40em] h-[20em] bg-gray-200 rounded-2xl p-6">
                <p class="text-4xl font-bold">DISCOVER THE LATEST <br> 
                FASHION AND ELEVATE <br>
                YOUR STYLE </p>
                <p class="mt-2 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac faucibus urna, vitae ultrices ante. Phasellus vitae diam suscipit, facilisis nulla non, finibus lorem.</p>
                <div class="flex flex-row items-center mt-12">
                    <button type="button" class="rounded-md px-2 py-2 bg-red-600 text-white">
                        Explore Our Shop
                    </button>
                    <button type="button" class="ml-4">
                        <svg class="w-10 h-10 stroke-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
                    </button>
                </div>
            </div>
            <Splide :options="{type: 'loop', pagination: false, autoplay:true, interval: 5000 }" class="top_slide w-[20em] h-[20em] bg-green-200 ml-6 rounded-2xl">
                <SplideSlide class="relative">
                    <img class="rounded-2xl" src="@/assets/images/thumb1.jpg">
                    <p class="absolute top-4 right-4 text-white text-2xl font-bold">01</p>
                    <div class="absolute left-4 bottom-4">
                        <p class="font-bold text-white">RECOMENDATION TREND</p>
                        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac faucibus urna.</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="relative">
                    <img class="rounded-2xl" src="@/assets/images/thumb2.jpg">
                    <p class="absolute top-4 right-4 text-white text-2xl font-bold">02</p>
                    <div class="absolute left-4 bottom-4">
                        <p class="font-bold text-white">RECOMENDATION TREND</p>
                        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac faucibus urna.</p>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
        <div class="mt-12 grid grid-cols-4">
            
            {{ topItems }}
            <!-- <ProductCard img_name="thumb2.jpg" name="Baju ini sangat Bagus wajib Beli 10biji" price="80.0" class="w-[16em] h-[20em]"/>
            <ProductCard img_name="thumb2.jpg" name="Baju ini sangat Bagus wajib Beli 10biji" price="80.0" class="w-[16em] h-[20em]"/>
            <div class="col-span-2">
                <p>aaa</p>
            </div>
            <ProductCard img_name="thumb2.jpg" name="Baju ini sangat Bagus wajib Beli 10biji" price="80.0" class="w-[16em] h-[20em]"/>
            <ProductCard img_name="thumb2.jpg" name="Baju ini sangat Bagus wajib Beli 10biji" price="80.0" class="w-[16em] h-[20em]"/>
            <ProductCard img_name="thumb2.jpg" name="Baju ini sangat Bagus wajib Beli 10biji" price="80.0" class="w-[16em] h-[20em]"/>
            <ProductCard img_name="thumb2.jpg" name="Baju ini sangat Bagus wajib Beli 10biji" price="80.0" class="w-[16em] h-[20em]"/> -->
        </div>
        <div>
            <video autoplay></video>
        </div>
    </div>    
    <Footer />
</template>
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
                axios.get("http://127.0.0.1:8000/api/product/getrange/1/3")
                .then(response => {
                    this.topItems = response.data.message
                })
            }
        },
        mounted(){
            this.GetTopItem()
        }

    }
</script>