import { UNAUTHENTICATED_ROUTES } from "~/constants";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { status } = await useUser();

  const localePath = useLocalePath();
  const isAuthenticated = status.value === "success";
  const isUnauthenticatedRoute = UNAUTHENTICATED_ROUTES.includes(to.fullPath);

  if (isAuthenticated && isUnauthenticatedRoute) {
    return navigateTo(localePath("/dashboard"));
  }
  if (!isAuthenticated && !isUnauthenticatedRoute) {
    return navigateTo(localePath("/login"));
  }
});
