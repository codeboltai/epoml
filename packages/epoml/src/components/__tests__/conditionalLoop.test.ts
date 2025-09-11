import { epomlparse } from '../../core/epomlparse';

describe('Conditional and Loop Rendering Tests', () => {
  test('Paragraph component with if condition (boolean true)', async () => {
    const template = `<Paragraph if={true}>This should render</Paragraph>`;
    const result = await epomlparse(template);
    expect(result).toContain('This should render');
  });

  test('Paragraph component with if condition (boolean false)', async () => {
    const template = `<Paragraph if={false}>This should not render</Paragraph>`;
    const result = await epomlparse(template);
    expect(result).not.toContain('This should not render');
  });

  test('Paragraph component with for loop', async () => {
    const template = `<Paragraph for="item in ['apple', 'banana', 'cherry']">{item}</Paragraph>`;
    const result = await epomlparse(template);
    expect(result).toContain('apple');
    expect(result).toContain('banana');
    expect(result).toContain('cherry');
  });

  test('ListItem component with if condition', async () => {
    const template = `<ListItem if={true}>Visible item</ListItem>`;
    const result = await epomlparse(template);
    expect(result).toContain('Visible item');
  });

  test('ListItem component with for loop', async () => {
    const template = `<ListItem for="num in [1, 2, 3]">Item {num}</ListItem>`;
    const result = await epomlparse(template);
    expect(result).toContain('Item 1');
    expect(result).toContain('Item 2');
    expect(result).toContain('Item 3');
  });

  test('Example component with if condition', async () => {
    const template = `<Example if={true} title="Conditional Example">This example should render</Example>`;
    const result = await epomlparse(template);
    expect(result).toContain('Conditional Example');
  });

  test('Example component with for loop', async () => {
    const template = `<Example for="demo in ['demo1', 'demo2']" title="Example {loop.index}">Content {demo}</Example>`;
    const result = await epomlparse(template);
    expect(result).toContain('Example 0');
    expect(result).toContain('Example 1');
  });

  test('Conditional rendering with variables', async () => {
    const template = `<Paragraph if={isVisible}>Conditional content</Paragraph>`;
    const variables = { isVisible: true };
    const result = await epomlparse(template, variables);
    expect(result).toContain('Conditional content');
  });

  test('Loop rendering with variables', async () => {
    const template = `<Paragraph for="item in items">{item}</Paragraph>`;
    const variables = { items: ['first', 'second', 'third'] };
    const result = await epomlparse(template, variables);
    expect(result).toContain('first');
    expect(result).toContain('second');
    expect(result).toContain('third');
  });

  test('Nested loops', async () => {
    const template = `
      <Paragraph for="category in categories">
        Category: {category.name}
        <ListItem for="item in category.items">{item}</ListItem>
      </Paragraph>
    `;
    const variables = {
      categories: [
        { name: 'Fruits', items: ['apple', 'banana'] },
        { name: 'Vegetables', items: ['carrot', 'broccoli'] }
      ]
    };
    const result = await epomlparse(template, variables);
    expect(result).toContain('Fruits');
    expect(result).toContain('apple');
    expect(result).toContain('banana');
    expect(result).toContain('Vegetables');
    expect(result).toContain('carrot');
    expect(result).toContain('broccoli');
  });
});