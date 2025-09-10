# CaptionedParagraph Component

The CaptionedParagraph component creates paragraphs with customizable captions or labels, perfect for labeled content sections, definitions, and structured text.

## Usage

```jsx
<!-- Basic captioned paragraph -->
<CaptionedParagraph caption="Note">
  This is an important note that users should read carefully.
</CaptionedParagraph>

<!-- With different caption styles -->
<CaptionedParagraph caption="Warning" captionStyle="bold">
  This action cannot be undone.
</CaptionedParagraph>

<!-- Header-style caption -->
<CaptionedParagraph caption="Prerequisites" captionStyle="header">
  Before starting, ensure you have Node.js installed.
</CaptionedParagraph>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | `string` | **Required** | The title or label for the paragraph |
| `captionSerialized` | `string` | - | Alternative caption for serialization formats |
| `captionStyle` | `CaptionStyle` | `'header'` | Style of the caption |
| `captionTextTransform` | `TextTransform` | `'none'` | Text transformation for caption |
| `captionEnding` | `CaptionEnding` | Auto | How the caption ends |
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

## Caption Style Options

- `'header'` - Renders as header (h3 in HTML, ### in Markdown)
- `'bold'` - Renders as bold text
- `'plain'` - Renders as normal text
- `'hidden'` - Caption is not displayed

## Caption Text Transform Options

- `'none'` - No transformation (default)
- `'upper'` - Convert to uppercase
- `'level'` - Level-based transformation
- `'capitalize'` - Capitalize first letter

## Caption Ending Options

- `'colon'` - End with colon (:)
- `'newline'` - End with newline
- `'colon-newline'` - End with colon and newline
- `'none'` - No special ending

**Auto-detection:** If not specified, bold and plain styles default to `'colon'`, header style defaults to `'none'`.

## Output Formats

### Markdown (Default)

#### Header Style
```jsx
<CaptionedParagraph caption="Important" captionStyle="header">
  This is the content of the paragraph.
</CaptionedParagraph>
```
**Output:**
```markdown
### Important
This is the content of the paragraph.
```

#### Bold Style
```jsx
<CaptionedParagraph caption="Note" captionStyle="bold">
  This is a note.
</CaptionedParagraph>
```
**Output:**
```markdown
**Note:** 
This is a note.
```

#### Plain Style
```jsx
<CaptionedParagraph caption="Info" captionStyle="plain">
  This is information.
</CaptionedParagraph>
```
**Output:**
```markdown
Info:
This is information.
```

### HTML

#### Header Style
```jsx
<CaptionedParagraph syntax="html" caption="Section" captionStyle="header">
  Content goes here.
</CaptionedParagraph>
```
**Output:**
```html
<div><h3>Section</h3>Content goes here.</div>
```

#### Bold Style
```jsx
<CaptionedParagraph syntax="html" caption="Warning" captionStyle="bold">
  Be careful with this action.
</CaptionedParagraph>
```
**Output:**
```html
<div><strong>Warning</strong>: Be careful with this action.</div>
```

### JSON
```jsx
<CaptionedParagraph 
  syntax="json" 
  caption="Description" 
  name="item"
  type="info"
>
  This describes the item.
</CaptionedParagraph>
```
**Output:**
```json
{
  "item": "This describes the item.",
  "caption": "Description",
  "type": "info"
}
```

### YAML
```jsx
<CaptionedParagraph syntax="yaml" caption="Title" name="content">
  This is the content.
</CaptionedParagraph>
```
**Output:**
```yaml
content: "This is the content."
caption: "Title"
```

### XML
```jsx
<CaptionedParagraph 
  syntax="xml" 
  caption="Label" 
  name="paragraph"
  type="description"
>
  This is descriptive text.
</CaptionedParagraph>
```
**Output:**
```xml
<paragraph type="description" caption="Label">This is descriptive text.</paragraph>
```

## Examples

### Documentation Sections
```jsx
<div>
  <CaptionedParagraph caption="Overview" captionStyle="header">
    EPOML is a JSX-based template engine for creating dynamic text content.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Key Features" captionStyle="header">
    Built-in components, template variables, multiple output formats.
  </CaptionedParagraph>
</div>
```

### Alert Messages
```jsx
<div>
  <CaptionedParagraph caption="Info" captionStyle="bold" captionEnding="colon">
    This feature is currently in beta testing.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Warning" captionStyle="bold" captionEnding="colon">
    Make sure to backup your data before proceeding.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Error" captionStyle="bold" captionEnding="colon">
    Unable to connect to the server. Please try again later.
  </CaptionedParagraph>
</div>
```

### FAQ Format
```jsx
<div>
  <CaptionedParagraph caption="Q: What is EPOML?" captionStyle="bold">
    EPOML stands for Enhanced Prompt Orchestration Markup Language.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Q: How do I install it?" captionStyle="bold">
    You can install EPOML using npm: npm install epoml
  </CaptionedParagraph>
</div>
```

### Definition Lists
```jsx
<div>
  <CaptionedParagraph caption="Template" captionStyle="bold" captionEnding="colon">
    A reusable pattern for generating text content with placeholders for dynamic data.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Component" captionStyle="bold" captionEnding="colon">
    A function that accepts props and returns formatted content in various output formats.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Variable" captionStyle="bold" captionEnding="colon">
    A placeholder in a template that gets replaced with actual values during rendering.
  </CaptionedParagraph>
