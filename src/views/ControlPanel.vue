<script setup>  
    import { RouterLink, RouterView } from 'vue-router'
    import Navbar from '../components/ControlNavbar.vue'
</script>
<template>
    <div class="w-screen h-full relative flex flex-row bg-green-400">
        <Navbar />
        <RouterView></RouterView>
    </div>
</template>
