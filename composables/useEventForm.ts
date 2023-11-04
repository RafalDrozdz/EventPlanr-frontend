import { EventForm, Ticket } from "~/schemas/event.schema";
import { cloneDeep } from "lodash-es";
import { Ref } from "vue";

function useEventForm(
  Form: Ref<HTMLFormElement | undefined>,
  newState: EventForm,
  action: (form: EventForm) => Promise<void>
) {
  const state = reactive<EventForm>(newState);

  const submit = async () => {
    console.log(Form.value);
    Form.value?.validate().then((success: boolean) => {
      console.log(success);
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
