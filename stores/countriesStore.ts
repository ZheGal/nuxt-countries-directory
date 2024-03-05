export const useCountriesStore = defineStore("countries", () => {
  const {
    public: { apiEndpoint: baseUrl },
  } = useRuntimeConfig();

  const countries = ref([]);
  const loading = ref<boolean>(false);

  async function getCountries() {
    const url = `${baseUrl}all`;
  }

  function resetState() {}

  return { countries, loading, getCountries, resetState };
});
