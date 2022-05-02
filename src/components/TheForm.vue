<script setup>
    import { ref } from 'vue';
    import { bookmarks } from '../state.js';

    const name = ref('');
    const url = ref('');
    const tags = ref('');

    function addBookmark() {
        bookmarks.value.push({
            'name' : name.value,
            'url' : url.value,
            'tags' : tags.value
        })
    }

</script>

<template>
    <form @submit.prevent="addBookmark">
        <label>Nom : </label>
        <input
            type="text"
            v-model="name"
            placeholder="Nom du site"
            required
        >

        <label>URL : </label>
        <input
            type="url"
            v-model="url"
            placeholder="URL du site"
            required
        >

        <label>Catégories : </label>
        <input
            type="text"
            v-model="tags"
            placeholder="Mots clés"
        >

        <button>Ajouter</button>
    </form>
</template>

<style scoped>
input {
    font-size: 1rem;
    height: 2rem;
    width: 15%;
    border: none;
    border-bottom: 2px solid #1e1e1e;
    padding: 0 0.8rem;
    margin-right: 4%;
}

button {
    font-size: 1rem;
    height: 2rem;
    border: 2px solid #1e1e1e;
    border-radius: 25px;
    width: 100px;
}
</style>