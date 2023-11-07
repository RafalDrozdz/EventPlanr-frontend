import { EventForm } from "~/schemas/event.schema";
import { Ref } from "vue";

function useEventForm(
  Form: Ref<HTMLFormElement | undefined>,
  newState: EventForm,
  action: (form: EventForm) => Promise<void>
) {
  const state = reactive<EventForm>(newState);

  const submit = async () => {
    Form.value?.validate().then((success: boolean) => {
      if (success) {
        action(state);
      } else {
        // oh no, user has filled in
        // at least one invalid value
      }
    });
  };

  return { ...toRefs(state), submit };
}

export default useEventForm;
