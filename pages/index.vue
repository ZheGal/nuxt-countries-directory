<template>
  <template v-if="store.loading">Loading...</template>
  <template v-else>
    <country-list :countries="store.filteredCountries" />
  </template>
</template>

<script setup lang="ts">
const store = useCountriesStore();

onMounted(() => store.getCountries());
</script>
