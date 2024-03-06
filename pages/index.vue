<template>
  <template v-if="store.countries.length && !store.loading">
    <div class="flex flex-col gap-4 w-full self-start">
      <h3 class="font-bold text-2xl">Countries Catalog</h3>
      <ul class="country-list" v-if="store.filteredCountries.length">
        <li
          v-for="country in store.filteredCountries"
          :key="country.name.common"
        >
          <nuxt-link
            :to="{
              name: 'country',
              params: { country: String(country.cca3).toLowerCase() },
            }"
          >
            <country-card :country="country" />
          </nuxt-link>
        </li>
      </ul>
      <div v-else class="country-list__empty">
        <h3>Countries not Found</h3>
        <button @click="store.search = ''">Reset Filter</button>
      </div>
    </div>
  </template>
  <template v-else>
    <loader />
  </template>
</template>

<script setup lang="ts">
const store = useCountriesStore();
const router = useRouter();
const route = useRoute();

onMounted(() => {
  store.loading = true;
  const { search: querySearch } = route.query;
  if (querySearch) {
    store.search = String(querySearch);
  }
  store.fields = ['name', 'flags', 'population', 'cca3'];
  store.getCountries();
});

watch(
  () => store.search,
  () => {
    console.log('test');
    router.push({
      path: route.path,
      query: store.search ? { search: store.search } : undefined,
    });
  }
);
</script>

<style lang="scss" scoped>
.country-list {
  @apply grid grid-cols-3 gap-4 w-full h-full;
  &__empty {
    @apply flex flex-col items-center justify-center gap-4;
    @apply border p-8 rounded-2xl max-w-[640px] mx-auto shadow-xl;
    > h3 {
      @apply font-bold text-2xl;
    }
    > button {
      @apply underline text-blue-800;
    }
  }
}
</style>
