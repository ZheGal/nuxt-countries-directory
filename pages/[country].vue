<template>
  <template v-if="!store.loading">
    <div class="country-page">
      <div><button-back /></div>
      <div class="country-page__info" v-if="store.country">
        <div class="country-page__info-left">
          <img
            :src="store.country.flags.svg"
            :alt="store.country.flags.alt"
            :title="store.country.flags.alt"
          />
        </div>
        <div class="country-page__info-right">
          <h1 class="text-2xl font-bold mb-2">
            {{ store.country.name.common }}
          </h1>
          <ul class="text-sm">
            <li>
              <strong>Official Name:</strong>
              {{ store.country.name.official }}
            </li>
            <li>
              <strong>Population:</strong>
              {{ store.country.population.toLocaleString() }}
            </li>
            <li>
              <strong>CCA3 Code:</strong>
              {{ store.country.cca3 }}
            </li>
            <li class="flex flex-row gap-1">
              <strong>Neighbors CCA3 codes:</strong>
              <div
                v-if="store.country.borders?.length"
                class="flex flex-row gap-1"
              >
                <nuxt-link
                  class="underline text-blue-800"
                  :to="{
                    name: 'country',
                    params: { country: border.toLocaleLowerCase() },
                  }"
                  v-for="border in store.country.borders"
                  :key="border"
                  >{{ border }}</nuxt-link
                >
              </div>
              <div v-else>¯\_(ツ)_/¯ No Neighbors</div>
            </li>
            <li class="mt-2">
              <a
                :href="store.country.maps?.googleMaps"
                target="_blank"
                class="flex flex-row gap-1 font-bold underline text-blue-950"
              >
                <icons-google-maps class="w-[14px]" /> Open in Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <loader />
  </template>
</template>

<script setup lang="ts">
const store = useCountriesStore();
const route = useRoute();
const { country } = route.params;

onMounted(() => {
  store.fields = ['name', 'flags', 'population', 'cca3', 'borders', 'maps'];
  store.getCountry(String(country));
});
</script>

<style lang="scss" scoped>
.country-page {
  @apply flex flex-col h-full gap-4 flex-1 self-start;
  &__info {
    @apply flex flex-row gap-4;
    @apply border p-4 rounded-xl shadow-xl;
    &-left {
      @apply w-[150px];
    }
    &-right {
      @apply flex-1;
    }
  }
}
</style>
