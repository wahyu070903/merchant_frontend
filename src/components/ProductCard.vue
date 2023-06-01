<template>
    <div class="w-[16rem] h-[22rem] bg-white flex flex-col rounded-lg drop-shadow-md">
        <div class="self-center w-[14rem] h-[12rem] mt-[1rem] relative">
            <img :src=getImageUrl(img_name) class="w-full h-full object-cover rounded-lg">
            <div class="w-6 h-6 absolute flex items-center justify-center top-[0.5rem] right-[0.5rem] bg-white rounded-full">
                <svg class="w-4 h-4 stroke-red-500 fill-red-500" viewBox="0 0 24 24" stroke-width="1.5" ><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
            </div>
        </div>
        <div class="mx-[1rem] mt-[0.3rem]">
            <div class="flex felx-row items-center">
                <div class="flex flex-row items-center">
                    <svg class="w-4 h-4 stroke-yellow-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    <p class="font-light text-xs ml-[0.2rem]">4.50</p>
                </div>
            </div>
            <p class="font-light text-sm whitespace-nowrap text-ellipsis overflow-hidden mt-[0.3rem]"> {{name}} </p>
            <p class="font-bold text-md mt-[0.3rem]">${{ price }}</p>
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

    </div>
</template>
<script>
    export default{
        props : {
            name : String,
            price : String,
            img_name : String,
            prod_detail : String
        },
        methods : {
            getImageUrl(img_name){
                return new URL(`../assets/images/${img_name}`, import.meta.url)
            }
        }
    }
</script>