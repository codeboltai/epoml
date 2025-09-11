# ListItem Component

The ListItem component represents individual items within lists, providing fine-grained control over list item formatting across multiple output formats.

## Usage

```jsx
<ListItem>Individual list item</ListItem>
<ul>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</ul>
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
<ListItem>Item content</ListItem>
```

**Output:**
```markdown
- Item content
```

### HTML
```jsx
<ListItem syntax="html">Item content</ListItem>
```

**Output:**
```html
<li>Item content</li>
```

### Plain Text
```jsx
<ListItem syntax="text">Item content</ListItem>
```

**Output:**
```text
- Item content
```

### Structured Formats (JSON, YAML, XML)
```jsx
<ListItem syntax="json">Item content</ListItem>
```

**Output:**
```json
{"type": "list-item", "content": "Item content"}
```

```jsx
<ListItem syntax="xml">Item content</ListItem>
```

**Output:**
```xml
<list-item>Item content</list-item>
```

## Examples

### Basic List Items
```jsx
<ListItem>First item in the list</ListItem>
<ListItem>Second item in the list</ListItem>
<ListItem>Third item in the list</ListItem>
```

### With Formatting
```jsx
<ListItem>
  <Bold>Important item:</Bold> This item contains formatted content
</ListItem>
<ListItem>
  <Italic>Note:</Italic> This is an additional note
</ListItem>
```

### With Variables
```jsx
<ListItem>{itemTitle}: {itemDescription}</ListItem>
<ListItem>Status: {currentStatus}</ListItem>
```

### Custom Styling
```jsx
<ListItem className="priority-high" speaker="system">
  High priority task
</ListItem>
<ListItem className="completed" speaker="user">
  Completed task
</ListItem>
```

## Best Practices

1. **Consistent Content**: Keep list items at similar levels of detail
2. **Appropriate Length**: Keep items concise but informative
3. **Logical Order**: Arrange items in logical sequence
4. **Proper Nesting**: Use appropriate container elements
5. **Consistent Formatting**: Use the same syntax throughout lists

## Common Patterns

### Task Lists
```jsx
<ListItem>✅ Complete project setup</ListItem>
<ListItem>🔄 Implement user authentication</ListItem>
<ListItem>⏳ Deploy to production</ListItem>
<ListItem>📝 Write documentation</ListItem>
```

### Feature Lists
```jsx
<ListItem>
  <Bold>Real-time Updates:</Bold> Get instant notifications
</ListItem>
<ListItem>
  <Bold>Secure Storage:</Bold> Your data is encrypted and safe
</ListItem>
<ListItem>
  <Bold>Cross-platform:</Bold> Works on all devices
</ListItem>
```

### Menu Items
```jsx
<ListItem>Home</ListItem>
<ListItem>Products</ListItem>
<ListItem>Services</ListItem>
<ListItem>About</ListItem>
<ListItem>Contact</ListItem>
```

### Instruction Steps
```jsx
<ListItem>Open the application</ListItem>
<ListItem>Navigate to Settings</ListItem>
<ListItem>Click on Account</ListItem>
<ListItem>Update your profile information</ListItem>
<ListItem>Save changes</ListItem>
```

### Data Points
```jsx
<ListItem>Name: {userName}</ListItem>
<ListItem>Email: {userEmail}</ListItem>
<ListItem>Role: {userRole}</ListItem>
<ListItem>Last Login: {lastLogin}</ListItem>
```

## Integration Examples

### Within HTML Lists
```jsx
<ul>
  <ListItem>First structured item</ListItem>
  <ListItem>Second structured item</ListItem>
  <ListItem>Third structured item</ListItem>
</ul>
```

### With Complex Content
```jsx
<ListItem>
  <Header level={4}>Section Title</Header>
  <Paragraph>
    This list item contains multiple elements including 
    headers and paragraphs for complex content.
  </Paragraph>
</ListItem>
```

### Dynamic Generation
```jsx
{items.map(item => (
  <ListItem key={item.id}>
    {item.title}: {item.description}
  </ListItem>
))}
```

### Conditional Items
```jsx
{showCompleted && <ListItem>✅ Task completed</ListItem>}
{showPending && <ListItem>⏳ Task pending</ListItem>}
{showError && <ListItem>❌ Task failed</ListItem>}
```

### Nested Content
```jsx
<ListItem>
  <Bold>Main Category</Bold>
  <List>
    <ListItem>Subcategory 1</ListItem>
    <ListItem>Subcategory 2</ListItem>
    <ListItem>Subcategory 3</ListItem>
  </List>
</ListItem>
```

## Advanced Usage

### Priority-based Items
```jsx
<ListItem className="priority-critical">
  🔴 Critical: System maintenance required
</ListItem>
<ListItem className="priority-high">
  🟡 High: Update security certificates
</ListItem>
<ListItem className="priority-normal">
  🟢 Normal: Review quarterly reports
</ListItem>
```

### Status Indicators
```jsx
<ListItem>
  {status === 'completed' ? '✅' : '⏳'} {taskName}
</ListItem>
```

### Interactive Items
```jsx
<ListItem>
  <Button onClick={handleClick}>Action Item</Button>
</ListItem>
```

### Multi-format Support
```jsx
<!-- For different output formats -->
<ListItem syntax="markdown">Markdown list item</ListItem>
<ListItem syntax="html">HTML list item</ListItem>
<ListItem syntax="text">Plain text list item</ListItem>
```

## Accessibility Considerations

1. **Semantic Structure**: Use proper list containers (ul, ol)
2. **Screen Readers**: Ensure content is descriptive
3. **Visual Hierarchy**: Use consistent formatting
4. **Navigation**: Support keyboard navigation for interactive items

## Performance Tips

1. **Efficient Rendering**: Avoid unnecessary re-renders
2. **Content Size**: Keep item content reasonable
3. **Batch Updates**: Group related changes
4. **Memory Usage**: Be mindful with large lists

## Related Components

- **[List](./List.md)** - For containing multiple list items
- **[Task](./Task.md)** - For task-specific list items
- **[Bold](./Bold.md)** - For emphasizing item content
- **[Italic](./Italic.md)** - For styling item content
- **[Paragraph](./Paragraph.md)** - For longer item descriptions
