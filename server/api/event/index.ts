export default defineEventHandler(async (event) => {
  return $fetch(`http://localhost:4000/api/event`);
});
