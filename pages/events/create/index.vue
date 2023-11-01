<template>
  <QForm class="create-event-form" @submit="submit" ref="Form">
    <EventsCreateBackground>
      <EventsCreateTitle v-model="title" />
    </EventsCreateBackground>
    <EventsCreateDate v-model:date-from="dateFrom" v-model:date-to="dateTo" />
    <EventsCreateDescription v-model="description" />
    <EventsCreateLocalization
      v-model:city="city"
      v-model:street="street"
      v-model:street-number="streetNumber"
      v-model:postal-code="postalCode"
      v-model:country="country"
      v-model:place-id="placeId"
      v-model:longitude="longitude"
      v-model:latitude="latitude"
    />
    <EventsCreateTickets v-model="tickets" />
    <EventsCreateSubmit />
  </QForm>
</template>

<script setup lang="ts">
const Form = ref<HTMLFormElement>();

function validate() {
  Form.value?.validate().then((success: boolean) => {
    console.log(success);
    if (success) {
      // yay, models are correct
    } else {
      // oh no, user has filled in
      // at least one invalid value
    }
  });
}

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
  submit,
} = useEventForm(Form);
</script>

<style scoped lang="scss">
.create-event-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  padding: var(--space-l) var(--space-l) 72px var(--space-l);
}
</style>
