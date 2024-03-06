<template>
  <div class="country-card">
    <div class="country-card__flag">
      <img :src="country.flags.svg" :alt="country.flags.alt" />
    </div>
    <div class="country-card__information">
      <div class="country-card__name">
        <span class="font-bold">{{ country.name.common }}</span>
      </div>
      <div class="country-card__information-rest">
        <div>Official Name: {{ country.name.official }}</div>
        <div>Population: {{ country.population.toLocaleString() }}</div>
        <div>CCA3 Code: {{ country.cca3 }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  country: any;
}>();
</script>

<style scoped lang="scss">
.country-card {
  @apply h-full w-full;
  @apply flex flex-row items-center gap-4 shadow-lg;
  @apply p-2 px-4 border rounded-md bg-white;
  @apply hover:scale-105 duration-100 hover:shadow-2xl;
  &__flag {
    @apply w-[80px] h-[50px] flex;
  }
  &__information {
    @apply flex flex-col;
    &-rest {
      @apply text-sm;
    }
  }
}
</style>
