import { render } from '../core/renderer';
import { Paragraph } from '../components/Paragraph';
import { ListItem } from '../components/ListItem';
import { Example } from '../components/Example';

describe('Component Conditional and Loop Logic', () => {
  test('should render paragraph with conditional logic (true)', async () => {
    // Create a component with conditional logic that should render
    const component = Paragraph({
      if: true,
      children: ['This should be rendered']
    } as any); // Cast to any to bypass type checking for this test
    
    const result = await render(component);
    expect(result).toContain('This should be rendered');
  });

  test('should not render paragraph when condition is false', async () => {
    // Create a component with conditional logic that should not render
    const component = Paragraph({
      if: false,
      children: ['This should not be rendered']
    } as any); // Cast to any to bypass type checking for this test
    
    const result = await render(component);
    expect(result).toBe('');
  });

  test('should render example with conditional logic (true)', async () => {
    // Create a component with conditional logic that should render
    const component = Example({
      if: true,
      title: 'Test Example',
      children: ['This is a test example']
    } as any); // Cast to any to bypass type checking for this test
    
    const result = await render(component);
    expect(result).toContain('Test Example');
  });

  test('should not render example when condition is false', async () => {
    // Create a component with conditional logic that should not render
    const component = Example({
      if: false,
      title: 'Test Example',
      children: ['This should not be rendered']
    } as any); // Cast to any to bypass type checking for this test
    
    const result = await render(component);
    expect(result).toBe('');
  });
});