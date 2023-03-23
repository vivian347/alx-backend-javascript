export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
    queue.push('Guardrail was processed');
  } catch (e) {
    queue.push(e);
    queue.push('Guardrail was processed');
  }
  return queue;
}
