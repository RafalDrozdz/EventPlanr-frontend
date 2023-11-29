import { UNAUTHENTICATED_ROUTES } from "~/constants";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { status } = await useUser();
  const isAuthenticated = status.value === "success";
  const isUnauthenticatedRoute = UNAUTHENTICATED_ROUTES.includes(to.fullPath);
  if (isAuthenticated && isUnauthenticatedRoute)
    return navigateTo("/dashboard");
  if (!isAuthenticated && !isUnauthenticatedRoute) return navigateTo("/login");
});
