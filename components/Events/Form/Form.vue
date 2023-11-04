<template>
  <QForm class="create-event-form" @submit="formSubmit" ref="FormElement">
    <EventsFormBackground>
      <EventsFormTitle v-model="title" />
    </EventsFormBackground>
    <EventsFormDate v-model:date-from="dateFrom" v-model:date-to="dateTo" />
    <EventsFormDescription v-model="description" />
    <EventsFormLocalization
      v-model:city="city"
      v-model:street="street"
      v-model:street-number="streetNumber"
      v-model:postal-code="postalCode"
      v-model:country="country"
      v-model:place-id="placeId"
      v-model:longitude="longitude"
      v-model:latitude="latitude"
    />
    <EventsFormTickets v-model="tickets" />
    <EventsFormSubmit />
  </QForm>
</template>

<script setup lang="ts">
import { EventForm } from "~/schemas/event.schema";
import { addHours, format } from "date-fns";
import { FULL_DATE_FORMAT } from "~/constants";

const FormElement = ref<HTMLFormElement>();

interface Props {
  form?: EventForm;
  submit: (form: EventForm) => Promise<void>;
}

const props = withDefaults(defineProps<Props>(), {
  form: () => {
    const now = new Date();
    const initialFromDate = format(now, FULL_DATE_FORMAT);
    const initialToDate = format(addHours(now, 1), FULL_DATE_FORMAT);

    return {
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
    };
  },
});

const {
  title,
  description,
  dateFrom,
  dateTo,
  city,
  street,
  streetNumber,
  postalCode,
  country,
  placeId,
  longitude,
  latitude,
  tickets,
  submit: formSubmit,
} = useEventForm(FormElement, props.form, props.submit);
</script>

<style scoped lang="scss">
.create-event-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  padding: var(--space-l) var(--space-l) 72px var(--space-l);
}
</style>
