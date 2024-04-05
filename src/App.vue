<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <div id="app"
    class="bg-[url('./assets/images/titleIcon.png')] bg-repeat bg-cover bg-center bg-fixed flex flex-col h-screen">
    <Navbar title="ShiandeGames" />
      <RouterView />
    <Footer></Footer>
  </div>
</template>