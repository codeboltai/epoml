# Header Component

The Header component creates headers at different levels (h1-h6) with support for multiple output formats.

## Usage

```jsx
<Header level={1}>Main Title</Header>
<Header level={2}>Section Title</Header>
<Header level={3}>Subsection Title</Header>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` | Header level (h1-h6) |
| `blankLine` | `boolean` | `false` | Add extra spacing before/after |
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `name` | `string` | - | Name for serialization |
| `type` | `string` | - | Type for serialization |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling |
| `charLimit` | `number` | - | Character limit |
| `tokenLimit` | `number` | - | Token limit |
| `priority` | `number` | - | Truncation priority |

## Output Formats

### Markdown (Default)
```jsx
<Header level={1}>Main Title</Header>
<Header level={2}>Section</Header>
<Header level={3}>Subsection</Header>
```

**Output:**
```markdown
# Main Title
## Section
### Subsection
```

### HTML
```jsx
<Header level={1} syntax="html">Main Title</Header>
<Header level={2} syntax="html">Section</Header>
```

**Output:**
```html
<h1>Main Title</h1>
<h2>Section</h2>
```

### Plain Text
```jsx
<Header level={1} syntax="text">Main Title</Header>
<Header level={2} syntax="text">Section</Header>
<Header level={3} syntax="text">Subsection</Header>
```

**Output:**
```text
Main Title
==========

Section
-------

### Subsection ###
```

### JSON
```jsx
<Header level={2} syntax="json" name="title">Section Title</Header>
```

**Output:**
```json
{
  "title": "Section Title",
  "level": 2
}
```

### YAML
```jsx
<Header level={2} syntax="yaml" name="title">Section Title</Header>
```

**Output:**
```yaml
title: "Section Title"
level: 2
```

### XML
```jsx
<Header level={2} syntax="xml" name="title" type="section">Section Title</Header>
```

**Output:**
```xml
<title level="2" type="section">Section Title</title>
```

## Examples

### Basic Headers
```jsx
<div>
  <Header level={1}>Document Title</Header>
  <Header level={2}>Chapter 1: Introduction</Header>
  <Header level={3}>1.1 Overview</Header>
  <Header level={4}>1.1.1 Background</Header>
</div>
```

### With Blank Lines
```jsx
<Header level={1} blankLine={true}>Main Title</Header>
<p>This header will have extra spacing above and below.</p>
```

### With Variables
```jsx
<Header level={headerLevel}>{documentTitle}</Header>
<Header level={2}>{chapterTitle}</Header>
```

**Usage:**
```typescript
const template = `
  <Header level={headerLevel}>{documentTitle}</Header>
  <Header level={2}>{chapterTitle}</Header>
`;

const result = await epomlparse(template, {
  headerLevel: 1,
  documentTitle: "User Guide",
  chapterTitle: "Getting Started"
});
```

### Custom Styling
```jsx
<Header 
  level={1} 
  className="main-title"
  speaker="ai"
  name="document-title"
  type="heading"
>
  AI-Generated Content
</Header>
```

### Content Limits
```jsx
<Header 
  level={2} 
  charLimit={50}
  tokenLimit={10}
  priority={1}
>
  This is a very long header that might need to be truncated if it exceeds the specified limits
</Header>
```

### Different Output Formats
```jsx
<!-- For documentation -->
<Header level={2} syntax="markdown">API Reference</Header>

<!-- For web display -->
<Header level={2} syntax="html">API Reference</Header>

<!-- For plain text reports -->
<Header level={2} syntax="text">API Reference</Header>

<!-- For structured data -->
<Header level={2} syntax="json" name="section">API Reference</Header>
```

## Best Practices

1. **Hierarchical Structure**: Use header levels in order (h1, then h2, then h3, etc.)
2. **Consistent Formatting**: Use the same syntax throughout your document
3. **Meaningful Titles**: Write descriptive, concise header text
4. **Variable Usage**: Use variables for dynamic content like chapter numbers
5. **Accessibility**: Consider how headers will be read by screen readers
6. **SEO**: For HTML output, proper header hierarchy improves SEO

## Common Patterns

### Document Structure
```jsx
<div>
  <Header level={1}>{documentTitle}</Header>
  
  <Header level={2}>Table of Contents</Header>
  <ul>
    <li>Introduction</li>
    <li>Features</li>
    <li>Installation</li>
  </ul>
  
  <Header level={2}>Introduction</Header>
  <p>Welcome to our documentation...</p>
  
  <Header level={3}>What is {productName}?</Header>
  <p>{productName} is a powerful tool...</p>
</div>
```

### Numbered Sections
```jsx
<Header level={2}>{chapterNumber}. {chapterTitle}</Header>
<Header level={3}>{chapterNumber}.{sectionNumber} {sectionTitle}</Header>
```

### Conditional Headers
```jsx
{showIntro && <Header level={2}>Introduction</Header>}
{showAdvanced && <Header level={2}>Advanced Topics</Header>}
```

## Related Components

- **[Bold](./Bold.md)** - For emphasizing text within headers
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For content with headers as captions
- **[Code](./Code.md)** - For code examples in documentation sections