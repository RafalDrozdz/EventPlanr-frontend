import { sleep } from "@antfu/utils";

export default defineEventHandler(async (event) => {
  const { headers, context } = event;
  const { id } = context.params!;

  return $fetch(`http://localhost:4000/api/event/${id}`, { headers });
});
