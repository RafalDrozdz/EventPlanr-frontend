// @ts-ignore
import { Loader } from "@googlemaps/js-api-loader";

function useGoogleMap(divId: string) {
  const config = useRuntimeConfig();

  const mapElement = ref<HTMLDivElement>();
  const map = ref();
  const marker = ref<google.maps.Marker>();

  const setMarker = (
    longitude: number,
    latitude: number,
    clearMarker = false
  ) => {
    const position = {
      lat: latitude,
      lng: longitude,
    };

    if (marker.value && !clearMarker) {
      marker.value?.setPosition(position);
    } else {
      marker.value = new google.maps.Marker({
        position,
        map: map.value,
      });
    }
    map.value.setCenter(new google.maps.LatLng(latitude, longitude));
  };

  const load = async () => {
    const loader = new Loader({
      apiKey: config.public.GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    mapElement.value = document.getElementById(divId) as HTMLDivElement;

    await loader.load();
    // @ts-ignore
    const { Map } = await google.maps.importLibrary("maps");

    map.value = new Map(mapElement.value, {
      center: { lat: 51.77675190000001, lng: 19.4892634 },
      zoom: 16,
      disableDefaultUI: true,
    } as google.maps.MapOptions);
  };

  return { setMarker, load };
}

export default useGoogleMap;
