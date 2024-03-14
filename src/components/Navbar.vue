<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const title = ref('ShiandeGames');

// Dados do menu
const isOpen = ref(false)
const openMenu = () => isOpen.value = !isOpen.value;
const closeMenu = () => isOpen.value = false;
const empresas = [
    {
        name: 'Nintendo',
        subtipos: [
            {
                name: 'Portáteis', consoles: [
                    { name: 'GameBoy / GameBoy Color', route: '/consoles/gameboy' },
                    { name: 'GameBoy Advance', route: '/consoles/GBA' },
                    { name: 'Nintendo DS', route: '/consoles/nds' },
                    { name: 'Nintendo 3DS', route: '/consoles/3ds' },]
            },
            {
                name: 'Consoles de Mesa', consoles: [
                    { name: 'NES / Famicom', route: '/consoles/nes' },
                    { name: 'Super Nintendo / Super Famicom', route: '/consoles/snes' },
                    { name: 'Nintendo 64', route: '/consoles/n64' },
                    { name: 'GameCube', route: '/consoles/gamecube' },]
            }
        ]
    },
    {
        name: 'SEGA',
        subtipos: [
            {
                name: 'Portáteis', consoles: [
                    { name: 'Game Gear', route: '/consoles/gamegear' },
                ]
            },
            {
                name: 'Consoles de Mesa', consoles: [
                    { name: 'Master System', route: '/consoles/mastersystem' },
                    { name: 'Mega Drive', route: '/consoles/megadrive' },
                    { name: 'Saturn', route: '/consoles/saturn' },
                    { name: 'Dreamcast', route: '/consoles/dc' },
                ]
            }
        ]
    },
    {
        name: 'Sony',
        subtipos: [
            {
                name: 'Portáteis', consoles: [
                    { name: 'Playstation Portable (PSP)', route: '/consoles/psp' },
                    { name: 'Playstation Vita (PSVita)', route: '/consoles/psvita' },
                ]
            },
            {
                name: 'Consoles de Mesa', consoles: [
                    { name: 'Playstation / PSOne', route: '/consoles/psone' },
                    { name: 'Playstation 2', route: '/consoles/ps2' },
                    { name: 'Playstation 3', route: '/consoles/ps3' },
                    { name: 'Playstation 4', route: '/consoles/ps4' },
                ]
            }
        ]
    },
    {
        name: 'Panasonic',
        subtipos: [
            {
                name: 'Consoles de Mesa', consoles: [
                    { name: '3DO', route: '/consoles/3do' },
                ]
            }
        ]
    },
    {
        name: 'NEC',
        subtipos: [
            {
                name: 'Portáteis', consoles: [
                    { name: 'TurboExpress / PC Engine GT', route: '/consoles/pc-engine-gt' },
                ]
            },
            {
                name: 'Consoles de Mesa', consoles: [
                    { name: 'TurboGrafx-16 / PC Engine', route: '/consoles/pc-engine' },
                    { name: 'PC-FX', route: '/consoles/pc-fx' },
                ]
            }
        ]
    },
    
]

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
    <nav class="bg-white border-gray-200 dark:bg-indigo-950 dark:border-gray-700">
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