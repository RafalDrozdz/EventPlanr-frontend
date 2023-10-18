<template>
  <QForm class="create-event-form" @submit="submit">
    <EventsCreateBackground>
      <EventsCreateTitle v-model="form.title" />
    </EventsCreateBackground>

    <EventsCreateDate
      v-model:date-from="form.dateFrom"
      v-model:date-to="form.dateTo"
    />
    <EventsCreateDescription v-model="form.description" />
    <EventsCreateLocalization
      v-model:city="form.city"
      v-model:street="form.street"
      v-model:street-number="form.streetNumber"
      v-model:postal-code="form.postalCode"
      v-model:country="form.country"
      v-model:place-id="form.placeId"
      v-model:longitude="form.longitude"
      v-model:latitude="form.latitude"
    />
    <EventsCreateTickets />
    <EventsCreateSubmit />
  </QForm>
</template>

<script setup lang="ts">
import { addHours, format } from "date-fns";
import { FULL_DATE_FORMAT } from "~/constants";

const now = new Date();

const initialFromDate = format(now, FULL_DATE_FORMAT);
const initialToDate = format(addHours(now, 1), FULL_DATE_FORMAT);

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
}

const form = reactive<Form>({
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
});

const submit = () => {
  console.log(form);
};
</script>

<style scoped lang="scss">
.create-event-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  padding: var(--space-l) var(--space-l) 72px var(--space-l);
}
</style>
