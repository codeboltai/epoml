# List Component

The List component creates ordered (numbered) or unordered (bulleted) lists with support for custom starting numbers and multiple output formats.

## Usage

```jsx
<List>
  Item 1
  Item 2  
  Item 3
</List>

<List ordered start={5}>
  Fifth item
  Sixth item
  Seventh item
</List>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ordered` | `boolean` | `false` | Whether to use numbered (ordered) list |
| `start` | `number` | - | Start number for ordered lists |
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling |

## Output Formats

### Markdown (Default)
```jsx
<List>
  First item
  Second item
  Third item
</List>
```

**Output:**
```markdown
- First item
- Second item  
- Third item
```

### Ordered List (Markdown)
```jsx
<List ordered>
  First item
  Second item
  Third item
</List>
```

**Output:**
```markdown
1. First item
2. Second item
3. Third item
```

### HTML
```jsx
<List syntax="html">
  First item
  Second item
  Third item
</List>
```

**Output:**
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

### Ordered HTML
```jsx
<List syntax="html" ordered start={5}>
  Fifth item
  Sixth item
</List>
```

**Output:**
```html
<ol start="5">
  <li>Fifth item</li>
  <li>Sixth item</li>
</ol>
```

### Plain Text
```jsx
<List syntax="text" ordered>
  First item
  Second item
  Third item
</List>
```

**Output:**
```text
1. First item
2. Second item
3. Third item
```

### Structured Formats (JSON, YAML, XML)
```jsx
<List syntax="json" ordered>
  First item
  Second item
</List>
```

**Output:**
```json
{
  "type": "ordered-list",
  "items": ["First item", "Second item"],
  "ordered": true,
  "start": null
}
```

## Examples

### Basic Unordered List
```jsx
<List>
  Apple
  Banana
  Orange
  Grape
</List>
```

### Basic Ordered List
```jsx
<List ordered>
  Prepare ingredients
  Mix dry ingredients
  Add wet ingredients
  Bake for 30 minutes
</List>
```

### Custom Start Number
```jsx
<List ordered start={10}>
  Step 10: Review results
  Step 11: Make adjustments
  Step 12: Finalize
</List>
```

### With Variables
```jsx
<List>
  {items.map(item => item.name).join('\n')}
</List>
```

### Different Syntaxes
```jsx
<!-- For markdown documents -->
<List syntax="markdown">
  Markdown item 1
  Markdown item 2
</List>

<!-- For HTML pages -->
<List syntax="html" ordered>
  HTML item 1
  HTML item 2
</List>

<!-- For plain text -->
<List syntax="text">
  Text item 1
  Text item 2
</List>
```

## Best Practices

1. **Appropriate Content**: Use lists for items that are actually related
2. **Consistent Formatting**: Use the same syntax throughout your document
3. **Order Matters**: Use ordered lists when sequence is important
4. **Concise Items**: Keep list items concise and focused
5. **Logical Grouping**: Group related items together

## Common Patterns

### Feature Lists
```jsx
<Header level={3}>Key Features</Header>
<List>
  Easy to use interface
  Fast performance
  Secure data handling
  Cross-platform compatibility
  24/7 customer support
</List>
```

### Step-by-Step Instructions
```jsx
<Header level={3}>Installation Steps</Header>
<List ordered>
  Download the installer
  Run the installer as administrator
  Follow the setup wizard
  Restart your computer
  Launch the application
</List>
```

### Requirements Lists
```jsx
<Header level={3}>System Requirements</Header>
<List>
  Operating System: Windows 10 or later
  RAM: 8GB minimum, 16GB recommended
  Storage: 500MB available space
  Network: Internet connection required
</List>
```

### Navigation Lists
```jsx
<Header level={3}>Table of Contents</Header>
<List ordered>
  Introduction
  Getting Started
  Advanced Features
  Troubleshooting
  FAQ
</List>
```

### Checklist Items
```jsx
<Header level={3}>Pre-flight Checklist</Header>
<List>
  ✅ Verify user permissions
  ✅ Check database connection
  ✅ Validate input data
  ⚪ Run test suite
  ⚪ Deploy to staging
</List>
```

## Integration Examples

### With Other Components
```jsx
<div>
  <Header level={2}>Project Tasks</Header>
  <Paragraph>
    The following tasks need to be completed for this project:
  </Paragraph>
  
  <List ordered>
    <Bold>Research phase</Bold> - Gather requirements
    <Bold>Design phase</Bold> - Create wireframes and mockups
    <Bold>Development phase</Bold> - Build the application
    <Bold>Testing phase</Bold> - QA and user testing
    <Bold>Deployment phase</Bold> - Launch to production
  </List>
</div>
```

### With Code Examples
```jsx
<div>
  <Header level={3}>API Endpoints</Header>
  <List>
    GET /api/users - Retrieve all users
    POST /api/users - Create new user
    PUT /api/users/{id} - Update user
    DELETE /api/users/{id} - Delete user
  </List>
  
  <Paragraph>Example usage:</Paragraph>
  <Code language="bash">
    curl -X GET https://api.example.com/api/users
  </Code>
</div>
```

### Nested Content
```jsx
<List>
  Frontend Development
    - React components
    - State management
    - API integration
  Backend Development
    - Database design
    - API development
    - Authentication
  Testing
    - Unit tests
    - Integration tests
    - End-to-end tests
</List>
```

### Multi-Level Lists
```jsx
<List ordered>
  Phase 1: Planning
  Phase 2: Development
  Phase 3: Testing
</List>

<Header level={4}>Phase 1 Details:</Header>
<List>
  Requirements gathering
  Technical specification
  Resource allocation
  Timeline planning
</List>
```

## Advanced Usage

### Dynamic Lists
```jsx
<List ordered={isOrdered} start={startNumber}>
  {dynamicItems.join('\n')}
</List>
```

### Conditional List Types
```jsx
{isPrioritized ? (
  <List ordered>
    High priority item
    Medium priority item
    Low priority item
  </List>
) : (
  <List>
    Item A
    Item B
    Item C
  </List>
)}
```

### Custom Styling
```jsx
<List className="custom-list" speaker="ai">
  AI-generated recommendation 1
  AI-generated recommendation 2
  AI-generated recommendation 3
</List>
```

### With Template Variables
```jsx
<List ordered>
  Step 1: {firstStep}
  Step 2: {secondStep}
  Step 3: {thirdStep}
</List>
```

## Performance Considerations

1. **Item Count**: Consider pagination for very long lists
2. **Content Size**: Keep list items reasonably sized
3. **Rendering**: Use appropriate syntax for your target format
4. **Memory**: Be mindful of memory usage with large lists

## Related Components

- **[ListItem](./ListItem.md)** - For individual list items with more control
- **[Table](./Table.md)** - For tabular data that doesn't fit list format
- **[Paragraph](./Paragraph.md)** - For paragraph-level content
- **[Header](./Header.md)** - For list section headings
- **[Task](./Task.md)** - For task-specific list items
