import { addHours, format } from "date-fns";
import { FULL_DATE_FORMAT } from "~/constants";
import { Ticket } from "~/schemas/event.schema";

interface Form {
  title: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  city: string;
  street: string;
  streetNumber: string;
  postalCode: string;
  country: string;
  placeId: string;
  longitude: number | null;
  latitude: number | null;
  tickets: Ticket[];
}

function useEventForm(Form: HTMLFormElement) {
  const now = new Date();

  const initialFromDate = format(now, FULL_DATE_FORMAT);
  const initialToDate = format(addHours(now, 1), FULL_DATE_FORMAT);

  const state = reactive<Form>({
    title: "",
    description: "",
    dateFrom: initialFromDate,
    dateTo: initialToDate,
    city: "",
    street: "",
    streetNumber: "",
    postalCode: "",
    country: "",
    placeId: "",
    longitude: null,
    latitude: null,
    tickets: [],
  });

  const submit = () => {
    Form.value?.validate().then((success: boolean) => {
      console.log(success);
      if (success) {
        // yay, models are correct
      } else {
        // oh no, user has filled in
        // at least one invalid value
      }
    });
  };

  return { ...toRefs(state), submit };
}

export default useEventForm;
