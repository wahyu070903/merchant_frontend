<template>
    <div class="relative w-[245px] h-[346px] flex flex-col">
        <router-link to="/product">
            <div v-if="sku == 1" class="absolute top-[12px] left-[12px] z-10 py-0.5 w-[43px] rounded-sm bg-[#38D25A]">
                <p class="text-xs font-medium text-center text-white">Ready</p>
            </div>
            <div v-if="sku == 2" class="absolute top-[12px] left-[12px] z-10 py-0.5 w-[43px] rounded-sm bg-[#6D6D6D]">
                <p class="text-xs font-medium text-center text-white">Order</p>
            </div>
            <div v-if="sku == 3" class="absolute top-[12px] left-[12px] z-10 py-0.5 w-[43px] rounded-sm bg-[#EA6C6C]">
                <p class="text-xs font-medium text-center text-white">Out</p>
            </div>
            <div class="mx-auto w-[219px] h-[227px] mt-[1rem] relative">
                <div></div>
                <img :src=getImageUrl(img_name) class="w-full h-full object-cover">
            </div>
            <div class="mx-[1rem] mt-[0.3rem]">
                <div class="flex flex-row items-center">
                    <div class="flex flex-row items-center">
                        <svg class="w-4 h-4 stroke-yellow-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                        <p class="font-light text-xs ml-[0.2rem]">4.50</p>
                        {{ id }}
                    </div>
                </div>
                <p class="font-light text-sm whitespace-nowrap text-ellipsis overflow-hidden mt-[4px]"> {{name}} </p>
                <p class="font-bold text-md mt-[3px]">${{ price }}</p>
                <div class="flex flex-row items-center mt-[0.5rem]">
                    <div class="flex flex-row items-center">
                        <div class="w-3 h-3 bg-red-500 mr-[0.3rem]"></div>
                        <div class="w-3 h-3 bg-cyan-500 mr-[0.3rem]"></div>
                        <div class="w-3 h-3 bg-blue-500 mr-[0.3rem]"></div>
                        <div class="w-3 h-3 bg-green-400 mr-[0.3rem]"></div>
                        <p class="text-blue-500 text-xs font-light">+5 Other</p>
                    </div>
                    <div class="flex flex-row items-center ml-[1rem]">
                        <p class="text-sm text-gray-400 font-light mr-[0.3rem]">Size</p>
                        <p class="text-sm font-light text-gray-800 mr-[0.3rem]">S</p>
                        <p class="text-sm font-light text-gray-800 mr-[0.3rem]">M</p>
                        <p class="text-sm font-light text-gray-800 mr-[0.3rem]">X</p>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default{
        props : {
            id : Number,
            name : String,
            price : String,
            img_name : String,
            sku : Number,
            prod_detail : String
        },
        methods : {
            getImageUrl(img_name){
                return new URL(`../assets/images/${img_name}`, import.meta.url)
            }
        }
    }
</script>