<script setup>
    import { ref } from 'vue';
    import { page, tasks } from '../state.js';

    window.addEventListener('hashchange', () => {
        page.value = window.location.hash;
    })

</script>

<template>
    <nav>
        <ul>
            <li>
                <a href="#home">Accueil</a>
            </li>
            <li>
                <a href="#temperature">Températures</a>
            </li>
            <li>
                <a href="#litres">Litres</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    ul {
        border-bottom: 4px solid #1e1e1e;
        width: 80%;
        margin: auto;
    }

    li {
        display: inline-block;
        margin: 1rem;
    }

    a {
        color:seagreen;
        text-decoration: none;
        font-weight: bold;
    }
</style>