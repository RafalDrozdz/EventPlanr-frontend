<template>
  <QForm class="create-event-form" @submit="formSubmit" ref="FormElement">
    <QBanner
      v-if="error"
      class="create-event-form__error flex text-white bg-red"
    >
      <FontAwesomeIcon :icon="faTriangleExclamation" />
      Something went wrong!
    </QBanner>
    <EventsFormBackground>
      <EventsFormTitle v-model="title" />
    </EventsFormBackground>
    <EventsFormDate v-model:date-from="startDate" v-model:date-to="endDate" />
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
    <EventsFormSubmit :loading="loading" />
  </QForm>
</template>

<script setup lang="ts">
import { EventForm } from "~/schemas/event.schema";
import { addHours, format } from "date-fns";
import { FULL_DATE_FORMAT } from "~/constants";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const FormElement = ref<HTMLFormElement>();

interface Props {
  form?: EventForm;
  submit: (form: EventForm) => Promise<void>;
  loading: boolean;
  error: unknown;
}

const props = withDefaults(defineProps<Props>(), {
  form: () => {
    const now = new Date();
    const initialFromDate = format(now, FULL_DATE_FORMAT);
    const initialToDate = format(addHours(now, 1), FULL_DATE_FORMAT);

    return {
      title: "",
      description: "",
      startDate: initialFromDate,
      endDate: initialToDate,
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
  startDate,
  endDate,
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

watch(
  () => props.error,
  (error: unknown) => error && window.scrollTo(0, 0)
);
</script>

<style scoped lang="scss">
.create-event-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  padding: var(--space-l) var(--space-l) 72px var(--space-l);

  &__error {
    :deep(.q-banner__content) {
      display: flex;
      align-items: center;
      gap: var(--space-m);
    }

    svg {
      font-size: 2rem;
    }
  }
}
</style>
