# Underline Component

The Underline component renders text with underline formatting to emphasize important content or indicate special meanings across multiple output formats.

## Usage

```jsx
<Underline>Important text</Underline>
<p>This text has <Underline>underlined words</Underline> for emphasis.</p>
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
<Underline>Underlined text</Underline>
```

**Output:**
```markdown
<u>Underlined text</u>
```

*Note: Markdown doesn't have native underline syntax, so HTML tags are used.*

### HTML
```jsx
<Underline syntax="html">Underlined text</Underline>
```

**Output:**
```html
<u>Underlined text</u>
```

### Plain Text
```jsx
<Underline syntax="text">Underlined text</Underline>
```

**Output:**
```text
Underlined text
```

*Note: Plain text doesn't support visual formatting, so text appears without underlines.*

### Structured Formats (JSON, YAML, XML)
```jsx
<Underline syntax="json">Underlined text</Underline>
```

**Output:**
```json
{"type": "underline", "text": "Underlined text"}
```

```jsx
<Underline syntax="xml">Underlined text</Underline>
```

**Output:**
```xml
<underline>Underlined text</underline>
```

## Examples

### Basic Underline
```jsx
<p>Please <Underline>read carefully</Underline> before proceeding.</p>
<p>The <Underline>deadline</Underline> is very important.</p>
```

### Highlighting Links or References
```jsx
<p>See <Underline>Chapter 5</Underline> for more details.</p>
<p>Refer to <Underline>Appendix A</Underline> for technical specifications.</p>
```

### Form Labels and Instructions
```jsx
<p><Underline>Required fields</Underline> must be completed.</p>
<p><Underline>Note:</Underline> All dates should be in MM/DD/YYYY format.</p>
```

### With Variables
```jsx
<p>Current status: <Underline>{statusValue}</Underline></p>
<p>Important: <Underline>{warningMessage}</Underline></p>
```

### Different Syntaxes
```jsx
<!-- For markdown documents -->
<Underline syntax="markdown">Underlined content</Underline>

<!-- For HTML pages -->
<Underline syntax="html">Underlined content</Underline>

<!-- For plain text -->
<Underline syntax="text">Content without formatting</Underline>
```

## Best Practices

1. **Selective Use**: Use underlines sparingly to maintain readability
2. **Avoid Confusion**: Don't use underlines for non-clickable text in web contexts
3. **Consistent Purpose**: Use underlines consistently for the same type of emphasis
4. **Accessibility**: Ensure underlined text is still readable
5. **Alternative Emphasis**: Consider bold or italic for general emphasis

## Common Patterns

### Document Headers and Titles
```jsx
<div>
  <Header level={2}>
    <Underline>Important Notice</Underline>
  </Header>
  <Paragraph>
    This section contains critical information.
  </Paragraph>
</div>
```

### Key Terms and Definitions
```jsx
<div>
  <Paragraph>
    The term <Underline>API</Underline> stands for Application Programming Interface.
    A <Underline>webhook</Underline> is an HTTP callback mechanism.
  </Paragraph>
</div>
```

### Instructions and Warnings
```jsx
<div>
  <Paragraph>
    <Underline>Warning:</Underline> This action cannot be undone.
  </Paragraph>
  <Paragraph>
    <Underline>Important:</Underline> Please backup your data first.
  </Paragraph>
</div>
```

### Field Labels and Requirements
```jsx
<div>
  <Paragraph>
    <Underline>Username:</Underline> {currentUsername}
  </Paragraph>
  <Paragraph>
    <Underline>Email:</Underline> {userEmail}
  </Paragraph>
  <Paragraph>
    <Underline>Status:</Underline> {accountStatus}
  </Paragraph>
</div>
```

### Navigation and References
```jsx
<List>
  <ListItem>Go to <Underline>Settings</Underline> → <Underline>Account</Underline></ListItem>
  <ListItem>Click on <Underline>Advanced Options</Underline></ListItem>
  <ListItem>Select <Underline>Export Data</Underline></ListItem>
</List>
```