</div>
```

### With Variables
```jsx
<div>
  <CaptionedParagraph 
    caption={sectionTitle} 
    captionStyle="header"
    blankLine={true}
  >
    {sectionContent}
  </CaptionedParagraph>
  
  <CaptionedParagraph 
    caption={`Step ${stepNumber}`} 
    captionStyle="bold"
  >
    {stepDescription}
  </CaptionedParagraph>
</div>
```

**Usage:**
```typescript
const template = `
  <CaptionedParagraph 
    caption={sectionTitle} 
    captionStyle="header"
    blankLine={true}
  >
    {sectionContent}
  </CaptionedParagraph>
`;

const result = await epomlparse(template, {
  sectionTitle: "Installation Guide",
  sectionContent: "Follow these steps to install the software..."
});
```

### Custom Caption Endings
```jsx
<div>
  <!-- Default ending for bold (colon) -->
  <CaptionedParagraph caption="Note" captionStyle="bold">
    Default colon ending.
  </CaptionedParagraph>
  
  <!-- Custom newline ending -->
  <CaptionedParagraph 
    caption="Important" 
    captionStyle="bold" 
    captionEnding="newline"
  >
    Custom newline ending.
  </CaptionedParagraph>
  
  <!-- No ending -->
  <CaptionedParagraph 
    caption="Info" 
    captionStyle="bold" 
    captionEnding="none"
  >
    No special ending.
  </CaptionedParagraph>
</div>
```

### Text Transformation
```jsx
<div>
  <CaptionedParagraph 
    caption="warning" 
    captionTextTransform="upper"
    captionStyle="bold"
  >
    This caption will be in uppercase.
  </CaptionedParagraph>
  
  <CaptionedParagraph 
    caption="important note" 
    captionTextTransform="capitalize"
    captionStyle="header"
  >
    This caption will be capitalized.
  </CaptionedParagraph>
</div>
```

### Hidden Captions
```jsx
<!-- Caption exists for structure but isn't displayed -->
<CaptionedParagraph caption="Internal Note" captionStyle="hidden">
  This content appears without a visible caption.
</CaptionedParagraph>
```

## Best Practices

1. **Consistent Styling**: Use the same caption style throughout related content
2. **Meaningful Captions**: Write descriptive, concise captions
3. **Appropriate Endings**: Choose endings that fit your content structure
4. **Accessibility**: Use header style for actual section headings
5. **Variable Usage**: Leverage variables for dynamic caption content
6. **Content Limits**: Apply limits for long content sections
7. **Semantic HTML**: Use appropriate caption styles for semantic meaning

## Common Patterns

### Step-by-Step Instructions
```jsx
<div>
  <CaptionedParagraph caption="Step 1: Preparation" captionStyle="header">
    Gather all necessary materials and tools.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Step 2: Setup" captionStyle="header">
    Configure your development environment.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Step 3: Implementation" captionStyle="header">
    Begin coding your solution.
  </CaptionedParagraph>
</div>
```

### Product Features
```jsx
<div>
  <CaptionedParagraph caption="Performance" captionStyle="bold" blankLine={true}>
    Lightning-fast rendering with optimized algorithms.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Scalability" captionStyle="bold" blankLine={true}>
    Handles projects of any size, from small scripts to enterprise applications.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Flexibility" captionStyle="bold" blankLine={true}>
    Supports multiple output formats and custom components.
  </CaptionedParagraph>
</div>
```

### API Documentation
```jsx
<div>
  <CaptionedParagraph caption="Parameters" captionStyle="header">
    The function accepts the following parameters:
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="template" captionStyle="bold" captionEnding="colon">
    The EPOML template string to parse and render.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="variables" captionStyle="bold" captionEnding="colon">
    Optional object containing template variables.
  </CaptionedParagraph>
</div>
```

### Troubleshooting Guide
```jsx
<div>
  <CaptionedParagraph caption="Problem" captionStyle="bold">
    Template fails to render with syntax error.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Solution" captionStyle="bold">
    Check that all JSX tags are properly closed and nested.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Problem" captionStyle="bold">
    Variables are not being replaced in output.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Solution" captionStyle="bold">
    Ensure variable names match exactly between template and variables object.
  </CaptionedParagraph>
</div>
```

## Integration Examples

### With Other Components
```jsx
<div>
  <Header level={2}>User Guide</Header>
  
  <CaptionedParagraph caption="Overview" captionStyle="header">
    This guide will help you get started with our platform.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Prerequisites" captionStyle="bold">
    You'll need: <Bold>Node.js</Bold>, <Bold>npm</Bold>, and a text editor.
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Installation" captionStyle="header">
    Run the following command:
  </CaptionedParagraph>
  
  <Code inline={false} lang="bash">npm install our-platform</Code>
</div>
```

## Related Components

- **[Header](./Header.md)** - For main section headers
- **[Bold](./Bold.md)** - For emphasis within caption content
- **[Inline](./Inline.md)** - For inline formatting within paragraphs