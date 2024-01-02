import Stripe from "stripe";

interface State {
  url: string;
  isLoading: boolean;
  error: unknown;
}

function usePayment() {
  const state = reactive<State>({
    url: "",
    isLoading: false,
    error: null,
  });

  const { $api } = useNuxtApp();

  const redirect = async (
    event_id: number,
    line_items: Stripe.PaymentLinkCreateParams.LineItem[]
  ) => {
    try {
      state.isLoading = true;
      state.error = null;
      const { data } = await $api.post(`/payments/buy`, {
        event_id,
        line_items,
      });
      state.url = data;
      window.open(data, "_self");
    } catch (error) {
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  return { ...toRefs(state), redirect };
}

export default usePayment;
