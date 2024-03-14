import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import './style.css'
import App from './App.vue'

import Home from "./components/Home.vue";
import Consoles from "./components/Consoles.vue";
import Contato from "./components/Contato.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/consoles", name: "Consoles", component: Consoles },
  { path: "/contato", name: "Contato", component: Contato },
]; 

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
