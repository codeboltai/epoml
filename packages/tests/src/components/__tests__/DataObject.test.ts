import { testComponent } from './test-utils';

describe('DataObject Component', () => {
  test('should render basic data object', async () => {
    const template = '<DataObject data={{key: "value"}} />';
    const result = await testComponent(template);
    expect(result).toContain('```json\n{\n  "key": "value"\n}\n```');
  });

  test('should render data object with name and type', async () => {
    const template = '<DataObject data={{key: "value"}} name="TestObject" type="test" />';
    const result = await testComponent(template);
    expect(result).toContain('**TestObject**');
    expect(result).toContain('*Type: test*');
  });

  test('should render data object inline', async () => {
    const template = '<DataObject data={{key: "value"}} inline={true} />';
    const result = await testComponent(template);
    expect(result).toContain('`{"key":"value"}`');
  });

  test('should render data object with html syntax', async () => {
    const template = '<DataObject data={{key: "value"}} syntax="html" />';
    const result = await testComponent(template);
    expect(result).toContain('<pre><code>{\n  "key": "value"\n}</code></pre>');
  });

  test('should render data object with json syntax', async () => {
    const template = '<DataObject data={{key: "value"}} syntax="json" />';
    const result = await testComponent(template);
    expect(result).toContain('"data": {\n    "key": "value"\n  }');
  });
});