export const useCountriesStore = defineStore("countries", () => {
  const api = useApi();

  const countries = ref<any[]>([]);
  const search = ref<string>("");
  const loading = ref<boolean>(false);
  const router = useRouter();
  const { path } = router.currentRoute.value;

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
    resetState();
    loading.value = true;
    const response = await api.fetch("all");
    if (response) {
      countries.value = response as any;
    }
    loading.value = false;
  }

  function resetState() {
    countries.value = [];
  }

  onMounted(() => {
    const { search: querySearch } = router.currentRoute.value.query;
    if (querySearch) {
      search.value = String(querySearch);
    }
  });

  watch(
    () => search.value,
    () => {
      router.push({
        path,
        query: search.value ? { search: search.value } : undefined,
      });
    }
  );

  return {
    countries,
    loading,
    search,
    filteredCountries,
    getCountries,
    resetState,
  };
});
