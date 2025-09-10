# Built-in Components

EPOML comes with a rich set of built-in components for common use cases. Each component supports multiple output formats and can be customized with various props.

## Available Components

- **[Header](./Header.md)** - Create headers at different levels (h1-h6)
- **[Bold](./Bold.md)** - Emphasize text with bold formatting
- **[Code](./Code.md)** - Display code blocks with syntax highlighting
- **[Audio](./Audio.md)** - Include audio references and transcriptions
- **[FileTree](./FileTree.md)** - Display directory structures as trees
- **[CaptionedParagraph](./CaptionedParagraph.md)** - Paragraphs with customizable captions
- **[Inline](./Inline.md)** - Inline formatting and content

## Common Props

All built-in components share a common set of base props:

### Base Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `syntax` | `Syntax` | `'markdown'` | Output format (markdown, html, json, yaml, xml, text) |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution (human, ai, system) |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling (pre, filter, trim) |
| `children` | `(Component \| string)[]` | `[]` | Child content |

### Layout Props

Components that support layout options also include:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `blankLine` | `boolean` | `false` | Add extra spacing before/after content |
| `name` | `string` | - | Name for serialization |
| `type` | `string` | - | Type for serialization |

### Content Limit Props

Some components support content limiting:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `charLimit` | `number` | - | Character limit before truncation |
| `tokenLimit` | `number` | - | Token limit before truncation |
| `priority` | `number` | - | Priority for global truncation |

## Syntax Support

All components support multiple output formats:

### Markdown (Default)
```jsx
<Header level={2}>My Header</Header>
// Output: ## My Header
```

### HTML
```jsx
<Header level={2} syntax="html">My Header</Header>
// Output: <h2>My Header</h2>
```

### Plain Text
```jsx
<Header level={2} syntax="text">My Header</Header>
// Output: My Header
//         ---------
```

### Structured Formats
```jsx
<Header level={2} syntax="json" name="title">My Header</Header>
// Output: { "title": "My Header", "level": 2 }
```

## Usage Examples

### Basic Usage
```jsx
<Header level={1}>Document Title</Header>
<p>This is a paragraph with <Bold>bold text</Bold> inside.</p>
<Code language="javascript">console.log("Hello, World!");</Code>
```

### With Variables
```jsx
<Header level={headerLevel}>{documentTitle}</Header>
<p>Welcome, <Bold>{username}</Bold>!</p>
<FileTree directory={projectPath} />
```

### Custom Styling
```jsx
<Header level={1} className="main-title" speaker="ai">
  AI Generated Content
</Header>

<Code 
  language="python" 
  className="code-block"
  filename="example.py"
  lineNumbers={true}
>
  print("Hello from Python!")
</Code>
```

### Multiple Output Formats
```jsx
<!-- Markdown output -->
<Bold syntax="markdown">Important Note</Bold>

<!-- HTML output -->
<Bold syntax="html">Important Note</Bold>

<!-- Plain text output -->
<Bold syntax="text">Important Note</Bold>
```

## Best Practices

1. **Use Semantic Components**: Choose the most appropriate component for your content type
2. **Consistent Syntax**: Use the same syntax throughout a template for consistency
3. **Proper Nesting**: Follow HTML-like nesting rules for better structure
4. **Variable Naming**: Use descriptive variable names in props
5. **Error Handling**: Always handle cases where variables might be undefined
6. **Performance**: Use content limits for large datasets
7. **Accessibility**: Consider accessibility when choosing syntax and styling

## Component Comparison

| Component | Primary Use | Key Features | Output Formats |
|-----------|-------------|--------------|----------------|
| Header | Section titles | 6 levels, auto-formatting | All |
| Bold | Text emphasis | Simple bold formatting | All |
| Code | Code display | Syntax highlighting, line numbers | All |
| Audio | Media inclusion | Transcription, metadata | All |
| FileTree | Directory structure | Tree visualization | Text-based |
| CaptionedParagraph | Labeled content | Flexible caption styles | All |
| Inline | Inline formatting | Minimal wrapping | All |

## Next Steps

- Explore individual component documentation for detailed usage
- Learn about [Custom Components](../custom-components.md) to create your own
- Check out [Examples](../examples/) for real-world usage patterns