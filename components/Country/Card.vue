<template>
  <div class="country-card">
    <img
      :src="country.flags.svg"
      :alt="country.flags.alt"
      class="country-card__flag"
    />
    <div class="country-card__information">
      <div class="country-card__name">
        <span class="font-bold">{{ country.name.official }}</span>
        <span v-if="country.name.official !== country.name.common">
          ({{ country.name.common }})
        </span>
      </div>
      <div class="country-card__information-rest">
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
  @apply flex flex-row items-center gap-4;
  @apply p-2 px-4 border rounded-md  bg-white;
  @apply shadow-lg;
  &__flag {
    @apply w-[80px] shadow-lg;
  }
  &__information {
    @apply flex flex-col;
    &-rest {
      @apply text-sm;
    }
  }
}
</style>
