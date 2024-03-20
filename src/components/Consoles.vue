<template>
    <div>
        <h2 class="text-indigo-900 mx-auto pt-16 pb-8 text-center text-4xl font-bold">
            {{
            consoleSelecionado.toLocaleUpperCase()
            }}
        </h2>
        <div class="mt-2 
                mb-4 
                px-6 
                py-2 
                rounded 
                border 
                border-gray-300 
                flex 
                flex-row 
                items-center 
                w-4/5 
                translate-y-1/2 
                bg-white 
                bg-opacity-30 
                backdrop-blur-lg 
                mx-auto 
                drop-shadow-lg 
                justify-between">
            <button v-for="letra 
                in letras" :key="letra" :value="letra" class="text-xl p-2 font-bold" @click="letraSelecionada = letra"
                :class="{'text-red-700': letraSelecionada == letra, 'text-indigo-700': letraSelecionada != letra}">
                {{ letra }}
            </button>
        </div>

        <div class="w-4/5 translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-lg mx-auto drop-shadow-lg">
            <table class="w-full border-collapse">
                <thead>
                    <tr>
                        <th class="border border-gray-300 px-4 py-2">Nome do Jogo</th>
                        <th class="border border-gray-300 px-4 py-2">Jogado em Live?</th>
                        <th class="border border-gray-300 px-4 py-2">Moralizar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="jogo in jogosFiltrados" :key="jogo.id">
                        <td class="border border-gray-300 px-4 py-2 text-center w-3/5">{{ jogo.name }}</td>
                        <td class="border border-gray-300 px-4 py-2 text-center w-1/5">
                            <span class="text-4xl"
                                :class="{ 'icon-[ph--check-circle-fill] text-green-900': jogo.jogado, 'icon-[ph--x-circle-fill] text-red-900': !jogo.jogado }"></span>
                        </td>
                        <td class="border border-gray-300 px-4 py-2 text-center w-1/5">
                            <button @click="moralizar(jogo)" class="rounded border-2 mx-auto p-2 bg-white font-bold">
                                Moralizar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ModalMoralizada v-if="mostraModal" :jogo="jogoSelecionado" @fechar="fecharModal" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import ModalMoralizada from './ModalMoralizada.vue';

//Importar os jogos dos consoles
import consoles from '@/data/consoles';

const router = useRouter();
const consoleSelecionado = ref('');
const letraSelecionada = ref('#');
const mostrarModal = ref(false);
const jogoSelecionado = ref(null);

const jogosFiltrados = computed(() => {
    const gameConsole = consoles.find(c => c.console === consoleSelecionado.value);
    if (!gameConsole) return [];

    const jogosConsole = gameConsole.jogos.find(c => c.letra === letraSelecionada.value);
    if (!jogosConsole) return [];

    return jogosConsole.jogos;
});

const letras = computed(() => {
    return ['#', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];
});

// Atualizr o consoleSelecionado com base no parâmetro de rota
router.afterEach(() => {
    consoleSelecionado.value = router.currentRoute.value.params.console || '';
});

const moralizar = (jogo) => {
    mostrarModal.value = true;
    jogoSelecionado.value = jogo;
};

const fecharModal = () => {
    mostrarModal.value = false;
};

</script>