import { epomlparse } from 'epoml';

async function exampleUsage() {
   // Test with your requested function using variables
  console.log('Testing with your function using variables:');
  const jsCode = 'function greet(name) { return `Hello, ${name}!`; }';
  const functionTemplate = `<Code inline={false} lang="javascript">{code}</Code>`;
  const functionResult = await epomlparse(functionTemplate, { code: jsCode });
  console.log('Function Template:', functionTemplate);
  console.log('Function Result:', functionResult);
  console.log('---');
}

exampleUsage().catch(console.error);