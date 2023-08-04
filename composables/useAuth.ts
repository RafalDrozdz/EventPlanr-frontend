import { useUserStore } from "~/stores";
import { UserSchema, type Login, type Register } from "~/schemas";
import { useAxiosInstance } from "~/composables";
import type { AxiosError } from "axios";
import { ErrorResponse } from "~/schemas/error.schema";

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

  const { t } = useI18n();
  const { add } = useUserStore();
  const router = useRouter();
  const instance = useAxiosInstance();

  const errorMessage = computed(() => {
    const errorMessage = (state.error as AxiosError<ErrorResponse>)?.response
      ?.data?.message;
    if (errorMessage) return t(`error.${errorMessage}`);
    return t("error.SOMETHING_WENT_WRONG");
  });

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
      await router.replace("/");
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
      return user;
    } catch (error) {
      state.isError = true;
      state.error = error;
    } finally {
      state.isLoading = false;
    }
  };

  return { ...toRefs(state), errorMessage, register, login, logout, fetchUser };
}

export default useAuth;
