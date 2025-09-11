import { testComponent } from './test-utils';

describe('Folder Component', () => {
  test('should render basic folder', async () => {
    const template = '<Folder name="Test Folder">Folder contents</Folder>';
    const result = await testComponent(template);
    expect(result).toContain('📁 Test Folder');
    expect(result).toContain('Folder contents');
  });

  test('should render folder with path', async () => {
    const template = '<Folder name="Test Folder" path="/test/path">Folder contents</Folder>';
    const result = await testComponent(template);
    expect(result).toContain('📁 Test Folder');
    expect(result).toContain('Folder contents');
  });

  test('should render folder with html syntax', async () => {
    const template = '<Folder name="Test Folder" syntax="html">Folder contents</Folder>';
    const result = await testComponent(template);
    expect(result).toContain('<h3>📁 Test Folder</h3>');
    expect(result).toContain('<div class="folder-content">');
  });

  test('should render folder with json syntax', async () => {
    const template = '<Folder name="Test Folder" syntax="json">Folder contents</Folder>';
    const result = await testComponent(template);
    expect(result).toContain('"type": "folder"');
    expect(result).toContain('"name": "Test Folder"');
  });
});