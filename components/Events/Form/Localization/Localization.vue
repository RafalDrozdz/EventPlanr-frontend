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
  street_number: string;
  street: string;
  city: string;
  place_id: string;
  place_name: string;
  postal_code: string;
  longitude: number | null;
  latitude: number | null;
}

type EmitString =
  | "update:country"
  | "update:street_number"
  | "update:street"
  | "update:city"
  | "update:place_id"
  | "update:place_name"
  | "update:postal_code";

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
  street_number,
  street,
  city,
  place_id,
  place_name,
  postal_code,
  longitude,
  latitude,
} = useGoogleLocalizationInput("google-address-autocomplete");

const { setMarker, load } = useGoogleMap("google-map");

watch([longitude, latitude], ([longitude, latitude]) => {
  if (longitude !== null && latitude !== null) setMarker(longitude, latitude);
});

watch(
  [
    country,
    street_number,
    street,
    city,
    place_id,
    place_name,
    postal_code,
    longitude,
    latitude,
  ],
  ([
    country,
    street_number,
    street,
    city,
    place_id,
    place_name,
    postal_code,
    longitude,
    latitude,
  ]) => {
    vModels.country.value = country;
    vModels.street_number.value = street_number;
    vModels.street.value = street;
    vModels.city.value = city;
    vModels.place_id.value = place_id ?? "";
    vModels.place_name.value = place_name ?? "";
    vModels.postal_code.value = postal_code;
    vModels.longitude.value = longitude;
    vModels.latitude.value = latitude;
  }
);

onMounted(load);
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
