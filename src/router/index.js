import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";
import Consoles from "@/components/Consoles.vue";
import Contato from "@/components/Contato.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/consoles/:console", name: "Consoles", component: Consoles },
    { path: "/contato", name: "Contato", component: Contato },
    { path: "/Moralizada_ShiandeGames/", redirect: "/"}
];

const base = "/Moralizada_ShiandeGames/";

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;