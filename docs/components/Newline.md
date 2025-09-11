# Newline Component

The Newline component inserts line breaks and spacing control across multiple output formats, useful for precise formatting and layout control.

## Usage

```jsx
<Newline />
<Newline count={3} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `1` | Number of newlines to insert |
| `syntax` | `Syntax` | `'text'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |

## Output Formats

### Plain Text (Default)
```jsx
<Newline count={2} />
```

**Output:**
```text


```

### Markdown
```jsx
<Newline syntax="markdown" count={2} />
```

**Output:**
```markdown


```

### HTML
```jsx
<Newline syntax="html" count={3} />
```

**Output:**
```html
<br><br><br>
```

### Structured Formats (JSON, YAML, XML)
```jsx
<Newline syntax="json" count={2} />
```

**Output:**
```json
{"type": "newline", "count": 2}
```

```jsx
<Newline syntax="xml" count={2} />
```

**Output:**
```xml
<newline count="2" />
```

## Examples

### Single Line Break
```jsx
<p>First line</p>
<Newline />
<p>Second line</p>
```

### Multiple Line Breaks
```jsx
<Header level={2}>Section Title</Header>
<Newline count={3} />
<Paragraph>Content with extra spacing above</Paragraph>
```

### Spacing Between Elements
```jsx
<div>
  <Bold>Important Notice</Bold>
  <Newline count={2} />
  <Italic>Please read carefully</Italic>
  <Newline />
  <Text>Additional information below</Text>
</div>
```

### Different Syntaxes
```jsx
<!-- For text documents -->
<Newline syntax="text" count={2} />

<!-- For HTML pages -->
<Newline syntax="html" count={1} />

<!-- For markdown documents -->
<Newline syntax="markdown" count={3} />
```

## Best Practices

1. **Consistent Spacing**: Use consistent line break counts throughout documents
2. **Semantic Spacing**: Use newlines for visual separation, not structure
3. **Format-Appropriate**: Consider how newlines render in different output formats
4. **Minimal Usage**: Use sparingly; prefer semantic components for structure
5. **Accessibility**: Ensure excessive newlines don't confuse screen readers

## Common Patterns

### Section Spacing
```jsx
<div>
  <Header level={1}>Main Title</Header>
  <Newline count={2} />
  
  <Header level={2}>Introduction</Header>
  <Paragraph>Introduction content here.</Paragraph>
  <Newline count={3} />
  
  <Header level={2}>Details</Header>
  <Paragraph>Detailed content here.</Paragraph>
</div>
```

### List Spacing
```jsx
<div>
  <Header level={3}>Project Tasks</Header>
  <Newline />
  
  <List ordered>
    <ListItem>Task 1: Setup development environment</ListItem>
    <ListItem>Task 2: Create project structure</ListItem>
    <ListItem>Task 3: Implement core features</ListItem>
  </List>
  
  <Newline count={2} />
  <Paragraph>Additional notes below the list.</Paragraph>
</div>
```

### Code Block Spacing
```jsx
<div>
  <Paragraph>Here's an example of the function:</Paragraph>
  <Newline />
  
  <Code language="javascript">
    function calculateTotal(items) {
      return items.reduce((sum, item) => sum + item.price, 0);
    }
  </Code>
  
  <Newline count={2} />
  <Paragraph>This function calculates the total price of all items.</Paragraph>
</div>
```

### Table Spacing
```jsx
<div>
  <Header level={3}>User Data</Header>
  <Newline />
  
  <Table>
    <tr><td>Name</td><td>Email</td><td>Role</td></tr>
    <tr><td>Alice</td><td>alice@example.com</td><td>Admin</td></tr>
    <tr><td>Bob</td><td>bob@example.com</td><td>User</td></tr>
  </Table>
  
  <Newline count={3} />
  <Paragraph>End of user data section.</Paragraph>
</div>
```

