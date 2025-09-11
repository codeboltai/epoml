# Paragraph Component

The Paragraph component creates paragraph-level text content with support for conditional rendering, loops, template variables, and content limiting. It's ideal for structured text blocks.

## Usage

```jsx
<Paragraph>This is a simple paragraph.</Paragraph>
<Paragraph if={showContent}>Conditional paragraph</Paragraph>
<Paragraph for="item in items">{item.description}</Paragraph>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `if` | `boolean \| string \| function` | - | Conditional rendering |
| `for` | `string` | - | Loop expression (e.g., "item in items") |
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `charLimit` | `number` | - | Character limit for truncation |
| `tokenLimit` | `number` | - | Token limit for truncation |
| `priority` | `number` | - | Truncation priority |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling |

## Output Formats

### Markdown (Default)
```jsx
<Paragraph>This is a paragraph of text.</Paragraph>
```

**Output:**
```markdown
This is a paragraph of text.

```

### HTML
```jsx
<Paragraph syntax="html">This is a paragraph of text.</Paragraph>
```

**Output:**
```html
<p>This is a paragraph of text.</p>
```

### Plain Text
```jsx
<Paragraph syntax="text">This is a paragraph of text.</Paragraph>
```

**Output:**
```text
This is a paragraph of text.

```

### Structured Formats (JSON, YAML, XML)
```jsx
<Paragraph syntax="json">This is a paragraph of text.</Paragraph>
```

**Output:**
```json
{
  "type": "paragraph",
  "content": "This is a paragraph of text."
}
```

## Examples

### Basic Paragraph
```jsx
<Paragraph>
  This is a simple paragraph containing some text content 
  that will be formatted according to the selected syntax.
</Paragraph>
```

### With Template Variables
```jsx
<Paragraph>
  Welcome {userName}, you have {messageCount} new messages 
  in your inbox. Your last login was on {lastLoginDate}.
</Paragraph>
```

### Conditional Rendering
```jsx
<Paragraph if={showWelcome}>
  Welcome to our application! We're glad you're here.
</Paragraph>

<Paragraph if="user.isAdmin">
  You have administrator privileges.
</Paragraph>
```

### Loop Rendering
```jsx
<Paragraph for="notification in notifications">
  {notification.type}: {notification.message}
</Paragraph>
```

### With Content Limits
```jsx
<Paragraph charLimit={100}>
  This is a very long paragraph that will be truncated at 100 characters 
  to prevent it from becoming too lengthy for the current context.
</Paragraph>

<Paragraph tokenLimit={15}>
  This paragraph contains many words that will be limited to fifteen tokens 
  to ensure concise communication.
</Paragraph>
```

### Custom Styling
```jsx
<Paragraph className="intro-text" speaker="ai">
  This paragraph has custom styling and speaker attribution.
</Paragraph>
```

## Whitespace Handling

```jsx
<!-- Filter whitespace (default) -->
<Paragraph whiteSpace="filter">
  This   paragraph   has   extra   spaces   that   will   be   filtered.
</Paragraph>
<!-- Output: "This paragraph has extra spaces that will be filtered." -->

<!-- Preserve whitespace -->
<Paragraph whiteSpace="pre">
  This   paragraph   preserves   all   whitespace   exactly.
</Paragraph>
<!-- Output: "This   paragraph   preserves   all   whitespace   exactly." -->

<!-- Trim whitespace -->
<Paragraph whiteSpace="trim">
    This paragraph trims leading and trailing whitespace.    
</Paragraph>
<!-- Output: "This paragraph trims leading and trailing whitespace." -->
```

## Advanced Features

### Conditional Logic
```jsx
<!-- Boolean condition -->
<Paragraph if={isLoggedIn}>
  You are currently logged in.
</Paragraph>

<!-- String expression -->
<Paragraph if="user.role === 'admin'">
  Administrative content here.
</Paragraph>

<!-- Function condition -->
<Paragraph if={(context) => context.user.permissions.includes('read')}>
  You have read permissions.
