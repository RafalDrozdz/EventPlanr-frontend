export default defineNuxtPlugin((nuxtApp) => {
  const instance = useAxiosInstance();

  return {
    provide: {
      api: instance,
    },
  };
});
