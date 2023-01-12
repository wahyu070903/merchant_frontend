<script setup>  
    import { RouterLink, RouterView } from 'vue-router'
    import Navbar from '../components/ControlNavbar.vue'
</script>
<template>
    <div class="w-screen h-full relative flex flex-row">
        <Navbar class="sticky top-0"/>
        <RouterView></RouterView>
    </div>
</template>
