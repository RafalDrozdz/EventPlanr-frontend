import type { EventForm } from "~/schemas/event.schema";
import { snakeCase } from "lodash-es";

interface State {
  isLoading: boolean;
  error: unknown;
  response: EventForm | null;
}

function useEventAdd() {
  const state = reactive<State>({
    isLoading: false,
    error: null,
    response: null,
  });

  const router = useRouter();
  const { $api } = useNuxtApp();

  const add = async (form: EventForm) => {
    try {
      state.isLoading = true;
      state.error = null;

      const preparedForm: any = {};
      Object.keys(form).forEach(
        (key) => (preparedForm[snakeCase(key)] = form[key as keyof EventForm])
      );

      const { data } = await $api.post("/event", preparedForm);
      state.response = data;

      await router.push({
        path: `/events/${data.id}`,
        query: { success: "true" },
      });
    } catch (error) {
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  return { ...toRefs(state), add };
}

export default useEventAdd;
