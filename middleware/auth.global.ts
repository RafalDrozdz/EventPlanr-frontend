export default defineNuxtRouteMiddleware(async (to, from) => {
  const { status } = await useUser();
  const isAuthenticated = status.value === "success";
  const isLoginPage = to.fullPath === "/login";
  const isRegisterPage = to.fullPath === "/register";

  const isHomePage = to.fullPath === "/";

  if (!isAuthenticated && !isLoginPage) return navigateTo("/login");
  if ((!isAuthenticated && (isLoginPage || isRegisterPage)) || !isHomePage)
    return navigateTo("/");
});
