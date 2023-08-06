import { useUser } from "~/composables";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { status } = await useUser();
  const isAuthenticated = status.value === "success";
  const isLoginPage = to.fullPath === "/login";
  const isRegisterPage = to.fullPath === "/register";

  if (isAuthenticated && (isLoginPage || isRegisterPage))
    return navigateTo("/");
});
