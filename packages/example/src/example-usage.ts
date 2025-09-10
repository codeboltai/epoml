import { epomlparse } from 'epoml';

async function exampleUsage() {
  const template1 = `<p>This text contains <Bold>emphasized words</Bold> within it.</p>`;
  const result1 = await epomlparse(template1, { name: "hi" });
  console.log('Template:', template1);
  console.log('Variables:', JSON.stringify({ name: "hi" }));
  console.log('Result:', result1);
  console.log('---');
}

exampleUsage().catch(console.error);