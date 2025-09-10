import { epomlparse } from 'epoml';

async function main() {
  console.log('=== Basic Example ===');
  // Example usage of epomlparse
  const prompt1 = `
<>
<p>This is basic text</p>
<list>
  <item>item1</item>
  <item>item2</item>
</list>
</>
`;

  try {
    const output1 = await epomlparse(prompt1);
    console.log(output1);
  } catch (error) {
    console.error('Error parsing EPOML:', error);
  }

  console.log('\n=== FileTree Example ===');
  // Example with FileTree component
  const prompt2 = `
<>
<p>Project structure:</p>
<FileTree depth={2}/>
</>
`;

  try {
    const output2 = await epomlparse(prompt2);
    console.log(output2);
  } catch (error) {
    console.error('Error parsing EPOML with FileTree:', error);
  }
}

main();