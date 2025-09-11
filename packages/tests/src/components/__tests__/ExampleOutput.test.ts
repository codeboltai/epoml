import { testComponent } from './test-utils';

describe('ExampleOutput Component', () => {
  test('should render basic example output', async () => {
    const template = '<ExampleOutput label="Test Output">Output content</ExampleOutput>';
    const result = await testComponent(template);
    expect(result).toContain('**Test Output:**');
    expect(result).toContain('`Output content`');
  });

  test('should render example output as block', async () => {
    const template = '<ExampleOutput label="Test Output" inline={false}>Output content</ExampleOutput>';
    const result = await testComponent(template);
    expect(result).toContain('**Test Output**');
    expect(result).toContain('```\
Output content\
```');
  });

  test('should render example output with format', async () => {
    const template = '<ExampleOutput label="Test Output" format="json" inline={false}>{"result": "success"}</ExampleOutput>';
    const result = await testComponent(template);
    expect(result).toContain('```json\
{"result": "success"}\
```');
  });

  test('should render example output with html syntax', async () => {
    const template = '<ExampleOutput label="Test Output" syntax="html">Output content</ExampleOutput>';
    const result = await testComponent(template);
    expect(result).toContain('<strong>Test Output:</strong>');
    expect(result).toContain('<code>Output content</code>');
  });
});