<template>
  <div class="event">
    <QBanner
      v-if="isSuccessfullyCreated"
      class="event__banner flex text-white bg-green"
    >
      <FontAwesomeIcon :icon="faCircleCheck" />
      {{ $t("events.successful") }}
    </QBanner>
    <EventsFormBackground>
      <h2 class="event__title">{{ data?.title }}</h2>
    </EventsFormBackground>
    <div class="event__info">
      <EventsDisplayDate :text="$t('events.start')" :date="data?.start_date" />
      <EventsDisplayDate :text="$t('events.end')" :date="data?.end_date" />
      <EventsDisplayLocalization
        :city="data?.city"
        :place-name="data?.place_name"
        :street="data?.street"
        :street-number="data?.street_number"
        :longitude="data?.longitude"
        :latitude="data?.latitude"
      />
      <EventsDisplayPrice :ticket="data?.tickets?.[0]" />
      <QBtn
        v-if="!isFree"
        color="primary"
        class="event__order"
        @click="goToPayment"
      >
        {{ $t("buttons.order") }}
      </QBtn>
    </div>
    <EventsDisplayDescription :text="data?.description" />
    <EventsDisplayTickets v-if="!isFree" :tickets="data?.tickets" />
  </div>
</template>

<script setup lang="ts">
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { EventForm } from "~/schemas/event.schema";

const route = useRoute();
const router = useRouter();

const id = computed(() => route.params.id);
const isSuccessfullyCreated = computed(() => route.query.success === "true");

const headers = useRequestHeaders();

const isFree = computed(() => !data.value?.tickets.length);

const { data, error } = await useFetch<EventForm>(`/api/event/${id.value}`, {
  headers,
});

const goToPayment = () =>
  router.push(`${route.path}/buy?ticket=${data.value?.tickets[0]?.id}`);
</script>

<style scoped lang="scss">
.event {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  padding: var(--space-xl) var(--space-xl) 72px var(--space-xl);

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
    padding: var(--space-m);
    width: max-content;
  }

  &__order {
    font-size: var(--font-m);
    font-weight: 700;
    padding: var(--space-m) 8rem;
    min-width: 128px;
    max-width: 384px;
    width: 100%;
  }

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
