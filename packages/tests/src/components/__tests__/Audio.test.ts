import { testComponent } from './test-utils';

describe('Audio Component', () => {
  test('should render basic audio component', async () => {
    const template = '<Audio src="test.mp3" alt="Test audio" />';
    const result = await testComponent(template);
    expect(result).toContain('[Audio:');
  });

  test('should render audio with base64 data', async () => {
    const template = '<Audio base64="dGVzdCBhdWRpbw==" alt="Test audio" />';
    const result = await testComponent(template);
    expect(result).toContain('[Audio:');
  });

  test('should render audio with position', async () => {
    const template = '<Audio src="test.mp3" alt="Test audio" position="top" />';
    const result = await testComponent(template);
    expect(result).toContain('[Audio:');
  });

  test('should render audio with different syntax', async () => {
    const template = '<Audio src="test.mp3" alt="Test audio" syntax="html" />';
    const result = await testComponent(template);
    expect(result).toContain('<audio');
  });
});