### Conversation Spacing
```jsx
<div>
  <HumanMessage name="User">How do I reset my password?</HumanMessage>
  <Newline />
  
  <AiMessage model="assistant">I can help you reset your password. Please follow these steps:</AiMessage>
  <Newline />
  
  <List ordered>
    <ListItem>Go to the login page</ListItem>
    <ListItem>Click "Forgot Password"</ListItem>
    <ListItem>Enter your email address</ListItem>
  </List>
</div>
```

## Integration Examples

### Document Structure
```jsx
<Document title="Technical Report">
  <Header level={1}>Executive Summary</Header>
  <Newline count={2} />
  
  <Paragraph>
    This report presents the findings of our technical analysis...
  </Paragraph>
  
  <Newline count={4} />
  
  <Header level={1}>Technical Details</Header>
  <Newline />
  
  <Paragraph>
    The technical implementation involves...
  </Paragraph>
</Document>
```

### Form Layout
```jsx
<div className="form-section">
  <Header level={3}>Personal Information</Header>
  <Newline />
  
  <Paragraph>Name: {userName}</Paragraph>
  <Paragraph>Email: {userEmail}</Paragraph>
  <Paragraph>Phone: {userPhone}</Paragraph>
  
  <Newline count={3} />
  
  <Header level={3}>Preferences</Header>
  <Newline />
  
  <Paragraph>Newsletter: {newsletterPreference}</Paragraph>
  <Paragraph>Notifications: {notificationPreference}</Paragraph>
</div>
```

### Content Blocks
```jsx
<div>
  <CaptionedParagraph caption="Note">
    This is an important notice about system maintenance.
  </CaptionedParagraph>
  
  <Newline count={2} />
  
  <Bold>Scheduled Maintenance Window:</Bold>
  <Newline />
  <Text>Sunday, 2:00 AM - 4:00 AM EST</Text>
  
  <Newline count={3} />
  
  <Italic>We apologize for any inconvenience.</Italic>
</div>
```

## Advanced Usage

### Dynamic Line Spacing
```jsx
<Newline count={isDense ? 1 : 3} />
```

### Conditional Spacing
```jsx
{needsExtraSpace && <Newline count={2} />}
```

### Template-based Spacing
```jsx
<Newline count={spacingConfig.sectionBreak} />
```

### Format-specific Spacing
```jsx
<!-- Different spacing for different formats -->
<Newline syntax="html" count={1} />      <!-- Single <br> for HTML -->
<Newline syntax="text" count={2} />      <!-- Double newline for text -->
<Newline syntax="markdown" count={2} />  <!-- Paragraph break for markdown -->
```

### Custom Styling
```jsx
<Newline 
  count={2} 
  className="section-break" 
  speaker="layout-system" 
/>
```

## Accessibility Considerations

1. **Screen Readers**: Excessive newlines may create confusing pauses
2. **Visual Layout**: Consider how line breaks affect visual hierarchy
3. **Content Flow**: Ensure newlines don't disrupt logical content flow
4. **Semantic Meaning**: Use semantic components for structural separation

## Use Cases

### Document Formatting
- Section spacing in reports
- Paragraph separation
- Title spacing
- Content block separation

### Layout Control
- Precise spacing control
- Visual hierarchy enhancement
- Content grouping
- Reading flow improvement

### Template Formatting
- Consistent spacing patterns
- Dynamic layout adjustment
- Format-specific spacing
- Responsive spacing control

## Performance Considerations

1. **Minimal Impact**: Newline components have very low overhead
2. **Rendering**: Different output formats handle newlines differently
3. **Memory**: Multiple newlines use minimal memory
4. **Processing**: Fast to render across all formats

## Related Components

- **[Text](./Text.md)** - For text content that may need spacing
- **[Paragraph](./Paragraph.md)** - For paragraph-level content separation
- **[Header](./Header.md)** - For section headers that may need spacing
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For content blocks with natural spacing
- **[Document](./Document.md)** - For overall document structure and spacing
