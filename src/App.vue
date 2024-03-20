<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <div id="app"
    class="bg-[url('./assets/images/titleIcon.png')] bg-no-repeat bg-cover bg-center bg-fixed fkex flex-col h-screen">
    <Navbar title="ShiandeGames" />
    <div class="flex-grow">
      <RouterView class="flex grow justify-center w-full"></RouterView>
    </div>
    <Footer></Footer>
  </div>
</template>