<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

//Import from js file
import empresas from '@/data/consoles'

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
</script>

<template>
    <nav
        class="fixed top-0 min-w-full z-10 bg-white border-gray-200 dark:bg-indigo-950 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
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
                <div v-show="isOpen" class="absolute py-2 mt-2 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-48">
                    <!-- Iterar sobre as empresas -->
                    <template v-for="(empresa, empresaIndex) in empresas" :key="empresaIndex">
                        <!-- Item de menu para a empresa -->
                        <div class="relative" @mouseover="showEmpresaSubmenu(empresaIndex)"
                            @mouseleave="hideEmpresaSubmenu()">
                            <div
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white cursor-pointer">
                                {{ empresa.name }}
                            </div>
                            <!-- Submenu para os subtipos de consoles -->
                            <div v-show="activeEmpresaSubmenu === empresaIndex"
                                class="absolute top-0 left-48 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-36">
                                <!-- Iterar sobre os subtipos de consoles -->
                                <template v-for="(subtipo, subtipoIndex) in empresa.subtipos" :key="subtipoIndex">
                                    <!-- Item de menu para o subtipo de console -->
                                    <div class="relative" @mouseover="showSubtipoSubmenu(empresaIndex, subtipoIndex)"
                                        @mouseleave="hideSubtipoSubmenu()">
                                        <div
                                            class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white cursor-pointer">
                                            {{ subtipo.name }}
                                        </div>

                                        <!-- Submenu para os consoles -->
                                        <div v-show="activeSubtipoSubmenu.empresa === empresaIndex && activeSubtipoSubmenu.subtipo === subtipoIndex"
                                            class="absolute top-0 left-36 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-full">
                                            <!-- Iterar sobre os consoles -->
                                            <template v-for="(console, consoleIndex) in subtipo.consoles"
                                                :key="consoleIndex">
                                                <!-- Item de menu para o console -->
                                                <RouterLink :to="console.route"
                                                    class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white w-full">
                                                    {{ console.name }}
                                                </RouterLink>
                                            </template>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </template>
                </div>
                <RouterLink to="/contato"
                    class="text-gray-800 dark:text-gray-100 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-700 mx-1.5 sm:mx-6"
                    @click="closeMenu">
                    Contato
                </RouterLink>
            </div>
        </div>
    </nav>
</template>