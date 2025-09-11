const { epomlparse } = require('../../epoml/dist/core/epomlparse');

async function testEpomlParse() {
  console.log('Testing epomlparse with Loop component...');
  
  // Test 1: Simple loop with template variables
  console.log('\nTest 1: Simple loop with template variables');
  const template1 = `<Loop for="item in ['apple', 'banana', 'cherry']">Item: {{item}}
</Loop>`;
  
  try {
    const result1 = await epomlparse(template1);
    console.log('Result:', result1);
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  // Test 2: Loop with variables from context
  console.log('\nTest 2: Loop with variables from context');
  const template2 = `<Loop for="fruit in fruits">Fruit: {{fruit}}
</Loop>`;
  const variables2 = {
    fruits: ['apple', 'banana', 'cherry']
  };
  
  try {
    const result2 = await epomlparse(template2, variables2);
    console.log('Result:', result2);
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  // Test 3: Loop with object properties
  console.log('\nTest 3: Loop with object properties');
  const template3 = `<Loop for="person in people">Name: {{person.name}}, Age: {{person.age}}
</Loop>`;
  const variables3 = {
    people: [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 }
    ]
  };
  
  try {
    const result3 = await epomlparse(template3, variables3);
    console.log('Result:', result3);
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  console.log('\nAll tests completed!');
}

testEpomlParse().catch(console.error);