## Integration Examples

### With Other Formatting
```jsx
<p>
  <Bold>Important:</Bold> The <Underline>underlined sections</Underline> 
  contain <Italic>critical</Italic> information.
</p>
```

### In Tables
```jsx
<Table>
  <tr>
    <td><Underline>Field Name</Underline></td>
    <td><Underline>Required</Underline></td>
    <td><Underline>Type</Underline></td>
  </tr>
  <tr>
    <td>Username</td>
    <td>Yes</td>
    <td>String</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>Yes</td>
    <td>Email</td>
  </tr>
</Table>
```

### Form Documentation
```jsx
<div>
  <Header level={3}>Registration Form</Header>
  <Paragraph>
    Please fill out all <Underline>required fields</Underline> marked with an asterisk (*).
  </Paragraph>
  
  <List>
    <ListItem><Underline>Full Name*:</Underline> Your complete legal name</ListItem>
    <ListItem><Underline>Email*:</Underline> Valid email address for account verification</ListItem>
    <ListItem><Underline>Password*:</Underline> Must be at least 8 characters</ListItem>
  </List>
</div>
```

### Code Documentation
```jsx
<div>
  <Header level={4}>Function Parameters</Header>
  <List>
    <ListItem>
      <Underline>userID</Underline> (string): Unique identifier for the user
    </ListItem>
    <ListItem>
      <Underline>options</Underline> (object): Configuration object with the following properties
    </ListItem>
  </List>
</div>
```

### Legal and Compliance
```jsx
<div>
  <Paragraph>
    By using this service, you agree to our <Underline>Terms of Service</Underline> 
    and <Underline>Privacy Policy</Underline>.
  </Paragraph>
  
  <Paragraph>
    <Underline>Disclaimer:</Underline> This information is provided as-is without warranty.
  </Paragraph>
</div>
```

## Advanced Usage

### Conditional Underlines
```jsx
{isImportant && <Underline>{message}</Underline>}
{!isImportant && message}
```

### Custom Styling
```jsx
<Underline className="legal-text" speaker="system">
  Terms and Conditions
</Underline>
```

### Template Variables
```jsx
<Underline>
  {fieldLabel}: {fieldValue}
</Underline>
```

### Multiple Formats
```jsx
<!-- Different output handling -->
<Underline syntax="html">HTML underline</Underline>
<Underline syntax="markdown">Markdown underline (uses HTML tags)</Underline>
<Underline syntax="text">Plain text (no visual formatting)</Underline>
```

### Dynamic Content
```jsx
<Underline>
  Current {itemType}: {currentValue}
</Underline>
```

## Accessibility Considerations

1. **Screen Readers**: Underlines may not be announced by all screen readers
2. **Visual Clarity**: Ensure sufficient contrast and readability
3. **Link Confusion**: Avoid underlining non-clickable text in web contexts
4. **Alternative Indicators**: Consider additional visual cues for important content
5. **Color Independence**: Don't rely solely on underlines for meaning

## Use Cases

### Documentation
- Highlighting key terms
- Marking required fields
- Indicating cross-references

### Educational Content
- Emphasizing important concepts
- Marking vocabulary terms
- Highlighting study materials

### Forms and Instructions
- Required field indicators
- Important disclaimers
- Process step highlights

### Legal Documents
- Key clause emphasis
- Important terms
- Reference sections

## Styling Considerations

1. **Web Context**: Be careful not to confuse users who expect underlined text to be clickable
2. **Print Media**: Underlines work well in printed documents
3. **Alternative Emphasis**: Consider using bold or italic for general emphasis
4. **Consistent Usage**: Use underlines consistently throughout a document

## Related Components

- **[Bold](./Bold.md)** - For strong emphasis
- **[Italic](./Italic.md)** - For subtle emphasis or special terms
- **[Strikethrough](./Strikethrough.md)** - For deleted or outdated content
- **[Text](./Text.md)** - For plain text content
- **[Inline](./Inline.md)** - For other inline formatting options
