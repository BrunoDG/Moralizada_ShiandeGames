<template>
    <div @click="toggle">
        <slot name="toggler">
            <button>Toggle</button>
        </slot>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const name = ref('DropdownMenu');

const provide = {
    sharedState: this.sharedState
};

const data = {
    sharedState: {
        active: false
    }
};

const toggle = () => this.sharedState.active = !this.sharedState.active;

</script>