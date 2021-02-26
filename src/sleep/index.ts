import delay from "./delay";

interface InvocableEvent {
  delayTime: number;
}

export default async function handler(event: InvocableEvent) {
  const { delayTime } = event;

  await delay(delayTime);
  return { message: `Returned after a delay of ${delayTime}ms` };
}
