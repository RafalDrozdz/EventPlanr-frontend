<template>
  <li class="app-menu-item">
    <nuxt-link
      :to="localePath(href)"
      class="app-menu-item__link"
      active-class="app-menu-item__link--active"
      :aria-label="ariaLabel"
    >
      <FontAwesomeIcon :icon="icon" />
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface Props {
  name: string;
  icon: IconDefinition;
  href: string;
}

const props = defineProps<Props>();
const { t } = useI18n();
const localePath = useLocalePath();
const ariaLabel = t(`route.${props.name}`);
</script>

<style scoped lang="scss">
.app-menu-item {
  height: 3rem;
  margin: 0 calc(-1 * var(--space-m));
  font-size: var(--font-l);
  list-style: none;

  &:hover {
    background-color: var(--secondary);
    cursor: pointer;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: var(--text);

    &--active {
      color: var(--accent);
    }
  }
}
</style>
