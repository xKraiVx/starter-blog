export const getEndpoint = (path: string) => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  if (apiBase) {
    return `${apiBase}${path}`;
  }

  return path;
};
