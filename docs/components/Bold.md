# Bold Component

The Bold component emphasizes text using bold formatting, with support for multiple output formats.

## Usage

```jsx
<Bold>Important text</Bold>
<p>This text contains <Bold>emphasized words</Bold> within it.</p>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling |
| `charLimit` | `number` | - | Character limit |
| `tokenLimit` | `number` | - | Token limit |
| `priority` | `number` | - | Truncation priority |

## Output Formats

### Markdown (Default)
```jsx
<Bold>Important text</Bold>
```

**Output:**
```markdown
**Important text**
```

### HTML
```jsx
<Bold syntax="html">Important text</Bold>
```

**Output:**
```html
<b>Important text</b>
```

### Plain Text
```jsx
<Bold syntax="text">Important text</Bold>
```

**Output:**
```text
IMPORTANT TEXT
```

### Structured Formats (JSON, YAML, XML)
For structured formats, the Bold component returns plain text since bold formatting is not applicable:

```jsx
<Bold syntax="json">Important text</Bold>
<Bold syntax="yaml">Important text</Bold>
<Bold syntax="xml">Important text</Bold>
```

**Output:**
```text
Important text
```

## Examples

### Basic Bold Text
```jsx
<p>This is <Bold>very important</Bold> information.</p>
<p>Please <Bold>read carefully</Bold> before proceeding.</p>
```

### With Variables
```jsx
<p>Welcome, <Bold>{username}</Bold>!</p>
<p>You have <Bold>{messageCount}</Bold> new messages.</p>
```

**Usage:**
```typescript
const template = `<p>Welcome, <Bold>{username}</Bold>!</p>`;
const result = await epomlparse(template, { username: "Alice" });
// Output: "Welcome, **Alice**!" (in markdown)
```

### Different Syntaxes
```jsx
<!-- For markdown documents -->
<Bold syntax="markdown">Key Point</Bold>

<!-- For HTML pages -->
<Bold syntax="html">Key Point</Bold>

<!-- For plain text (uppercase) -->
<Bold syntax="text">Key Point</Bold>
```

### Custom Styling
```jsx
<Bold className="highlight" speaker="ai">
  AI-generated insight
</Bold>
```

### Whitespace Handling
```jsx
<!-- Filter whitespace (default) -->
<Bold whiteSpace="filter">  Multiple   spaces   filtered  </Bold>
<!-- Output: **Multiple spaces filtered** -->

<!-- Preserve whitespace -->
<Bold whiteSpace="pre">  Multiple   spaces   preserved  </Bold>
<!-- Output: **  Multiple   spaces   preserved  ** -->

<!-- Trim whitespace -->
<Bold whiteSpace="trim">  Leading and trailing removed  </Bold>
<!-- Output: **Leading and trailing removed** -->
```

### Content Limits
```jsx
<Bold charLimit={20}>
  This is a very long text that will be truncated
</Bold>
<!-- Output: **This is a very lo...** -->

<Bold tokenLimit={3}>
  This text has many words that exceed the limit
</Bold>
<!-- Output: **This text has...** -->
```

## Best Practices

1. **Selective Emphasis**: Use bold sparingly for maximum impact
2. **Meaningful Content**: Bold text should highlight truly important information
3. **Consistent Syntax**: Use the same syntax throughout your document
4. **Accessibility**: Consider how bold text affects screen readers
5. **Length Consideration**: Keep bold text reasonably short for readability
6. **Context Awareness**: Choose syntax based on your target output format

## Common Patterns

### Inline Emphasis
```jsx
<p>
  To get started, click the <Bold>Start</Bold> button and follow the 
  <Bold>Setup Wizard</Bold>.
</p>
```

### Key Terms and Definitions
```jsx
<p>
  <Bold>EPOML</Bold> stands for Enhanced Prompt Orchestration Markup Language.
  It's a <Bold>JSX-based template engine</Bold> designed for text generation.
</p>
```

### Status and Alerts
```jsx
<p>Status: <Bold>{status}</Bold></p>
<p><Bold>Warning:</Bold> This action cannot be undone.</p>
<p><Bold>Success:</Bold> Your changes have been saved.</p>
```

### Lists with Emphasis
```jsx
<ul>
  <li><Bold>Feature 1:</Bold> Description of the first feature</li>
  <li><Bold>Feature 2:</Bold> Description of the second feature</li>
  <li><Bold>Feature 3:</Bold> Description of the third feature</li>
</ul>
```

### Conditional Emphasis
```jsx
{isImportant && <Bold>{message}</Bold>}
{!isImportant && message}
```

## Integration Examples

### With Headers
```jsx
<Header level={2}>
  <Bold>Important:</Bold> Security Guidelines
</Header>
```

### With Code Examples
```jsx
<p>
  The <Bold>{functionName}</Bold> function accepts the following parameters:
</p>
<Code language="javascript">
  function {functionName}(param1, param2) {
    // Implementation here
  }
</Code>
```

### In Documentation
```jsx
<div>
  <Header level={3}>Configuration</Header>
  <p>
    Set the <Bold>timeout</Bold> value to <Bold>{timeoutValue}</Bold> seconds 
    in your configuration file.
  </p>
  <Code language="json">
    {
      "timeout": {timeoutValue}
    }
  </Code>
</div>
```

## Advanced Usage

### Custom Writer Options
```jsx
<Bold 
  syntax="markdown" 
  writerOptions={{ 
    boldStyle: 'underscore' // Custom formatting if supported
  }}
>
  Custom formatted text
</Bold>
```

### Priority-based Truncation
```jsx
<div>
  <Bold priority={1}>High priority content</Bold>
  <Bold priority={3}>Lower priority content</Bold>
</div>
```

### Multi-format Output
```jsx
<!-- Function to render bold text in multiple formats -->
function renderBoldText(text, format) {
  return <Bold syntax={format}>{text}</Bold>;
}
```

## Related Components

- **[Header](./Header.md)** - For section titles that may include bold text
- **[Inline](./Inline.md)** - For other inline formatting options
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For paragraphs with bold captions