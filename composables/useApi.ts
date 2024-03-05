export function useApi() {
  const runtime = useRuntimeConfig();
  const apiBase = runtime.public.apiBase;

  const fetch = async (path: string, config?: any) => {
    const url = [apiBase, path]
      .map((s: any) => s.replace(/^\/+|\/+$/g, ""))
      .join("/");
    const newConfig = config ? { ...config } : {};
    const result = await useFetch(url, {
      ...newConfig,
    });
    return result;
  };

  return { fetch };
}
