<script setup>
    //import { useLocalstorage } from './composables/localstorage.js';
    import { bookmarks } from './state.js';
    import TheForm from './components/TheForm.vue';

</script>

<template>
    <h1>Mes sites favoris</h1>
    <the-form></the-form>
    <div>
        <table>
            <th>Nom du site</th>
            <th>URL</th>
            <th>Mots-clés</th>
            <tr v-for="bookmark of bookmarks">
                <td>{{ bookmark.name }}</td>
                <td>{{ bookmark.url }}</td>
                <td>{{ bookmark.tags }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    * {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }

    div {
        margin: auto;
        margin-top: 5%;
        background-color: #f4f4f4;
        width: 90%;
        border-radius: 50px;
        padding: 25px;
    }

    h1 {
        margin: 3%;
    }

    table {
        width: 100%;
    }

    th {
        border-bottom: 2px solid #1e1e1e;
        line-height: 2rem;
    }

    td {
        border-bottom: 1px solid white;
        line-height: 2rem;
    }
</style>