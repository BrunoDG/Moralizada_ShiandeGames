<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router';

//Import from js file
import empresas from '@/data/empresas'

const props = defineProps(['title'])

// Dados do menu
const isOpen = ref(false)
const openMenu = () => isOpen.value = !isOpen.value;
const closeMenu = () => isOpen.value = false;

// Estado para controle dos submenus
const activeEmpresaSubmenu = ref(null)
const activeSubtipoSubmenu = ref({ empresa: null, subtipo: null })

// Métodos para mostrar e esconder submenus
const showEmpresaSubmenu = (empresaIndex) => {
    activeEmpresaSubmenu.value = empresaIndex
}

const hideEmpresaSubmenu = () => {
    activeEmpresaSubmenu.value = null
}

const showSubtipoSubmenu = (empresaIndex, subtipoIndex) => {
    activeSubtipoSubmenu.value = { empresa: empresaIndex, subtipo: subtipoIndex }
}

const hideSubtipoSubmenu = () => {
    activeSubtipoSubmenu.value = { empresa: null, subtipo: null }
}

let darkModeOn = false;

const darkMode = () => {
    if (localStorage.theme === 'dark' || (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) &&
        darkModeOn === false
    ) {
        document.documentElement.classList.add('dark')
        darkModeOn = true;
    } else {
        document.documentElement.classList.remove('dark')
        darkModeOn = false;
    }
}

const consoleSelecionado = () => {
    
}

</script>

<template>
    <nav class="bg-white dark:bg-indigo-950 z-10">
        <div class="flex flex-wrap justify-between items-center mx-auto w-full px-4 md:px-6 py-2 max-w-screen-xl">
            <div class="flex items-center p-2 dark:bg-indigo-950 dark:rounded-lg">
                <RouterLink to="/">
                    <span class="self-center text-3xl font-sega text-indigo-800 whitespace-nowrap dark:text-white">
                        {{ title }}
                    </span>
                </RouterLink>
            </div>
            <div class="flex items-center">
                <ul class="flex flex-row mt-0 mr-10 space-x-12 text-lg font-bold">
                    <li
                        class="text-gray-800 dark:text-gray-100 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-700 mx-1.5 sm:mx-6">
                        <RouterLink to="/">
                            Home
                        </RouterLink>
                    </li>
                    <li class="text-gray-800 dark:text-gray-100 border-b-4 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-700 mx-1.5 sm:mx-6"
                        @mouseover="openMenu">
                        Consoles <span class="icon-[ph--caret-down]"></span>
                    </li>
                    <transition 
                        enter-active-class="transform transition duration-500 ease-custom"
                        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                        enter-to-class="translate-y-0 scale-y-100 opacity-100"
                        leave-active-class="transform transition duration-300 ease-custom"
                        leave-class="translate-y-0 scale-y-100 opacity-100"
                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
                    >
                        <div v-if="isOpen"
                            class="absolute py-6 mt-7 bg-white dark:bg-indigo-950 shadow-xl w-48"
                            @mouseleave="closeMenu">
                            <!-- Iterar sobre as empresas -->
                            <template v-for="(empresa, empresaIndex) in empresas" :key="empresaIndex">
                                <!-- Item de menu para a empresa -->
                                <div class="relative" @mouseover="showEmpresaSubmenu(empresaIndex)"
                                    @mouseleave="hideEmpresaSubmenu()">
                                    <div
                                        class="px-4 py-4 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                        {{ empresa.name }}
                                    </div>
                                    <!-- Submenu para os subtipos de consoles -->
                                    <div v-if="activeEmpresaSubmenu === empresaIndex"
                                        class="absolute top-0 right-48 bg-white dark:bg-indigo-950 shadow-xl w-48">
                                        <!-- Iterar sobre os subtipos de consoles -->
                                        <template v-for="(subtipo, subtipoIndex) in empresa.subtipos"
                                            :key="subtipoIndex">
                                            <!-- Item de menu para o subtipo de console -->
                                            <div class="relative"
                                                @mouseover="showSubtipoSubmenu(empresaIndex, subtipoIndex)"
                                                @mouseleave="hideSubtipoSubmenu()">
                                                <div
                                                    class="block px-4 py-4 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                                    {{ subtipo.name }}
                                                </div>
                                                <!-- Submenu para os consoles -->
                                                <div v-if="activeSubtipoSubmenu.empresa === empresaIndex && activeSubtipoSubmenu.subtipo === subtipoIndex"
                                                    class="absolute top-0 right-48 bg-white dark:bg-indigo-950 shadow-xl w-full">
                                                    <!-- Iterar sobre os consoles -->
                                                    <template v-for="console in subtipo.consoles"
                                                        :key="consoleIndex">
                                                        <!-- Item de menu para o console -->
                                                        <RouterLink :to="console.route"
                                                            class="block px-4 py-4 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white w-full">
                                                            {{ console.name }}
                                                        </RouterLink>
                                                    </template>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>l
                            </template>
                        </div>
                    </transition>
                        <li
                            class="text-gray-800 dark:text-gray-100 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-700 mx-1.5 sm:mx-6">
                            <RouterLink to="/Contato">
                                Contato
                            </RouterLink>
                        </li>
                </ul>
                <button type="button" @click="darkMode">
                    <span
                        class="text-4xl icon-[ph--moon-stars-fill] text-indigo-900 dark:icon-[ph--sun-fill] dark:text-yellow-400">
                    </span>
                </button>
            </div>
        </div>
    </nav>
</template>