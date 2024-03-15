
import { RouterLink } from 'vue-router';
import { RouterLink } from 'vue-router';
<template>
    <footer class="fixed bottom-0 bg-[#00050e] pt-8 pb-6 mx-auto px-auto align-middle w-full">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap text-left lg:text-left">
                <div class="w-full lg:w-6/12 px-4 text-white">
                    <h4 class="text-3xl font-semibold text-indigo-700">Fala comigo!</h4>
                    <h5 class="text-lg mt-0 mb-2">
                        Você consegue me encontrar nessas plataformas pra dar aquela moralizada malakoi.
                    </h5>
                    <div class="mt-6 lg:mb-0 mb-6">
                        <button
                            class="bg-white text-cyan-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button">
                            <a href="https://twitter.com/shiandegames">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </button>
                        <button
                            class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button">
                            <a href="https://facebook.com/shiandegames">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </button>
                        <button
                            class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button">
                            <a href="https://instagram.com/shiandegames">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </button>
                        <button
                            class="bg-white text-purple-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button">
                            <a href="https://twitch.tv/shiandegames">
                                <i class="fab fa-twitch"></i>
                            </a>
                        </button>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4 text-white">
                    <div class="flex flex-wrap items-top mb-6">
                        <div class="w-full lg:w-4/12 px-4 ml-auto">
                            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Links úteis
                            </span>
                            <ul class="list-unstyled">
                                <li>
                                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Loja
                                        Malakoi</a>
                                </li>
                            </ul>
                        </div>
                        <div class="w-full lg:w-4/12 px-4">
                            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                Desenvolvido por
                            </span>
                            <ul class="list-unstyled">
                                <li>
                                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="https://beveldrive.com.br">
                                        Bruno Dias
                                    </a>
                                </li>
                                <li>
                                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="https://www.twitch.tv/arthur_762">
                                        Arthur_762
                                    </a>
                                </li>
                                <li>
                                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="https://www.twitch.tv/axutas_reborn">
                                        Axutas_Reborn
                                    </a>
                                </li>
                                <li>
                                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="https://www.twitch.tv/JinCorp">
                                        JinCorp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-cyan-300">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-5/12 px-4 mx-auto text-center">
                    <div class="text-sm text-white font-semibold py-1">
                        Copyright © <span id="get-current-year">2024</span>
                        <span class="text-indigo-600">
                            ShiandeGames
                        </span> e
                        <span class="text-rose-600">
                            Bevel Drive</span>.
                        Todos os direitos reservados.
                    </div>
                </div>
                <div>
                    <a href="mailto://contato@beveldrive.com.br">
                        <img src="@/assets/images/Beveldrive_logo.png" alt="Bevel Drive Logo" class="w-10 h-10">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>