<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const title = ref('ShiandeGames');

let show = ref(false);
const isOpen = () => {
    show.value = !show.value;
    if (show.value == false) {
        closeMenu();
    }
}

// consoles da Nintendo
let showNintendo = ref(false);
const isNintendoOpen = () => {
    closeSubMenus();
    showNintendo.value = !showNintendo.value;
}

let showNinPort = ref(false);
const isNinPortOpen = () => {
    showNinDesk.value = false;
    showNinPort.value = !showNinPort.value;
}

let showNinDesk = ref(false);
const isNinDeskOpen = () => {
    showNinPort.value = false;
    showNinDesk.value = !showNinDesk.value;
}

// Consoles da Sega
let showSega = ref(false);
const isSegaOpen = () => {
    closeSubMenus();
    showSega.value = !showSega.value;
}

let showSegaPort = ref(false);
const isSegaPortOpen = () => {
    showSegaDesk.value = false;
    showSegaPort.value = !showSegaPort.value;
}

let showSegaDesk = ref(false);
const isSegaDeskOpen = () => {
    showSegaPort.value = false;
    showSegaDesk.value = !showSegaDesk.value;
}

// Consoles da Sony
let showSony = ref(false);
const isSonyOpen = () => {
    closeSubMenus();
    showSony.value = !showSony.value;
}

let showSonyPort = ref(false);
const isSonyPortOpen = () => {
    showSonyDesk.value = false;
    showSonyPort.value = !showSonyPort.value;
}

let showSonyDesk = ref(false);
const isSonyDeskOpen = () => {
    showSonyPort.value = false;
    showSonyDesk.value = !showSonyDesk.value;
}

const closeSubMenus = () => {
    // Nintendo flags 
    showNintendo.value = false;
    showNinDesk.value = false;
    showNinPort.value = false;
    // Sega flags
    showSega.value = false;
    showSegaPort.value = false;
    showSegaDesk.value = false;
    // Sony flags 
    showSony.value = false;
    showSonyPort.value = false;
    showSonyDesk.value = false;
}

const closeMenu = () => {
    show.value = false;
    closeSubMenus();
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

                <button
                    class="text-gray-800 dark:text-gray-100 border-b-2 border-transparent hover:text dark:hover:text-gray-200 hover:border-indigo-700 mx-1.5 sm:mx-6"
                    @click="isOpen">Consoles
                </button>
                <!-- Console Dropdown menu-->
                <div v-show="show" class="absolute py-2 mt-2 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-48">
                    <!-- Nintendo Dropdown submenu-->
                    <RouterLink to="#"
                        class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white"
                        @click="isNintendoOpen">
                        Nintendo
                    </RouterLink>
                    <div v-show="showNintendo"
                        class="absolute py-2 -mt-10 -mx-60 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-60">
                        <!-- Submenu de consoles portáteis da Nintendo -->
                        <RouterLink to="#"
                            class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white"
                            @click="isNinPortOpen">
                            Portáteis
                        </RouterLink>
                        <div v-show="showNinPort"
                            class="absolute py-2 -mt-10 -mx-60 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-60">
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                GameBoy / GameBoy Color
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                GameBoy Advance
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Nintendo DS
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Nintendo 3DS
                            </RouterLink>
                        </div>
                        <!-- Submenu de consoles de mesa da Nintendo -->
                        <RouterLink to="#"
                            class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white"
                            @click="isNinDeskOpen">
                            Consoles de Mesa
                        </RouterLink>
                        <div v-show="showNinDesk"
                            class="absolute py-2 -mt-10 -mx-60 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-60">
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                NES / Famicon
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Super Nintendo / Super Famicom
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Nintendo 64
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                GameCube
                            </RouterLink>
                        </div>
                    </div>
                    <!-- Sega Dropdown Submenu-->
                    <RouterLink to="#"
                        class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white"
                        @click="isSegaOpen">
                        Sega
                    </RouterLink>
                    <!-- Submenu de consoles portáteis da Sega -->
                    <div v-show="showSega"
                        class="absolute py-2 -mt-10 -mx-60 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-60">
                        <RouterLink to="#"
                            class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white"
                            @click="isSegaPortOpen">
                            Portáteis
                        </RouterLink>
                        <div v-show="showSegaPort"
                            class="absolute py-2 -mt-10 -mx-60 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-60">
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Game Gear
                            </RouterLink>
                        </div>
                        <!-- Submenu de consoles de mesa da Sega -->
                        <RouterLink to="#"
                            class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white"
                            @click="isSegaDeskOpen">
                            Consoles de Mesa
                        </RouterLink>
                        <div v-show="showSegaDesk"
                            class="absolute py-2 -mt-10 -mx-60 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-60">
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Master System
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Mega Drive / Genesis
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Saturn
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                DreamCast
                            </RouterLink>
                        </div>
                    </div>
                    <!-- Sony Dropdown Submenu-->
                    <RouterLink to="#"
                        class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white"
                        @click="isSonyOpen">
                        Sony
                    </RouterLink>
                    <div v-show="showSony"
                        class="absolute py-2 -mt-10 -mx-60 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-60">
                        <!-- Submenu de consoles portáteis da Sega -->
                        <RouterLink to="#"
                            class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white"
                            @click="isSonyPortOpen">
                            Portáteis
                        </RouterLink>
                        <div v-show="showSonyPort"
                            class="absolute py-2 -mt-10 -mx-60 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-60">
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Playstation Portable / PSP
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Playstation Vita / PSVita
                            </RouterLink>
                        </div>
                        <!-- Submenu de consoles de mesa da Sony -->
                        <RouterLink to="#"
                            class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white"
                            @click="isSonyDeskOpen">
                            Consoles de Mesa
                        </RouterLink>
                        <div v-show="showSonyDesk"
                            class="absolute py-2 -mt-10 -mx-60 bg-white dark:bg-indigo-950 rounded-sm shadow-xl w-60">
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Playstation 1 (PSOne)
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Playstation 2
                            </RouterLink>
                            <RouterLink to="/consoles"
                                class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                                Playstation 3
                            </RouterLink>
                        </div>
                    </div>
                    <RouterLink to="/consoles"
                        class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                        3DO
                    </RouterLink>
                    <RouterLink to="/consoles"
                        class="block px-4 py-2 text-sm text-indigo-800 dark:text-white hover:bg-indigo-700 hover:text-white">
                        SNK
                    </RouterLink>
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