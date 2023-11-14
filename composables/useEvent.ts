import type { Event } from "@/schemas";

interface State {
  data: Event[];
  isLoading: boolean;
  error: unknown;
}

function useEvent() {
  const state = reactive<State>({
    data: [],
    isLoading: false,
    error: null,
  });

  const { $api } = useNuxtApp();

  const fetch = async (search = "") => {
    try {
      state.isLoading = true;
      state.error = null;
      const { data } = await $api.get(`/event/search/${search}`);
      state.data = data;
    } catch (error) {
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  return { ...toRefs(state), fetch };
}

export default useEvent;
