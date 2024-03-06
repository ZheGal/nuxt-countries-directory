<template>
  <ul class="country-list">
    <li v-for="country in countries" :key="country.name.common">
      <nuxt-link :to="country.name">
        <country-card :country="country" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  countries: any;
}>();
</script>

<style lang="scss" scoped>
.country-list {
  @apply grid grid-cols-3 gap-4;
}
</style>
