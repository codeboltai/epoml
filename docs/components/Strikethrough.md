# Strikethrough Component

The Strikethrough component renders text with strikethrough formatting to indicate deleted, outdated, or incorrect content across multiple output formats.

## Usage

```jsx
<Strikethrough>Deleted text</Strikethrough>
<p>This text is <Strikethrough>incorrect</Strikethrough> updated.</p>
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
<Strikethrough>Deleted text</Strikethrough>
```

**Output:**
```markdown
~~Deleted text~~
```

### HTML
```jsx
<Strikethrough syntax="html">Deleted text</Strikethrough>
```

**Output:**
```html
<del>Deleted text</del>
```

### Plain Text
```jsx
<Strikethrough syntax="text">Deleted text</Strikethrough>
```

**Output:**
```text
Deleted text
```

### Structured Formats (JSON, YAML, XML)
```jsx
<Strikethrough syntax="json">Deleted text</Strikethrough>
```

**Output:**
```json
{"type": "strikethrough", "text": "Deleted text"}
```

```jsx
<Strikethrough syntax="xml">Deleted text</Strikethrough>
```

**Output:**
```xml
<strikethrough>Deleted text</strikethrough>
```

## Examples

### Basic Strikethrough
```jsx
<p>The meeting is scheduled for <Strikethrough>Tuesday</Strikethrough> Wednesday.</p>
<p>Price: <Strikethrough>$99.99</Strikethrough> $79.99</p>
```

### Version Updates
```jsx
<p>
  <Strikethrough>Old feature removed in v2.0</Strikethrough>
  New feature added in v2.0
</p>
```

### Corrections
```jsx
<p>
  The capital of <Strikethrough>Australia</Strikethrough> France is 
  <Strikethrough>Sydney</Strikethrough> Paris.
</p>
```

### Task Updates
```jsx
<Strikethrough>TODO: Implement user authentication</Strikethrough>
✅ DONE: User authentication implemented
```

### With Variables
```jsx
<p>
  <Strikethrough>{oldValue}</Strikethrough> {newValue}
</p>
```

## Best Practices

1. **Clear Intent**: Use strikethrough to clearly indicate removed or incorrect content
2. **Provide Alternatives**: Always show what replaces strikethrough content
3. **Consistent Usage**: Use consistently throughout documents
4. **Readability**: Don't overuse strikethrough as it reduces readability
5. **Context**: Provide context for why content is struck through

## Common Patterns

### Price Updates
```jsx
<div>
  <Header level={3}>Special Offer</Header>
  <p>
    Regular Price: <Strikethrough>${regularPrice}</Strikethrough>
  </p>
  <p>
    <Bold>Sale Price: ${salePrice}</Bold>
  </p>
</div>
```

### Content Revisions
```jsx
<div>
  <Paragraph>
    <Strikethrough>The old policy required manual approval.</Strikethrough>
    The new policy allows automatic approval for requests under $1000.
  </Paragraph>
</div>
```

### Version Changes
```jsx
<List>
  <ListItem>
    <Strikethrough>v1.0: Basic functionality only</Strikethrough>
  </ListItem>
  <ListItem>
    v2.0: Enhanced features with advanced options
  </ListItem>
</List>
```

### Deadline Changes
```jsx
<p>
  Project deadline: <Strikethrough>{originalDeadline}</Strikethrough> {newDeadline}
</p>
```

### Status Updates
```jsx
<div>
  <Strikethrough>Status: In Progress</Strikethrough>
  <Bold>Status: Completed</Bold>
</div>
```

## Integration Examples

### With Other Formatting
```jsx
<p>
  <Bold>Important:</Bold> The <Strikethrough>old</Strikethrough> 
  <Italic>new</Italic> process is now in effect.
</p>
```

### In Tables
```jsx
<Table>
  <tr>
    <td>Feature</td>
    <td>Status</td>
  </tr>
  <tr>
    <td><Strikethrough>Old Feature A</Strikethrough></td>
    <td><Strikethrough>Deprecated</Strikethrough></td>
  </tr>
  <tr>
    <td>New Feature B</td>
    <td>Active</td>
  </tr>
</Table>
```

### Code Changes
```jsx
<div>
  <Header level={4}>Code Update</Header>
  <Code language="javascript">
    <Strikethrough>// Old implementation</Strikethrough>
    // New implementation
    function updateUser(data) {
      // Enhanced logic here
    }
  </Code>
</div>
```

### Documentation Updates
```jsx
<div>
  <Header level={3}>API Changes</Header>
  <p>
    <Strikethrough>GET /api/v1/users</Strikethrough> - Deprecated
  </p>
  <p>
    GET /api/v2/users - Use this endpoint instead
  </p>
</div>
```

### Changelog Entries
```jsx
<div>
  <Header level={3}>Changelog v2.1.0</Header>
  <List>
    <ListItem>
      Added: New user dashboard
    </ListItem>
    <ListItem>
      <Strikethrough>Removed: Legacy admin panel</Strikethrough>
    </ListItem>
    <ListItem>
      Fixed: Login redirect issue
    </ListItem>
  </List>
</div>
```

## Advanced Usage

### Conditional Strikethrough
```jsx
{isDeprecated && (
  <Strikethrough>{featureName}</Strikethrough>
)}
{!isDeprecated && featureName}
```

### Custom Styling
```jsx
<Strikethrough className="deprecated-content" speaker="system">
  This feature is no longer supported
</Strikethrough>
```

### Multiple Formats
```jsx
<!-- Different output formats -->
<Strikethrough syntax="markdown">Markdown strikethrough</Strikethrough>
<Strikethrough syntax="html">HTML strikethrough</Strikethrough>
<Strikethrough syntax="text">Plain text (no formatting)</Strikethrough>
```

### Template Variables
```jsx
<Strikethrough>
  Old {itemType}: {oldValue}
</Strikethrough>
New {itemType}: {newValue}
```

## Accessibility Considerations

1. **Screen Readers**: Consider how strikethrough content is announced
2. **Visual Clarity**: Ensure sufficient contrast even with strikethrough
3. **Alternative Text**: Provide context for visual changes
4. **Semantic Meaning**: Use appropriate semantic markup when possible

## Use Cases

### Content Management
- Showing editorial changes
- Tracking content revisions
- Indicating deprecated information

### E-commerce
- Displaying price reductions
- Showing out-of-stock items
- Highlighting sale information

### Documentation
- Version change tracking
- API deprecation notices
- Feature removal notifications

### Project Management
- Completed task indication
- Changed requirements
- Updated deadlines

## Related Components

- **[Bold](./Bold.md)** - For emphasizing new or important content
- **[Italic](./Italic.md)** - For alternative emphasis styles
- **[Underline](./Underline.md)** - For additional text decoration
- **[Text](./Text.md)** - For plain text content
- **[Inline](./Inline.md)** - For other inline formatting options
