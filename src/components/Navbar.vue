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

let dark_mode = reactive({ 'state': false });

function darkMode() {
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') == 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.add('light');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    dark_mode.state = document.documentElement.classList.contains('dark');
}

</script>

<template>
    <!--<nav class="fixed top-0 min-w-full z-10 bg-white border-gray-200 dark:bg-indigo-950 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse" @click="closeMenu">
                <span
                    class="self-center text-3xl font-sega text-indigo-800 whitespace-nowrap dark:text-white">{{title}}</span>
            </RouterLink>
            <div class="max-w-screen-xl">
                <RouterLink to="/"
                    class="text-gray-800 dark:text-gray-100 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-700 mx-1.5 sm:mx-6"
                    @click="closeMenu">
                    Home
                </RouterLink>
                <RouterLink to="/"
                    class="text-gray-800 dark:text-gray-100 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-700 mx-1.5 sm:mx-6"
                    @mouseover="openMenu">
                    Consoles
                </RouterLink>
                <div v-if="isOpen" class="absolute py-2 mt-2 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-48"
                    @mouseleave="closeMenu"> -->
    <!-- Iterar sobre as empresas -->
    <!--<template v-for="(empresa, empresaIndex) in empresas" :key="empresaIndex">-->
    <!-- Item de menu para a empresa -->
    <!--<div class="relative" @mouseover="showEmpresaSubmenu(empresaIndex)"
                            @mouseleave="hideEmpresaSubmenu()">
                            <div
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white cursor-pointer">
                                {{ empresa.name }}
                            </div>-->
    <!-- Submenu para os subtipos de consoles -->
    <!--<div v-if="activeEmpresaSubmenu === empresaIndex"
                                class="absolute top-0 left-48 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-36">-->
    <!-- Iterar sobre os subtipos de consoles -->
    <!--<template v-for="(subtipo, subtipoIndex) in empresa.subtipos" :key="subtipoIndex">-->
    <!-- Item de menu para o subtipo de console -->
    <!--<div class="relative" @mouseover="showSubtipoSubmenu(empresaIndex, subtipoIndex)"
                                        @mouseleave="hideSubtipoSubmenu()">
                                        <div
                                            class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white cursor-pointer">
                                            {{ subtipo.name }}
                                        </div>-->

    <!-- Submenu para os consoles -->
    <!-- <div v-if="activeSubtipoSubmenu.empresa === empresaIndex && activeSubtipoSubmenu.subtipo === subtipoIndex"
                                            class="absolute top-0 left-36 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-full">-->
    <!-- Iterar sobre os consoles -->
    <!--<template v-for="(console, consoleIndex) in subtipo.consoles"
                                                :key="consoleIndex">-->
    <!-- Item de menu para o console -->
    <!-- <RouterLink :to="console.route"
                                                    class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white w-full">
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
                <RouterLink to="/contato"
                    class="text-gray-800 dark:text-gray-100 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-700 mx-1.5 sm:mx-6"
                    @click="closeMenu">
                    Contato
                </RouterLink>
            </div>
        </div>
    </nav>-->
    <nav class="bg-white dark:bg-indigo-950">
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
                    <li
                        class="text-gray-800 dark:text-gray-100 border-b-4 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-700 mx-1.5 sm:mx-6">
                            Consoles <span class="icon-[ph--caret-down]"></span>
                    </li>
                    <li
                        class="text-gray-800 dark:text-gray-100 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-700 mx-1.5 sm:mx-6">
                        <RouterLink to="/Contato">
                            Contato
                        </RouterLink>
                    </li>
                </ul>
                <button type="button" @click="darkMode">
                    <span class="text-4xl icon-[ph--moon-stars-fill] text-indigo-900 dark:icon-[ph--sun-fill] dark:text-yellow-400">
                    </span>
                </button>
            </div>
        </div>
    </nav>
</template>