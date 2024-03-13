<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
    title: String,
})

</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span
                    class="self-center text-3xl font-sega text-indigo-800 whitespace-nowrap dark:text-white">{{title}}</span>
            </a>
            <div class="max-w-screen-xl">
                <a href="#"
                    class="text-gray-800 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-800 mx-1.5 sm:mx-6">Home</a>

                <a href="#"
                    class="text-gray-800 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-800 mx-1.5 sm:mx-6">Consoles</a>

                <a href="#"
                    class="text-gray-800 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-800 mx-1.5 sm:mx-6">Contato</a>
            </div>
        </div>
    </nav>

</template>