<template>
  <div class="lang-selector">
    <QChip
      v-for="{ translation, lang, flag } in LANGUAGES"
      :key="lang"
      :class="getChipClasses(lang)"
      :selected="checkIsLangSelected(lang)"
      @update:selected="selectLang(lang)"
      color="primary"
      text-color="white"
    >
      <FontAwesomeIcon
        :class="getIconClasses(lang)"
        :icon="faCheck"
        aria-label="false"
      />
      <component :is="flag" />
      {{ $t(translation) }}
    </QChip>
  </div>
</template>

<script setup lang="ts">
import { LANGUAGES } from "~/constants";
import type { Lang } from "~/types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const { setLocale, setLocaleCookie } = useI18n();

const { locale } = useI18n();

const checkIsLangSelected = (lang: Lang): boolean => locale.value === lang;

const selectLang = (lang: Lang) => {
  setLocale(lang);
  setLocaleCookie(lang);
};

const getChipClasses = (icon: Lang): string[] => {
  const isSelected = checkIsLangSelected(icon);
  const classes = ["lang-selector__chip"];
  if (isSelected) classes.push("lang-selector__chip--selected");
  return classes;
};

const getIconClasses = (icon: Lang): string[] => {
  const isSelected = checkIsLangSelected(icon);
  const classes = ["lang-selector__icon"];
  if (!isSelected) classes.push("lang-selector__icon--hidden");
  return classes;
};
</script>

<style scoped lang="scss">
.lang-selector {
  padding: var(--space-l);
  &__chip {
    width: max-content;
    background-color: var(--text) !important;

    &:focus-visible {
      outline: 2px solid var(--text);
      outline-offset: 2px;
    }

    :deep(.q-chip__content) {
      display: flex;
      gap: var(--space-m);
    }
    :deep(.q-icon) {
      display: none;
    }
  }
  &__icon--hidden {
    visibility: hidden;
  }
}
</style>
