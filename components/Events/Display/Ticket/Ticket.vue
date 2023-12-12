<template>
  <div class="ticket">
    <FontAwesomeIcon :icon="faTicket" />
    <span>{{ ticket.metadata.title }}</span>
    <span>{{ ticket.metadata.price }}{{ ticket.metadata.currency }}</span>
    <QBtn color="primary" @click="goToPayment">{{ $t("buttons.select") }}</QBtn>
  </div>
</template>

<script setup lang="ts">
import type { Ticket } from "~/schemas/event.schema";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

interface Props {
  ticket: Ticket;
}

const props = defineProps<Props>();

const route = useRoute();
const router = useRouter();
const goToPayment = () =>
  router.push(`${route.path}/buy?ticket=${props.ticket.id}`);
</script>

<style scoped lang="scss">
.ticket {
  display: grid;
  grid-template-columns: max-content 1fr max-content max-content;
  grid-gap: var(--space-m);
  align-items: center;
  background-color: #eeeeee;
  padding: var(--space-xl);
  font-size: var(--font-l);
  border-radius: var(--card-radius);

  svg {
    font-size: var(--font-xl);
  }
}
</style>
