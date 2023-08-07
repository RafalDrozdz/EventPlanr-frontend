<template>
  <button
    class="logout-button"
    :aria-label="$t('auth.logout')"
    @click="handleLogout"
  >
    <FontAwesomeIcon :icon="faRightFromBracket" />
  </button>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const { logout, isError } = useAuth();
const router = useRouter();

const handleLogout = async () => {
  await logout();
  if (!isError.value) await router.push("/");
};
</script>

<style scoped lang="scss">
.logout-button {
  height: 3rem;
  margin: 0 calc(-1 * var(--space-m));
  font-size: var(--font-l);
  list-style: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
