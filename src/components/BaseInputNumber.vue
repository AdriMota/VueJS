<script setup>
    import { computed, ref } from 'vue';
    import { round } from '../utils/math.js';

    const props = defineProps({
        modelValue: {
            type: Number,
            required: true
        },

        symbol: {
            type: String,
            required: false,
            default: ""
        }
    })

    const emits = defineEmits([
        'update:modelValue'
    ]);

    // COMMENT ENLEVER LA PRÉCISION DE 2 CHIFFRES APRÈS LA VIRGULE POUR LES LITRES ?

    const value = computed({
        get: () => round(props.modelValue, 2),
        set: val => emits('update:modelValue', val)
    });
</script>

<template>
    <input
        type="number"
        v-model="value"
    >
    <span> {{ symbol}} </span>

</template>

<style scoped>
input {
    font-size: 1rem;
    height: 2rem;
    width: 6rem;
    border: none;
    border-radius: 50px;
    padding: 0 0.8rem;
}

span {
    margin-left: 5px;
}
</style>