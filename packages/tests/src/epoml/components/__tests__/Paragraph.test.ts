import { Paragraph } from 'epoml/components/Paragraph';
import { render } from 'epoml/core/renderer';
import { createElement } from 'epoml/core/createElement';

describe('Paragraph Component', () => {
  describe('Character and Token Limits', () => {
    test('renders normally without limits', async () => {
      const paragraph = createElement(Paragraph, {}, 'This is a test paragraph.');
      const result = await render(paragraph);
      expect(result).toContain('This is a test paragraph.');
    });

    test('applies character limit correctly', async () => {
      const paragraph = createElement(Paragraph, { 
        charLimit: 10 
      }, 'This is a very long paragraph that should be truncated.');
      const result = await render(paragraph);
      expect(result).toContain('(...');
    });

    test('applies token limit correctly', async () => {
      const paragraph = createElement(Paragraph, { 
        tokenLimit: 5 
      }, 'This is a very long paragraph with many tokens that should be truncated.');
      const result = await render(paragraph);
      expect(result).toContain('(...truncated');
    });

    test('applies both character and token limits', async () => {
      const paragraph = createElement(Paragraph, { 
        charLimit: 20,
        tokenLimit: 5
      }, 'This is a very long paragraph with many tokens that should be truncated.');
      const result = await render(paragraph);
      // Character limit should be applied first
      expect(result).toContain('(...');
    });

    test('handles limits that are not exceeded', async () => {
      const paragraph = createElement(Paragraph, { 
        charLimit: 100, 
        tokenLimit: 100
      }, 'This is a short paragraph.');
      const result = await render(paragraph);
      expect(result).toContain('This is a short paragraph.');
    });

    test('handles zero limits gracefully', async () => {
      const paragraph1 = createElement(Paragraph, { 
        charLimit: 0 
      }, 'This is a test paragraph.');
      const result1 = await render(paragraph1);
      expect(result1).toContain('(');

      const paragraph2 = createElement(Paragraph, { 
        tokenLimit: 0
      }, 'This is a test paragraph.');
      const result2 = await render(paragraph2);
      expect(result2).toContain('(...truncated');
    });

    test('applies custom truncation marker', async () => {
      const paragraph = createElement(Paragraph, { 
        charLimit: 15,
        writerOptions: { truncateMarker: ' [...] ' }
      }, 'This is a very long paragraph.');
      const result = await render(paragraph);
      expect(result).toContain(' [...]');
    });

    test('applies middle truncation', async () => {
      const paragraph = createElement(Paragraph, { 
        charLimit: 20,
        writerOptions: { 
          truncateMarker: ' [...]',
          truncateDirection: 'middle'
        }
      }, 'This is a very long paragraph that will be truncated.');
      const result = await render(paragraph);
      expect(result).toContain(' [...]');
    });

    test('applies start truncation', async () => {
      const paragraph = createElement(Paragraph, { 
        charLimit: 20,
        writerOptions: { 
          truncateMarker: ' [...]',
          truncateDirection: 'start'
        }
      }, 'This is a very long paragraph that will be truncated.');
      const result = await render(paragraph);
      expect(result).toContain(' [...]');
    });
  });
});