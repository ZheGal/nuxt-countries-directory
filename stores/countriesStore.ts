export const useCountriesStore = defineStore("countries", () => {
  const api = useApi();

  const countries = ref([]);
  const loading = ref<boolean>(false);

  async function getCountries() {
    const { data } = await api.fetch("all");
  }

  function resetState() {}

  return { countries, loading, getCountries, resetState };
});
