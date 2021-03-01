/**
 * Sample invocable sleep - to demonstrate async example
 * - remove if not needed
 *
 */
import delay from "./delay";

interface InvocableEvent {
  delayTime: number;
}

interface InvocableResult {
  message: string;
}

/**
 * Handler function that contains the business logic
 * @param event [InvocableEvent] - input to your invocable
 * @param context - any context information that may be required
 * @return InvocableResult - output of your invocable
 */
export default async function handler(
  event: InvocableEvent,
  context: any
): Promise<InvocableResult> {
  const { delayTime } = event;

  // Add business logic here
  await delay(delayTime);

  return { message: `Returned after a delay of ${delayTime}ms` };
}
