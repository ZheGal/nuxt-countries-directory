import type { Country } from '~/types';

export const useCountriesStore = defineStore('countries', () => {
  const runtime = useRuntimeConfig();
  const apiBase = runtime.public.apiBase;

  const countries = ref<Country[]>([]);
  const country = ref<Country>();
  const search = ref<string>('');
  const fields = ref<string[]>([]);
  const loading = ref<boolean>(false);

  const filteredCountries = computed(() =>
    countries.value.filter((country) => {
      const commonName = country.name.common.toLowerCase();
      const officialName = country.name.official.toLowerCase();
      const cca3 = country.cca3.toLowerCase();
      const searchLower = search.value.toLowerCase();
      return (
        commonName.includes(searchLower) ||
        officialName.includes(searchLower) ||
        cca3.includes(searchLower)
      );
    })
  );

  async function getCountries() {
    countries.value = [];
    loading.value = true;
    const { data } = await useAsyncData('countries', () =>
      $fetch(`${apiBase}all`, {
        method: 'GET',
        query: {
          fields: fields.value,
        },
      })
    );
    if (data) {
      countries.value = data.value as Country[];
    }
    loading.value = false;
  }

  async function getCountry(code: string) {
    country.value = undefined;
    loading.value = true;
    const { data } = await useAsyncData('country', () =>
      $fetch(`${apiBase}alpha/${code}`, {
        method: 'GET',
        query: {
          fields: fields.value,
        },
      })
    );
    if (data) {
      country.value = data.value as Country;
    }
    loading.value = false;
  }

  return {
    loading,
    countries,
    country,
    fields,
    search,
    filteredCountries,
    getCountries,
    getCountry,
  };
});
