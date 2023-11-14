import { sleep } from "@antfu/utils";

export default defineEventHandler(async (event) => {
  const { search } = event.context.params!;

  return $fetch(`http://localhost:4000/api/event/search/${search}`);
});
