import { useUserStore } from "~/stores";
import { UserSchema, Login, Register } from "~/schemas";
import { useAxiosInstance } from "~/composables";

interface State {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

function useAuth() {
  const state = reactive<State>({
    isLoading: false,
    isError: false,
    error: null,
  });

  const { add } = useUserStore();
  const instance = useAxiosInstance();

  const initial = () => {
    state.isLoading = true;
    state.isError = false;
    state.error = null;
  };

  const register = async (registerData: Register) => {
    try {
      initial();
      const { data } = await instance.post("auth/register", registerData);
      UserSchema.parse(data);
    } catch (error) {
      state.isError = true;
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  const login = async (loginData: Login) => {
    try {
      initial();
      const { data } = await instance.post("auth/login", loginData);
      const user = UserSchema.parse(data);
      add(user);
    } catch (error) {
      state.isError = true;
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  const logout = async () => {
    try {
      initial();
      await instance.post("auth/logout");
    } catch (error) {
      state.isError = true;
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  const fetchUser = async () => {
    try {
      initial();
      const { data } = await instance.get("auth/user");
      const user = UserSchema.parse(data);
      add(user);
    } catch (error) {
      state.isError = true;
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  return { ...toRefs(state), register, login, logout, fetchUser };
}

export default useAuth;
