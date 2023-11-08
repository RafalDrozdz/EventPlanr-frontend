<template>
  <div class="event">
    <QBanner
      v-if="isSuccessfullyCreated"
      class="event__banner flex text-white bg-green"
    >
      <FontAwesomeIcon :icon="faCircleCheck" />
      The event was successfully created
    </QBanner>
    <EventsFormBackground>
      <h2 class="event__title">{{ data?.title }}</h2>
    </EventsFormBackground>
    <EventsDisplayLocalization
      :city="data?.city"
      :place-name="data?.place_name"
      :street="data?.street"
      :street-number="data?.street_number"
      :longitude="data?.longitude"
      :latitude="data?.latitude"
    />
    <EventsDisplayDescription :text="data?.description" />
    <!--    <EventsFormDate v-model:date-from="startDate" v-model:date-to="endDate" />-->
    <!--    <EventsFormDescription v-model="description" />-->
    <!--    <EventsFormLocalization-->
    <!--      v-model:city="city"-->
    <!--      v-model:street="street"-->
    <!--      v-model:street-number="streetNumber"-->
    <!--      v-model:postal-code="postalCode"-->
    <!--      v-model:country="country"-->
    <!--      v-model:place-id="placeId"-->
    <!--      v-model:longitude="longitude"-->
    <!--      v-model:latitude="latitude"-->
    <!--    />-->
    <!--    <pre>{{ data }}</pre>-->
  </div>
</template>

<script setup lang="ts">
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { EventForm } from "~/schemas/event.schema";

const route = useRoute();

const id = computed(() => route.params.id);
const isSuccessfullyCreated = computed(() => route.query.success === "true");

const headers = useRequestHeaders();

const { data, pending, error, status } = await useFetch<EventForm>(
  `/api/event/${id.value}`,
  { headers }
);
</script>

<style scoped lang="scss">
.event {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  padding: var(--space-xl) var(--space-xl) 72px var(--space-xl);

  &__banner {
    :deep(.q-banner__content) {
      display: flex;
      align-items: center;
      gap: var(--space-m);
    }

    svg {
      font-size: 1.5rem;
    }
  }

  &__title {
    position: absolute;
    bottom: var(--space-xl);
    left: var(--space-l);
    right: var(--space-l);
    width: calc(100% - 2 * var(--space-l));

    background-color: transparent;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2));
    border: none;

    font-size: var(--font-xxl);
    font-weight: 700;
  }
}
</style>
