const { Loop } = require('../../epoml/dist/components/Loop');
const { render } = require('../../epoml/dist/core/renderer');

async function testLoopComponent() {
  console.log('Testing Loop component...');
  
  // Test 1: Simple array loop with string items
  console.log('\nTest 1: Simple array loop with string items');
  const component1 = Loop({
    for: 'item in ["apple", "banana", "cherry"]',
    children: ['Item: {{item}}\n'],
    context: {}
  });
  
  const result1 = await render(component1);
  console.log('Result:', result1);
  
  // Test 2: Loop with array from context
  console.log('\nTest 2: Loop with array from context');
  const context = {
    fruits: ['apple', 'banana', 'cherry']
  };

  const component2 = Loop({
    for: 'fruit in fruits',
    children: ['Fruit: {{fruit}}\n'],
    context
  });
  
  const result2 = await render(component2);
  console.log('Result:', result2);
  
  // Test 3: Loop with object array and property access
  console.log('\nTest 3: Loop with object array and property access');
  const context3 = {
    people: [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 }
    ]
  };

  const component3 = Loop({
    for: 'person in people',
    children: ['Name: {{person.name}}, Age: {{person.age}}\n'],
    context: context3
  });
  
  const result3 = await render(component3);
  console.log('Result:', result3);
  
  // Test 4: Loop with nested object properties
  console.log('\nTest 4: Loop with nested object properties');
  const context4 = {
    users: [
      { profile: { name: 'John Doe', email: 'john@example.com' } },
      { profile: { name: 'Jane Smith', email: 'jane@example.com' } }
    ]
  };

  const component4 = Loop({
    for: 'user in users',
    children: ['User: {{user.profile.name}} ({{user.profile.email}})\n'],
    context: context4
  });
  
  const result4 = await render(component4);
  console.log('Result:', result4);
  
  console.log('\nAll tests completed!');
}

testLoopComponent().catch(console.error);