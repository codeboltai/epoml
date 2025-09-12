import { epomlparse } from 'epoml';

/**
 * This example demonstrates the proper way to use the Code component
 * with complex JavaScript code blocks using template variables.
 * 
 * Key lessons:
 * 1. Use template variables ({variableName}) for complex code to avoid JSX parsing conflicts
 * 2. Wrap multiple JSX elements in a container (div) to prevent parsing issues
 * 3. The Bold and Code components work together seamlessly
 */

async function exampleUsage() {
  //  // Test with your requested function using variables
  // console.log('Testing with your function using variables:');
  // const jsCode = 'function greet(name) { return `Hello, ${name}!`; }';
  // const functionTemplate = `<Code inline={false} lang="javascript">{code}</Code>`;
  // const functionResult = await epomlparse(functionTemplate, { code: jsCode });
  // console.log('Function Template:', functionTemplate);
  // console.log('Function Result:', functionResult);
  // console.log('---');

  const template = `<List>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
      </List>`;
  const result = await epomlparse(template);
  console.log("Result: ", result);
}

exampleUsage().catch(console.error);