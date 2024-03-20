<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
            <div class="fixed inset-0 bg-black opacity-50"></div>
            <div class="relative bg-white w-1/2 p-8">
                <button class="absolute top-0 right-0 mr-4 mt-4 text-2xl" @click="fechar">&times;</button>
                <h2 class="text-2xl font-bold mb-4">Moralização de Jogo</h2>
                <p>{{ jogo.nome }}</p>
                <p>Preço: {{ precoMoralizacao }}</p>
                <p>Pix: {{ pix }}</p>
                <!-- Adicione inputs para informações do Pix, como chave Pix, etc., e um botão para pagar -->
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['jogo']);

const precoMoralizacao = ref(10);
const pix = ref('1234567890');

const fechar = () => {
    this.$emit('fechar');
}

</script>