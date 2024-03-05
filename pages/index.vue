<template>
  <div class="font-bold">Countries List</div>
  <div>{{ store.countries }}</div>
</template>

<script setup lang="ts">
const store = useCountriesStore();

onMounted(() => store.getCountries());
</script>
