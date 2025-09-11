# Italic Component

The Italic component emphasizes text using italic formatting, with support for multiple output formats.

## Usage

```jsx
<Italic>Emphasized text</Italic>
<p>This text contains <Italic>emphasized words</Italic> within it.</p>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling |

## Output Formats

### Markdown (Default)
```jsx
<Italic>Emphasized text</Italic>
```

**Output:**
```markdown
*Emphasized text*
```

### HTML
```jsx
<Italic syntax="html">Emphasized text</Italic>
```

**Output:**
```html
<em>Emphasized text</em>
```

### Plain Text
```jsx
<Italic syntax="text">Emphasized text</Italic>
```

**Output:**
```text
Emphasized text
```

### Structured Formats (JSON, YAML, XML)
For structured formats, the Italic component returns formatted objects:

```jsx
<Italic syntax="json">Emphasized text</Italic>
```

**Output:**
```json
{"type": "italic", "text": "Emphasized text"}
```

```jsx
<Italic syntax="xml">Emphasized text</Italic>
```

**Output:**
```xml
<italic>Emphasized text</italic>
```

## Examples

### Basic Italic Text
```jsx
<p>This is <Italic>very important</Italic> information.</p>
<p>Please <Italic>read carefully</Italic> before proceeding.</p>
```

### With Variables
```jsx
<p>Book title: <Italic>{bookTitle}</Italic></p>
<p>Author: <Italic>{authorName}</Italic></p>
```

**Usage:**
```typescript
const template = `<p>Book title: <Italic>{bookTitle}</Italic></p>`;
const result = await epomlparse(template, { bookTitle: "The Great Gatsby" });
// Output: "Book title: *The Great Gatsby*" (in markdown)
```

### Different Syntaxes
```jsx
<!-- For markdown documents -->
<Italic syntax="markdown">Key Term</Italic>

<!-- For HTML pages -->
<Italic syntax="html">Key Term</Italic>

<!-- For plain text -->
<Italic syntax="text">Key Term</Italic>
```

### Custom Styling
```jsx
<Italic className="highlight" speaker="ai">
  AI-generated emphasis
</Italic>
```

## Best Practices

1. **Subtle Emphasis**: Use italic for subtle emphasis or to denote special terms
2. **Titles and Names**: Great for book titles, publication names, or foreign words
3. **Consistent Usage**: Use the same syntax throughout your document
4. **Readability**: Don't overuse italic text as it can reduce readability
5. **Context Awareness**: Choose syntax based on your target output format

## Common Patterns

### Book and Publication Titles
```jsx
<p>
  In <Italic>The Art of War</Italic>, Sun Tzu discusses strategic thinking.
  This concept was later explored in <Italic>Harvard Business Review</Italic>.
</p>
```

### Technical Terms and Definitions
```jsx
<p>
  The <Italic>algorithm</Italic> processes data using a <Italic>recursive approach</Italic>.
  This <Italic>methodology</Italic> ensures optimal performance.
</p>
```

### Foreign Words and Phrases
```jsx
<p>
  The concept of <Italic>kaizen</Italic> (continuous improvement) is central to this approach.
  We follow the principle of <Italic>caveat emptor</Italic> in all transactions.
</p>
```

### User Interface Elements
```jsx
<p>
  Click on <Italic>File</Italic> then select <Italic>Save As</Italic> from the menu.
  Navigate to the <Italic>Settings</Italic> tab to configure options.
</p>
```

### Variables and Parameters
```jsx
<p>
  Set the <Italic>timeout</Italic> parameter to <Italic>{timeoutValue}</Italic> seconds.
  The <Italic>maxRetries</Italic> value should be between 1 and 10.
</p>
```

## Integration Examples

### With Headers
```jsx
<Header level={2}>
  Understanding <Italic>Machine Learning</Italic>
</Header>
```

### With Code Examples
```jsx
<p>
  The <Italic>{variableName}</Italic> variable stores the result:
</p>
<Code language="javascript">
  const {variableName} = processData(input);
</Code>
```

### In Documentation
```jsx
<div>
  <Header level={3}>Configuration</Header>
  <p>
    Edit the <Italic>config.json</Italic> file and update the 
    <Italic>database</Italic> section with your connection details.
  </p>
</div>
```

### With Bold for Contrast
```jsx
<p>
  <Bold>Important:</Bold> The <Italic>configuration file</Italic> must be 
  placed in the <Bold>correct directory</Bold> for the application to 
  find the <Italic>settings</Italic>.
</p>
```

## Advanced Usage

### Conditional Emphasis
```jsx
{isSpecialTerm && <Italic>{termName}</Italic>}
{!isSpecialTerm && termName}
```

### Multiple Formats
```jsx
<!-- Function to render italic text in multiple formats -->
function renderItalicText(text, format) {
  return <Italic syntax={format}>{text}</Italic>;
}
```

### Nested in Lists
```jsx
<List>
  <ListItem><Italic>Feature 1:</Italic> Description of the first feature</ListItem>
  <ListItem><Italic>Feature 2:</Italic> Description of the second feature</ListItem>
  <ListItem><Italic>Feature 3:</Italic> Description of the third feature</ListItem>
</List>
```

## Related Components

- **[Bold](./Bold.md)** - For strong emphasis
- **[Underline](./Underline.md)** - For underlined text
- **[Strikethrough](./Strikethrough.md)** - For struck-through text
- **[Text](./Text.md)** - For plain text content
- **[Inline](./Inline.md)** - For other inline formatting options
