<template>
  <QInput
    filled
    v-model="fullDate"
    class="common-input-date"
    dense
    mask="####-##-## ##:##"
  >
    <template #prepend>
      <div class="common-input-date__date">
        <FontAwesomeIcon :icon="faCalendarDays" class="cursor-pointer" />
        <QPopupProxy cover transition-show="scale" transition-hide="scale">
          <QDate v-model="date" mask="YYYY-MM-DD">
            <div class="row items-center justify-end">
              <QBtn v-close-popup label="Close" color="primary" flat />
            </div>
          </QDate>
        </QPopupProxy>
      </div>
    </template>

    <template #append>
      <div class="common-input-date__time">
        <FontAwesomeIcon :icon="faClock" class="cursor-pointer" />
        <QPopupProxy cover transition-show="scale" transition-hide="scale">
          <QTime v-model="time" format24h>
            <div class="row items-center justify-end">
              <QBtn v-close-popup label="Close" color="primary" flat />
            </div>
          </QTime>
        </QPopupProxy>
      </div>
    </template>
  </QInput>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";

interface Props {
  modelValue: string;
}

interface Emits {
  (emit: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const SPACE = " ";

const fullDate = ref(props.modelValue);
const date = ref("");
const time = ref("");

const setFullDateByDate = (value: string) => {
  const splitDate = fullDate.value.split(SPACE);
  splitDate[0] = value;

  fullDate.value = splitDate.join(SPACE);
};

const setFullDateByTime = (value: string) => {
  const splitDate = fullDate.value.split(SPACE);
  splitDate[1] = value;

  fullDate.value = splitDate.join(SPACE);
};

const setDate = (fullDate: string) => {
  const splitDate = fullDate.split(SPACE);
  date.value = splitDate[0];
};

const setTime = (fullDate: string) => {
  const splitDate = fullDate.split(SPACE);
  time.value = splitDate[1];
};

const setFullDate = (value: string) => (fullDate.value = value);

const emitDate = (value: string) => emit("update:modelValue", value);

watch(date, setFullDateByDate);
watch(time, setFullDateByTime);
watch(fullDate, emitDate);
watch(fullDate, setDate, { immediate: true });
watch(fullDate, setTime, { immediate: true });

watch(() => props.modelValue, setFullDate);
</script>

<style scoped lang="scss"></style>
