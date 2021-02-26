import delay from "./delay";

export default async function handler(
  event: InvocableEvent,
  context: InvocableContext
) {
  const { input } = event;

  await delay(input.delay);
  return { message: `Returned after a delay of ${input.delay}ms` };
}
