/**
 * Sample invocable echo - remove/reuse if not required
 *
 * The following interfaces would match with your input/output schema on the UI
 */

interface InvocableEvent {
  input: any;
}

type InvocableResult = any;

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
  const { input } = event;

  // Add business logic here

  return input;
}
