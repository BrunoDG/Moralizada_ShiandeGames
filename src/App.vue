<script setup>
import Navbar from './components/Navbar.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div id="app" class="bg-[url('./assets/images/titleIcon.png')] bg-no-repeat bg-cover bg-center bg-fixed min-h-screen">
    <Navbar title="ShiandeGames"/>
    <Body />
    <Footer />
  </div>
</template>