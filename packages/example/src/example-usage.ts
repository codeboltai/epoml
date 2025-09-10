import { epomlparse } from 'epoml';

async function exampleUsage() {
  // Example from user query: <p>My name is name<p> with {name:"hi"}
  const template1 = `<p>My name is {name}</p>`;
  const result1 = await epomlparse(template1, { name: "hi" });
  console.log('Template:', template1);
  console.log('Variables:', JSON.stringify({ name: "hi" }));
  console.log('Result:', result1);
  console.log('---');

  // Example from user query: <Tree directory=treepath/> with {treepath:"./"}
  const template2 = `<FileTree directory={treepath} />`;
  const result2 = await epomlparse(template2, { treepath: "./" });
  console.log('Template:', template2);
  console.log('Variables:', JSON.stringify({ treepath: "./" }));
  console.log('Result preview:');
  console.log(result2.substring(0, 300) + '...');
}

exampleUsage().catch(console.error);