</Paragraph>
```

### Loop Iterations
```jsx
<!-- Simple array iteration -->
<Paragraph for="item in items">
  Item: {item}
</Paragraph>

<!-- Object property iteration -->
<Paragraph for="user in users">
  User {user.name} has email {user.email}
</Paragraph>

<!-- With index access -->
<Paragraph for="item in items">
  {$index + 1}. {item.title}
</Paragraph>
```

### Content Truncation
```jsx
<Paragraph 
  charLimit={200}
  writerOptions={{
    truncateMarker: "...",
    truncateDirection: "end"
  }}
>
  Very long content that exceeds the character limit...
</Paragraph>

<Paragraph 
  tokenLimit={20}
  priority={1}
  writerOptions={{
    truncateMarker: "[...continued]",
    truncateDirection: "middle"
  }}
>
  This paragraph has high priority content...
</Paragraph>
```

## Best Practices

1. **Semantic Usage**: Use Paragraph for actual paragraph-level content
2. **Template Variables**: Leverage template variables for dynamic content
3. **Conditional Rendering**: Use conditions to show relevant content only
4. **Content Limits**: Apply limits for better readability and performance
5. **Whitespace Control**: Choose appropriate whitespace handling for your use case

## Common Patterns

### Introduction Paragraphs
```jsx
<Paragraph className="intro">
  Welcome to {applicationName}, a powerful tool for {primaryFunction}. 
  This guide will help you get started with the basic features.
</Paragraph>
```

### Status Messages
```jsx
<Paragraph if="status === 'success'" className="success">
  Operation completed successfully!
</Paragraph>

<Paragraph if="status === 'error'" className="error">
  An error occurred: {errorMessage}
</Paragraph>
```

### Dynamic Lists
```jsx
<Paragraph for="item in todoItems" if="!item.completed">
  ⚪ {item.title} - Due: {item.dueDate}
</Paragraph>

<Paragraph for="item in todoItems" if="item.completed">
  ✅ {item.title} - Completed: {item.completedDate}
</Paragraph>
```

### Documentation Sections
```jsx
<Header level={3}>Configuration</Header>
<Paragraph>
  To configure {applicationName}, edit the {configFile} file in your 
  project directory. The configuration accepts the following parameters:
</Paragraph>

<Paragraph for="param in configParams">
  - **{param.name}**: {param.description} (Type: {param.type})
</Paragraph>
```

### Responsive Content
```jsx
<Paragraph charLimit={isMobile ? 100 : 300}>
  This paragraph adapts its length based on the device type, 
  showing more content on desktop and less on mobile devices.
</Paragraph>
```

## Integration Examples

### With Other Components
```jsx
<div>
  <Header level={2}>Product Description</Header>
  <Paragraph>
    <Bold>{productName}</Bold> is a revolutionary product that combines 
    <Italic>innovation</Italic> with <Italic>practicality</Italic>.
  </Paragraph>
  
  <Paragraph for="feature in features">
    🔹 <Bold>{feature.name}:</Bold> {feature.description}
  </Paragraph>
</div>
```

### In Documentation
```jsx
<Document title="API Documentation">
  <Paragraph>
    This document describes the API endpoints available in version {apiVersion}.
  </Paragraph>
  
  <Paragraph if="hasChanges">
    <Bold>Note:</Bold> This version includes breaking changes. 
    Please review the migration guide.
  </Paragraph>
</Document>
```

### Form Descriptions
```jsx
<form>
  <Paragraph className="form-description">
    Please fill out all required fields marked with an asterisk (*). 
    Your information will be used for {purpose} only.
  </Paragraph>
  
  <Paragraph if="hasErrors" className="error">
    Please correct the following errors before submitting:
  </Paragraph>
</form>
```

## Related Components

- **[Text](./Text.md)** - For simple text content without paragraph structure
- **[Bold](./Bold.md)** - For bold text within paragraphs
- **[Italic](./Italic.md)** - For italic text within paragraphs
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For paragraphs with captions
- **[Loop](./Loop.md)** - For dedicated loop functionality
