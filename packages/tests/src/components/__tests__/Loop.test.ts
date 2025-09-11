import { testComponent } from './test-utils';

describe('Loop Component', () => {
  test('should render loop with array of strings', async () => {
    const template = '<Loop for="item in items">{item}</Loop>';
    const result = await testComponent(template, { items: ['apple', 'banana', 'cherry'] });
    expect(result).toContain('apple');
    expect(result).toContain('banana');
    expect(result).toContain('cherry');
  });

  test('should render loop with array of objects', async () => {
    const template = '<Loop for="person in people">{person.name} is {person.age} years old</Loop>';
    const result = await testComponent(template, { 
      people: [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 }
      ] 
    });
    expect(result).toContain('Alice is 30 years old');
    expect(result).toContain('Bob is 25 years old');
  });

  test('should render loop with numeric values', async () => {
    const template = '<Loop for="num in numbers">{num}</Loop>';
    const result = await testComponent(template, { numbers: [1, 2, 3, 4, 5] });
    expect(result).toContain('1');
    expect(result).toContain('2');
    expect(result).toContain('3');
    expect(result).toContain('4');
    expect(result).toContain('5');
  });
});