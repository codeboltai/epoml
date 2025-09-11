# Text Component

The Text component renders plain text content with support for multiple output formats. It's the fundamental component for displaying textual content.

## Usage

```jsx
<Text>Simple text content</Text>
<Text content="Text from prop" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | - | Text content (alternative to children) |
| `syntax` | `Syntax` | `'text'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling |

## Output Formats

### Plain Text (Default)
```jsx
<Text>Plain text content</Text>
```

**Output:**
```text
Plain text content
```

### Markdown
```jsx
<Text syntax="markdown">Plain text content</Text>
```

**Output:**
```markdown
Plain text content
```

### HTML
```jsx
<Text syntax="html">Plain text content</Text>
```

**Output:**
```html
<span>Plain text content</span>
```

### Structured Formats (JSON, YAML, XML)
```jsx
<Text syntax="json">Plain text content</Text>
```

**Output:**
```json
{"type": "text", "content": "Plain text content"}
```

```jsx
<Text syntax="xml">Plain text content</Text>
```

**Output:**
```xml
<text>Plain text content</text>
```

## Examples

### Basic Text
```jsx
<Text>This is simple text content.</Text>
```

### Using Content Prop
```jsx
<Text content="Text content from prop" />
```

### With Variables
```jsx
<Text content={dynamicTextContent} />
<Text>{textVariable}</Text>
```

### Custom Styling
```jsx
<Text className="custom-text" speaker="user">
  User-provided text content
</Text>
```

### Different Syntaxes
```jsx
<!-- For plain text output -->
<Text syntax="text">Plain content</Text>

<!-- For markdown documents -->
<Text syntax="markdown">Markdown content</Text>

<!-- For HTML pages -->
<Text syntax="html">HTML content</Text>
```

## Best Practices

1. **Simple Content**: Use Text for basic textual content without formatting
2. **Variable Content**: Ideal for dynamic text from variables or user input
3. **Consistent Syntax**: Use the same syntax throughout your document
4. **Semantic Usage**: Use more specific components (Bold, Italic) for formatted text
5. **Performance**: Text is lightweight and efficient for large amounts of content

## Common Patterns

### Dynamic Content
```jsx
<Text content={userName} />
<Text>{statusMessage}</Text>
<Text>Current time: {currentTime}</Text>
```

### Multi-line Text
```jsx
<Text>
  This is a longer piece of text that spans
  multiple lines and contains detailed information
  about the current topic being discussed.
</Text>
```

### Template Variables
```jsx
<!-- With template processing -->
<Text>Welcome {userName}, you have {messageCount} new messages.</Text>
```

### Conditional Text
```jsx
{showMessage && <Text>{messageContent}</Text>}
{isError ? <Text>Error occurred</Text> : <Text>Success</Text>}
```

### Lists and Arrays
```jsx
<List>
  {items.map(item => (
    <ListItem key={item.id}>
      <Text>{item.description}</Text>
    </ListItem>
  ))}
</List>
```

## Integration Examples

### Within Paragraphs
```jsx
<Paragraph>
  <Text>This paragraph contains </Text>
  <Bold>bold text</Bold>
  <Text> and </Text>
  <Italic>italic text</Italic>
  <Text> mixed together.</Text>
</Paragraph>
```

### In Headers
```jsx
<Header level={2}>
  <Text>Section: </Text>
  <Text>{sectionName}</Text>
</Header>
```

### With Code Examples
```jsx
<div>
  <Text>The following code demonstrates the concept:</Text>
  <Code language="javascript">
    console.log("Hello, World!");
  </Code>
  <Text>This will output the greeting to the console.</Text>
</div>
```

### In Tables
```jsx
<Table>
  <tr>
    <td><Text>Name</Text></td>
    <td><Text>{userName}</Text></td>
  </tr>
  <tr>
    <td><Text>Status</Text></td>
    <td><Text>{userStatus}</Text></td>
  </tr>
</Table>
```

### With Inline Components
```jsx
<div>
  <Text>Please review the </Text>
  <Inline>
    <Bold>important</Bold>
    <Text> document</Text>
  </Inline>
  <Text> before proceeding.</Text>
</div>
```

## Advanced Usage

### Whitespace Handling
```jsx
<!-- Filter whitespace (default) -->
<Text whiteSpace="filter">  Multiple   spaces   filtered  </Text>
<!-- Output: "Multiple spaces filtered" -->

<!-- Preserve whitespace -->
<Text whiteSpace="pre">  Multiple   spaces   preserved  </Text>
<!-- Output: "  Multiple   spaces   preserved  " -->

<!-- Trim whitespace -->
<Text whiteSpace="trim">  Leading and trailing removed  </Text>
<!-- Output: "Leading and trailing removed" -->
```

### Large Content
```jsx
<Text>
  {largeTextContent}
</Text>
```

### Escaped Content
```jsx
<Text>
  This text contains special characters: &lt; &gt; &amp;
</Text>
```

### With Writer Options
```jsx
<Text 
  syntax="html" 
  writerOptions={{ 
    escapeHtml: true 
  }}
>
  Content with <special> characters
</Text>
```

## Performance Considerations

1. **Lightweight**: Text component has minimal overhead
2. **No Formatting**: Use Text when no special formatting is needed
3. **Large Content**: Suitable for large amounts of text content
4. **Memory Efficient**: Minimal processing for plain text

## Related Components

- **[Paragraph](./Paragraph.md)** - For paragraph-level text content
- **[Bold](./Bold.md)** - For bold text formatting
- **[Italic](./Italic.md)** - For italic text formatting
- **[Inline](./Inline.md)** - For inline text containers
- **[Code](./Code.md)** - For code text content
