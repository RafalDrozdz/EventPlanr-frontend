export default defineEventHandler(async (event) => {
  const { id } = event.context.params!;

  return $fetch(`http://localhost:4000/api/event/${id}`);
});
