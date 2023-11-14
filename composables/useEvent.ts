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

  const fetch = async (text: string) => {
    try {
      state.isLoading = true;
    } catch (error) {
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  return { ...toRefs(state) };
}

export default useEvent;
