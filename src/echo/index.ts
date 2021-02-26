interface InvocableEvent {
  input: any;
}

export default async function handler(event: InvocableEvent, context: any) {
  const { input } = event;
  return input;
}
