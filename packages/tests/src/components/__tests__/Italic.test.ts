import { testComponent } from './test-utils';

describe('Italic Component', () => {
  test('should render italic text with markdown syntax', async () => {
    const template = '<Italic>This is italic text</Italic>';
    const result = await testComponent(template);
    expect(result).toContain('*This is italic text*');
  });

  test('should render italic text with html syntax', async () => {
    const template = '<Italic syntax="html">This is italic text</Italic>';
    const result = await testComponent(template);
    expect(result).toContain('<em>This is italic text</em>');
  });

  test('should render italic text with json syntax', async () => {
    const template = '<Italic syntax="json">This is italic text</Italic>';
    const result = await testComponent(template);
    expect(result).toContain('"type": "italic"');
  });

  test('should render italic text with custom class', async () => {
    const template = '<Italic className="custom-italic">This is italic text</Italic>';
    const result = await testComponent(template);
    expect(result).toContain('*This is italic text*');
  });
});