<template>
  <div class="localization">
    <h2>{{ $t("events.location") }}</h2>
    <div class="localization__container">
      <input
        id="google-address-autocomplete"
        class="localization__input"
        type="text"
        @keydown.enter.prevent
      />
      <div id="google-map" class="localization__map" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  country: string;
  streetNumber: string;
  street: string;
  city: string;
  placeId: string;
  postalCode: string;
  longitude: number | null;
  latitude: number | null;
}

type EmitString =
  | "update:country"
  | "update:streetNumber"
  | "update:street"
  | "update:city"
  | "update:placeId"
  | "update:postalCode";

type EmitNumber = "update:longitude" | "update:latitude";

interface Emits {
  (emit: EmitString, value: string): void;
  (emit: EmitNumber, value: number | null): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const config = useRuntimeConfig();

const vModels = useVModels(props, emit);

const {
  country,
  streetNumber,
  street,
  city,
  placeId,
  postalCode,
  longitude,
  latitude,
} = useGoogleLocalizationInput("google-address-autocomplete");

const { setMarker } = useGoogleMap("google-map");

watch([longitude, latitude], ([longitude, latitude]) => {
  if (longitude !== null && latitude !== null) setMarker(longitude, latitude);
});

watch(
  [
    country,
    streetNumber,
    street,
    city,
    placeId,
    postalCode,
    longitude,
    latitude,
  ],
  ([
    country,
    streetNumber,
    street,
    city,
    placeId,
    postalCode,
    longitude,
    latitude,
  ]) => {
    vModels.country.value = country;
    vModels.streetNumber.value = streetNumber;
    vModels.street.value = street;
    vModels.city.value = city;
    vModels.placeId.value = placeId ?? "";
    vModels.postalCode.value = postalCode;
    vModels.longitude.value = longitude;
    vModels.latitude.value = latitude;
  }
);
</script>

<style scoped lang="scss">
.localization {
  &__container {
    position: relative;
    width: 100%;
    height: 400px;
  }

  &__input {
    position: absolute;
    left: var(--space-m);
    top: var(--space-m);
    z-index: 1;
    width: 40%;
    min-width: 280px;
    max-width: 500px;
    padding: var(--space-s);
    border-radius: var(--space-xs);
    border: 2px solid var(--text);

    &:focus-visible {
      outline: none;
      border: 2px solid var(--primary);
    }
  }

  &__map {
    width: 100%;
    height: 100%;
  }
}
</style>
