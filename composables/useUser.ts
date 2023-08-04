import { User } from "~/schemas";
import { useUserStore } from "~/stores";

function useUser() {
  const store = useUserStore();
  return useFetch("http://localhost:4000/api/auth/user", {
    credentials: "include",
    headers: useRequestHeaders(["cookie"]),
    onResponse({ response }) {
      const { _data } = response;
      store.add(_data as User);
    },
  });
}

export default useUser;
