<template>
  <div
    class="localization"
    @click="showDialog"
    @keydown.enter.space="showDialog"
    role="button"
    tabindex="0"
  >
    <FontAwesomeIcon :icon="faLocationDot" />
    <span class="localization__text">{{ text }}</span>
  </div>
  <QDialog> </QDialog>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface Props {
  placeName: string;
  city: string;
  street: string;
  streetNumber: string;
  longitude: string;
  latitude: string;
}

const props = defineProps<Props>();

let timeoutId = -1;

const $q = useQuasar();
const { setMarker, load } = useGoogleMap("google-map");

const text = computed(
  () =>
    `${props.placeName}, ${props.city} ${props.street} ${props.streetNumber}`
);

const showDialog = async () => {
  $q.dialog({
    title: text.value,
    message: '<div id="google-map" class="localization__map" />',
    html: true,
    width: "1000px",
  });
  clearTimeout(timeoutId);
  timeoutId = window.setTimeout(async () => {
    await load();
    setMarker(+props.longitude, +props.latitude, true);
  }, 100);
};
</script>

<style scoped lang="scss">
.localization {
  display: flex;
  align-items: center;
  gap: var(--space-s);
  font-size: var(--font-m);
  width: max-content;
  padding: var(--space-s) var(--space-m);
  cursor: pointer;

  &__text {
    margin: 0;
  }
  svg {
    font-size: var(--font-xxl);
  }
}
</style>

<style lang="scss">
#google-map {
  min-height: 400px;
  height: 100%;
  width: 100%;
}
.q-dialog__inner--minimized > div {
  display: flex;
  flex-direction: column;
  max-width: 1440px !important;
  width: 100%;
  height: 85%;
}
.q-dialog__message {
  flex-grow: 1;
}
</style>
