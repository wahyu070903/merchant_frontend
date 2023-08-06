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
        <div class="w-full bg-[#E9E9E9] rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-red-500 h-2.5 duration-500" :style="{ width : carouselProgress + '%'}"></div>
        </div>
    </div>
    <div class="relative mt-[96px]">
        <svg class="absolute -top-[40px] left-[54px]" width="58" height="45" viewBox="0 0 58 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5563 -1.34706e-05L0 15.5563L15.5563 31.1127L31.1127 15.5563L15.5563 -1.34706e-05ZM15.3791 5.65631L5.65637 15.379L15.3791 25.1017L25.1018 15.379L15.3791 5.65631Z" fill="#313131"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5563 -1.34706e-05L26 15.5563L41.5563 31.1127L57.1127 15.5563L41.5563 -1.34706e-05ZM41.3791 5.65631L31.6564 15.379L41.3791 25.1017L51.1018 15.379L41.3791 5.65631Z" fill="#313131"/>
            <rect x="13" y="28.5563" width="22" height="22" transform="rotate(-45 13 28.5563)" fill="#313131"/>
            <rect x="18.6564" y="28.379" width="13.75" height="13.75" transform="rotate(-45 18.6564 28.379)" fill="white"/>
        </svg>
        <div class="relative ml-[71px]">
            <div class="topitem-background absolute w-[1193px] h-[298px] z-0 top-[50%] -translate-y-[50%]">
                <div class="relative w-full h-full">
                    <div class="absolute bottom-0 right-0 mr-4 mb-4 flex flex-col items-center">
                        <svg class="fill-[#FF4444]" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.47955e-05 11.3137L11.3137 1.26572e-05L22.6274 11.3137L11.3137 22.6274L2.47955e-05 11.3137Z"/>
                        </svg>
                        <svg class="mt-2 fill-[#AFAFAF]" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.47955e-05 11.3137L11.3137 1.26572e-05L22.6274 11.3137L11.3137 22.6274L2.47955e-05 11.3137Z"/>
                        </svg>
                        <svg class="mt-2 fill-[#AFAFAF]" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.47955e-05 11.3137L11.3137 1.26572e-05L22.6274 11.3137L11.3137 22.6274L2.47955e-05 11.3137Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="relative flex flex-row z-[100] ml-[98px]">
                <div class="top_product_image relative w-[354px] h-[414px] transition duration-150 ease-out hover:-rotate-3">
                    <img src="../assets/images/top-product.png">
                </div>
                <div class="font-roboto mt-[22px] ml-[30px]">
                    <Splide :options="{ rewind: true, autoplay: true, interval:3000, arrows: false, pagination:false,direction:'ttb', height:'100%'}" class="w-full h-full">
                        <SplideSlide>
                            <p class="font-bold text-2xl">Top Of This Week Clothing</p>
                            <div class="flex flex-row items-center mt-[20px]">
                                <svg class="w-5 h-5 stroke-yellow-300 fill-yellow-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                <svg class="w-5 h-5 stroke-yellow-300 fill-yellow-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                <svg class="w-5 h-5 stroke-yellow-300 fill-yellow-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                <svg class="w-5 h-5 stroke-yellow-300 fill-yellow-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                <svg class="w-5 h-5 stroke-yellow-300 fill-yellow-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                            </div>
                            <p class="w-[600px] mt-[11px] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo lobortis nisi sed euismod. Cras vel tristique odio. Aenean dapibus, leo sed vehicula viverra, purus risus efficitur purus, vel rutrum nisi felis malesuada mi. Cras sit amet risus sed enim auctor blandit. Proin eget nibh a lorem venenatis laoreet et nec orci. Suspendisse aliquam, ligula in laoreet venenatis, ex quam ultricies justo, eu dapibus tortor nunc id metus. Proin urna elit, finibus a nisl a, sollicitudin lacinia nunc</p>
                            <div class="flex flex-row items-center mt-[40px]">
                                <div class="flex items-center justify-center px-[15px] h-[31px] bg-[#38D25A] rounded-[1px]">
                                    <p class="font-medium text-white">Ready</p>
                                </div>
                                <div class="flex items-center justify-center px-[15px] h-[31px] bg-[#D23838] rounded-[1px] ml-[18px]">
                                    <p class="font-medium text-white">10% Off</p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <p>Hello</p>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-row font-roboto mt-[130px] ml-[68px]">
        <div class="sticky top-[20px] flex flex-col w-[300px] self-start">
            <div class="flex flex-col">
                <div class="w-[300px] pr-[35px] pl-[25px] py-[12px] flex flex-row items-center justify-between relative z-0 bg-[#D9D9D9]">
                    <p class="text-xl text-[#313131]">Category</p>
                    <button @click="toggleSubMenu" data-dropdownID="0">
                        <svg class="w-5 h-5 ease-in-out duration-500 rotate-90 expand" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 185.343 185.343" xml:space="preserve">
                            <g>
                                <g>
                                    <path style="fill:#313131;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="submenu self-end active">
                    <div class="w-[270px] h-[52px] pl-[16px] flex flex-row items-center hover:bg-[#EFEFEF] ease-in-out duration-300">
                        <input type="checkbox" class="w-[34px] h-[34px]">
                        <p class="text-xl ml-[12px] text-[#727272]">Lorem Ipsum.</p>
                    </div>
                    <div class="w-[270px] h-[52px] pl-[16px] flex flex-row items-center hover:bg-[#EFEFEF] ease-in-out duration-300">
                        <input type="checkbox" class="w-[34px] h-[34px]">
                        <p class="text-xl ml-[12px] text-[#727272]">Lorem Ipsum.</p>
                    </div>
                    <div class="w-[270px] h-[52px] pl-[16px] flex flex-row items-center hover:bg-[#EFEFEF] ease-in-out duration-300">
                        <input type="checkbox" class="w-[34px] h-[34px]">
                        <p class="text-xl ml-[12px] text-[#727272]">Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="w-[300px] pr-[35px] pl-[25px] py-[12px] flex flex-row items-center justify-between relative z-0 bg-[#D9D9D9]">
                    <p class="text-xl text-[#313131]">Price</p>
                    <button @click="toggleSubMenu" data-dropdownID="1">
                        <svg class="w-5 h-5 ease-in-out duration-500 rotate-90 expand" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 185.343 185.343" xml:space="preserve">
                            <g>
                                <g>
                                    <path style="fill:#313131;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="submenu self-center active">
                    <div class="relative text-base text-[#727272]">
                        <p class="absolute top-1/2 -translate-y-1/2 ml-4">Min</p>
                        <input type="number" class="w-[254px] h-[46px] pr-8 pl-16 text-xl text-right bg-[#D9D9D9] border-none">
                        <p class="absolute top-1/2 right-0 -translate-y-1/2 mr-4">$</p>
                    </div>
                    <svg class="h-[24px] w-[24px] rotate-90 self-center my-[10px] mx-auto fill-[#727272]" viewBox="0 0 448 512"><path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"/></svg>
                    <div class="relative text-base text-[#727272]">
                        <p class="absolute top-1/2 -translate-y-1/2 ml-4">Max</p>
                        <input type="number" class="w-[254px] h-[46px] pr-8 pl-16 text-xl text-right bg-[#D9D9D9] border-none">
                        <p class="absolute top-1/2 right-0 -translate-y-1/2 mr-4">$</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="w-[300px] pr-[35px] pl-[25px] py-[12px] flex flex-row items-center justify-between relative z-0 bg-[#D9D9D9]">
                    <p class="text-xl text-[#313131]">Rating</p>
                    <button @click="toggleSubMenu" data-dropdownID="2">
                        <svg class="w-5 h-5 ease-in-out duration-500 rotate-90" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 185.343 185.343" xml:space="preserve">
                            <g>
                                <g>
                                    <path style="fill:#313131;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="submenu self-center">
                    <input class="w-[270px]" type="range" min="1" max="5">
                    <div class="flex flex-row w-[270px] items-center justify-between">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="ml-[100px]">
            <div class="grid grid-cols-3 gap-x-[56px] gap-y-[42px]">
                <template v-for="product in products">
                    <ProductCard :id="product.id" :img_name=product.images :name=product.title :price=product.price :sku="1" class="w-[16em] h-[20em]"/>
                </template>
            </div>
            <div class='w-full flex flex-row items-center justify-center mt-[80px]'>
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex -space-x-px text-base h-10">
                        <li>
                            <button @click="PaginatePrev" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Prev</button>
                        </li>
                        <template v-for="i in paginate_button">
                            <li>
                                <button class="pagination_number flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ i }}</button>
                            </li>
                        </template>
                        <li>
                            <button @click="PaginateNext" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- {{ totalCount }}
            {{ pagination_num }}
            {{ paginate_button }}
            {{ pagination_map }}
            {{ active_pagination }} -->
            {{ pagination_start_edge }}
            {{ pagination_end_edge }}
            {{ pagination_map }}
            {{ active_pagination }}
        </div>
    </div>
    <Footer />
