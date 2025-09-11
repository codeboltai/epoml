import { render, setEvaluationContext } from 'epoml/core/renderer';
import { Loop } from 'epoml/components/Loop';
import { epomlparse } from 'epoml/core/epomlparse';

describe('Loop Component', () => {
  beforeEach(() => {
    // Reset evaluation context before each test
    setEvaluationContext({});
  });

  test('should render simple array loop with string items', async () => {
    const component = Loop({
      for: 'item in ["apple", "banana", "cherry"]',
      children: ['Item: {{item}}\n'],
      context: {}
    });
    
    const result = await render(component);
    expect(result).toContain('Item: apple');
    expect(result).toContain('Item: banana');
    expect(result).toContain('Item: cherry');
  });

  test('should render loop with array from context', async () => {
    const context = {
      fruits: ['apple', 'banana', 'cherry']
    };

    const component = Loop({
      for: 'fruit in fruits',
      children: ['Fruit: {{fruit}}\n'],
      context
    });
    
    const result = await render(component);
    expect(result).toContain('Fruit: apple');
    expect(result).toContain('Fruit: banana');
    expect(result).toContain('Fruit: cherry');
  });

  test('should render loop with object array and property access', async () => {
    const context = {
      people: [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 }
      ]
    };

    const component = Loop({
      for: 'person in people',
      children: ['Name: {{person.name}}, Age: {{person.age}}\n'],
      context
    });
    
    const result = await render(component);
    expect(result).toContain('Name: Alice, Age: 30');
    expect(result).toContain('Name: Bob, Age: 25');
    expect(result).toContain('Name: Charlie, Age: 35');
  });

  test('should provide loop variables (index, first, last)', async () => {
    const context = {
      items: ['first', 'second', 'third']
    };

    const component = Loop({
      for: 'item in items',
      children: ['{{loop.index}}: {{item}} (First: {{loop.first}}, Last: {{loop.last}})\n'],
      context
    });
    
    const result = await render(component);
    expect(result).toContain('0: first (First: true, Last: false)');
    expect(result).toContain('1: second (First: false, Last: false)');
    expect(result).toContain('2: third (First: false, Last: true)');
  });

  test('should handle empty array', async () => {
    const context = {
      emptyArray: []
    };

    const component = Loop({
      for: 'item in emptyArray',
      children: ['Item: {{item}}\n'],
      context
    });
    
    const result = await render(component);
    expect(result).toBe('');
  });

  test('should handle invalid loop expression', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    
    const component = Loop({
      for: 'invalid expression',
      children: ['This should not render'],
      context: {}
    });
    
    const result = await render(component);
    expect(result).toBe('');
    expect(consoleSpy).toHaveBeenCalledWith('Invalid loop expression:', 'invalid expression');
    
    consoleSpy.mockRestore();
  });

  test('should work with epomlparse for integration testing', async () => {
    const template = `<Loop for="item in items">Item {{loop.index}}: {{item}}
</Loop>`;
    
    const variables = {
      items: ['first', 'second', 'third']
    };
    
    const result = await epomlparse(template, variables);
    expect(result).toContain('Item 0: first');
    expect(result).toContain('Item 1: second');
    expect(result).toContain('Item 2: third');
  });

  test('should work with nested object properties in epomlparse', async () => {
    const template = `<Loop for="person in people">Name: {{person.name}}, Age: {{person.age}}
</Loop>`;
    
    const variables = {
      people: [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 }
      ]
    };
    
    const result = await epomlparse(template, variables);
    expect(result).toContain('Name: Alice, Age: 30');
    expect(result).toContain('Name: Bob, Age: 25');
  });

  test('should work with inline array in epomlparse', async () => {
    const template = `<Loop for="color in ['red', 'green', 'blue']">Color: {{color}}
</Loop>`;
    
    const result = await epomlparse(template);
    expect(result).toContain('Color: red');
    expect(result).toContain('Color: green');
    expect(result).toContain('Color: blue');
  });

  test('should handle nested loops', async () => {
    const template = `<Loop for="category in categories">Category: {{category.name}}
<Loop for="item in category.items">  - {{item}}
</Loop>
</Loop>`;
    
    const variables = {
      categories: [
        { name: 'Fruits', items: ['apple', 'banana'] },
        { name: 'Vegetables', items: ['carrot', 'broccoli'] }
      ]
    };
    
    const result = await epomlparse(template, variables);
    expect(result).toContain('Category: Fruits');
    expect(result).toContain('  - apple');
    expect(result).toContain('  - banana');
    expect(result).toContain('Category: Vegetables');
    expect(result).toContain('  - carrot');
    expect(result).toContain('  - broccoli');
  });

  test('should work with complex object access', async () => {
    const template = `<Loop for="user in users">User: {{user.profile.name}} ({{user.profile.email}})
</Loop>`;
    
    const variables = {
      users: [
        { profile: { name: 'John Doe', email: 'john@example.com' } },
        { profile: { name: 'Jane Smith', email: 'jane@example.com' } }
      ]
    };
    
    const result = await epomlparse(template, variables);
    expect(result).toContain('User: John Doe (john@example.com)');
    expect(result).toContain('User: Jane Smith (jane@example.com)');
  });

  test('should handle array of numbers', async () => {
    const template = `<Loop for="num in numbers">Number: {{num}}
</Loop>`;
    
    const variables = {
      numbers: [1, 2, 3, 4, 5]
    };
    
    const result = await epomlparse(template, variables);
    expect(result).toContain('Number: 1');
    expect(result).toContain('Number: 2');
    expect(result).toContain('Number: 3');
    expect(result).toContain('Number: 4');
    expect(result).toContain('Number: 5');
  });

  test('should handle mixed data types in array', async () => {
    const template = `<Loop for="item in mixedArray">Item: {{item}} (type: {{typeof item}})
</Loop>`;
    
    const variables = {
      mixedArray: ['string', 42, true, { name: 'object' }]
    };
    
    const result = await epomlparse(template, variables);
    expect(result).toContain('Item: string');
    expect(result).toContain('Item: 42');
    expect(result).toContain('Item: true');
    expect(result).toContain('Item: [object Object]'); // Objects get stringified
  });
});
