<script setup>
  import TheNav from './components/TheNav.vue';
  import { page } from './state.js';
  import BaseInputNumber from './components/BaseInputNumber.vue';
  import { ref, computed } from 'vue';

  const baseUnit = ref(0);

  const kelvin = computed({
    get: () => baseUnit.value,
    set: val => baseUnit.value = val,
  });

  const celsius = computed({
    get: () => baseUnit.value - 273.15,
    set: val => baseUnit.value = val + 273.15,
  });

  const fahrenheit = computed({
    get: () => baseUnit.value * 1.8 - 459.67,
    set: val => baseUnit.value = (val + 459.67) / 1.8,
  });

  const litres = computed({
    get: () => baseUnit.value,
    set: val => baseUnit.value = val,
  });

  const decilitres = computed({
    get: () => baseUnit.value * 10,
    set: val => baseUnit.value = val / 10,
  });

  const centilitres = computed({
    get: () => baseUnit.value * 100,
    set: val => baseUnit.value = val / 100,
  });

  const millilitres = computed({
    get: () => baseUnit.value * 1000,
    set: val => baseUnit.value = val / 1000,
  });
</script>

<template>
  <the-nav></the-nav>

  <div class="homepage" v-show="page === '#home'">
    <h1>Bienvenue dans cette web app</h1>
    <p>Cette web app est un convertisseur.<br>Viens l'essayer !</p>
  </div>

  <div v-show="page === '#temperature'">
    <h1>Températures</h1>

    <h2>Température en kelvin</h2>
    <base-input-number
      v-model="kelvin"
      symbol="K"
    />

    <h2>Température en celsius</h2>
    <base-input-number
      v-model="celsius"
      symbol="°C"
    />

    <h2>Température en fahrenheit</h2>
    <base-input-number
      v-model="fahrenheit"
      symbol="°F"
    />
  </div>

  <div v-show="page === '#litres'">
    <h1>Litres</h1>

    <h2>Litres</h2>
    <base-input-number
      v-model="litres"
      symbol="l"
    />

    <h2>Décilitres</h2>
    <base-input-number
      v-model="decilitres"
      symbol="dl"
    />

    <h2>Centilitres</h2>
    <base-input-number
      v-model="centilitres"
      symbol="°cl"
    />

    <h2>Millilitres</h2>
    <base-input-number
      v-model="millilitres"
      symbol="ml"
    />
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
  width: 80%;
  border-radius: 50px;
  padding: 25px;
}

h1 {
  margin: 0;
}

h2 {
  margin-top: 6%;
  font-size: 1em;
}

p {
  margin-top: 5%;
}

</style>
