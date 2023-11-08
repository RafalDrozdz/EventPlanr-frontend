interface State {
  city: string;
  street: string;
  streetNumber: string;
  postalCode: string;
  country: string;
  placeId: string | undefined;
  placeName: string | undefined;
  longitude: number | null;
  latitude: number | null;
}

function useGoogleLocalizationInput(inputId: string) {
  const state = reactive<State>({
    city: "",
    street: "",
    streetNumber: "",
    postalCode: "",
    country: "",
    placeId: "",
    placeName: "",
    longitude: null,
    latitude: null,
  });

  const autocomplete = ref<google.maps.places.Autocomplete>();

  onMounted(() => {
    const input = document.getElementById(inputId) as HTMLInputElement;

    autocomplete.value = new google.maps.places.Autocomplete(input, {
      types: [],
      fields: ["address_components", "place_id", "geometry", "name"],
    });

    google.maps.event.addListener(autocomplete.value, "place_changed", () => {
      const place = autocomplete.value!.getPlace();
      place.address_components?.forEach((item) => {
        item.types.forEach((type) => {
          switch (type) {
            case "street_number":
              state.streetNumber = item.long_name;
              break;
            case "route":
              state.street = item.long_name;
              break;
            case "locality":
              state.city = item.long_name;
              break;
            case "postal_code":
              state.postalCode = item.long_name;
              break;
            case "country":
              state.country = item.long_name;
              break;
          }
        });
      });
      state.latitude = place.geometry?.location?.lat() ?? null;
      state.longitude = place.geometry?.location?.lng() ?? null;
      state.placeId = place.place_id;
      state.placeName = place.name;
    });
  });

  onUnmounted(() =>
    google.maps.event.clearListeners(autocomplete.value!, "place_changed")
  );

  return toRefs(state);
}

export default useGoogleLocalizationInput;