</template>
<style>
    .submenu {
        max-height: 0px;
        overflow: hidden;
        visibility: hidden;
        margin-top: 18px;
        transition: max-height 0.3s;
    }
    .submenu.active { 
        visibility: visible;
        margin-bottom: 18px;
        max-height: 400px;
    }
    svg.expand{
        transform:rotate(-90deg)
    }
    .top_product_image{
        overflow:hidden;
    }
    .top_product_image::before{
        content : '';
        display: block;
        background-color: white;
        opacity: 0.6;
        width : 60%;
        height: 100%;
        position:absolute;
        left : -125%;
        transform: skew(45deg);
        animation: shiny_move 5s infinite;
    }
    .topitem-background{
        background-image: url('../assets/images/topitem-background.png');
    }
    .pagination_number.active{
        background: red !important;
    }
    @keyframes shiny_move{
        0%{
            left: -125%;
        }
        20%{
            left: 180%;
        }
        100%{
            left: 180%;
        }
    }
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
                products : [],
                totalCount : 0,         //total of db records
                itemperPage : 9,        //number of item displayed per page
                active_pagination : 0,  //current active pagination page
                pagination_num : 0,     //total all pagination page exist
                paginate_button : 0,    //number of button displayed on pagination
                pagination_map : [],
                pagination_start_edge : 1,
                pagination_end_edge : 5,
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
                var start_offset = (this.itemperPage * this.active_pagination) + 1  
                var url_str = 'http://127.0.0.1:8000/api/product/getrange/' + start_offset + '/' + this.itemperPage
                axios.get(url_str)
                .then(response => {
                    this.products = response.data.message
                })
            },
            async CountData(){
                var url_str = 'http://127.0.0.1:8000/api/product/count'
                axios.get(url_str)
                .then( response => {
                    this.totalCount = response.data.message
                    this.pagination_num = Math.ceil(this.totalCount / this.itemperPage)
                    if(this.pagination_num >= 5){
                        this.paginate_button = 5
                        this.pagination_map = [1,2,3,4,5]
                    }else{
                        this.paginate_button = this.pagination_num
                    }
                })
            },
            updateCarouselProgress(splide,prev,next){
                this.carouselProgress = (100 * (splide.index + 1)) / ( splide.length)
            },
            toggleSubMenu(event){
                console.log(event)
                const parent = event.currentTarget
                const arrow = parent.querySelector('svg')
                const dropdownId = parent.dataset.dropdownid
                const submenu = document.querySelectorAll('.submenu')
                submenu.forEach((element,key)=>{
                    if(key == dropdownId){
                        if(element.classList.contains('active')){
                            element.classList.remove('active')
                            arrow.classList.remove('expand')
                        }else{
                            element.classList.add('active')
                            arrow.classList.add('expand')
                        }
                        console.log(key)
                    }
                })
            },
            UpdatePaginate(){
                var pagination_btn = document.querySelectorAll(".pagination_number")
                pagination_btn.forEach( (button, key) =>{
                    button.innerHTML = this.pagination_map[key]
                    if(key == 0){
                        this.pagination_start_edge = button.innerHTML
                    }
                    if(key == pagination_btn.length - 1){
                        this.pagination_end_edge = button.innerHTML
                    }
                    if(button.innerHTML == this.active_pagination + 1){
                        button.classList.add('active')
                    }else{
                        button.classList.remove('active')
                    }
                })
            },
            PaginateNext(){
                if(this.active_pagination < this.pagination_num - 1 ){
                    this.active_pagination++
                    this.GetTopItem()
                    if((this.active_pagination + 1) > Math.ceil(this.paginate_button / 2)){
                        if(this.pagination_end_edge < this.pagination_num){
                            this.pagination_map.forEach((value,key)=>{
                                this.pagination_map[key] = value + 1
                            })
                        }
                    }
                    this.UpdatePaginate()
                }
            },
            PaginatePrev(){
                if(this.active_pagination > 0){
                    this.active_pagination--
                    this.GetTopItem()
                    if(this.active_pagination > 0){
                        if(this.pagination_start_edge > 1){
                            this.pagination_map.forEach((value,key)=>{
                                this.pagination_map[key] = value - 1
                            })
                        }
                    }
                    this.UpdatePaginate()
                }
            }
        },
        mounted(){
            this.CountData()
            this.GetTopItem()
        }
    }
</script>