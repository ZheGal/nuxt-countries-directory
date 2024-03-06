<template>
  <div class="flex flex-col gap-4 w-full self-start">
    <h3 class="font-bold text-2xl">Countries Catalog</h3>
    <template v-if="store.filteredCountries.length">
      <ul class="country-list">
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
    </template>
    <template v-else>
      <div class="flex items-center justify-center m-8" v-if="store.loading">
        <loader />
      </div>
      <div class="country-list__empty" v-if="!store.loading">
        <h3>Countries not Found</h3>
        <button @click="store.search = ''">Reset Filter</button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const store = useCountriesStore();
const router = useRouter();
const route = useRoute();

const { search: querySearch } = route.query;
if (querySearch) {
  store.search = String(querySearch);
}
store.fields = ['name', 'flags', 'population', 'cca3'];
store.getCountries();

watch(
  () => route.query.search,
  (newQuery) => {
    if (store.search !== String(newQuery)) {
      store.search = newQuery ? String(newQuery) : '';
    }
  }
);

watch(
  () => store.search,
  (newSearch) => {
    if (newSearch !== route.query.search) {
      router.push({
        path: route.path,
        query: newSearch ? { search: newSearch } : undefined,
      });
    }
    setTitle();
  }
);

function setTitle() {
  useHead({
    title: `${
      store.search ? `Search: "${store.search}"` : `Catalog`
    } - Countries Directory`,
  });
}

setTitle();
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
