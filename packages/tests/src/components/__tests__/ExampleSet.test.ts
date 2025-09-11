import { testComponent } from './test-utils';

describe('ExampleSet Component', () => {
  test('should render basic example set', async () => {
    const template = '<ExampleSet title="Test Examples">Example content</ExampleSet>';
    const result = await testComponent(template);
    expect(result).toContain('## Test Examples');
    expect(result).toContain('Example content');
  });

  test('should render example set with description', async () => {
    const template = '<ExampleSet title="Test Examples" description="These are test examples">Example content</ExampleSet>';
    const result = await testComponent(template);
    expect(result).toContain('These are test examples');
  });

  test('should render example set with inline examples', async () => {
    const template = '<ExampleSet title="Test Examples" inline={true}>Example 1, Example 2</ExampleSet>';
    const result = await testComponent(template);
    expect(result).toContain('**Examples:** Example 1, Example 2');
  });

  test('should render example set with html syntax', async () => {
    const template = '<ExampleSet title="Test Examples" syntax="html">Example content</ExampleSet>';
    const result = await testComponent(template);
    expect(result).toContain('<h3>Test Examples</h3>');
    expect(result).toContain('<p>Example content</p>');
  });
});