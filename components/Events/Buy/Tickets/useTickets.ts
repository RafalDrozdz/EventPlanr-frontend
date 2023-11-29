import { cloneDeep } from "lodash-es";
interface Ticket {
  id: number;
  amount: number;
}

function useTickets(tickets: Ticket[]) {
  const state = reactive(cloneDeep(tickets));

  return state;
}

export default useTickets;
