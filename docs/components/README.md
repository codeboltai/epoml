# Built-in Components

EPOML comes with a rich set of built-in components for common use cases. Each component supports multiple output formats and can be customized with various props.

## Available Components

### Core Text Components
- **[Header](./Header.md)** - Create headers at different levels (h1-h6)
- **[Bold](./Bold.md)** - Emphasize text with bold formatting  
- **[Italic](./Italic.md)** - Emphasize text with italic formatting 🆕
- **[Underline](./Underline.md)** - Underline text for emphasis 🆕
- **[Strikethrough](./Strikethrough.md)** - Strike through text to show deletions 🆕
- **[Text](./Text.md)** - Plain text content component 🆕
- **[Paragraph](./Paragraph.md)** - Paragraph-level text with conditional rendering and loops 🆕
- **[Newline](./Newline.md)** - Insert line breaks and spacing control 🆕
- **[Code](./Code.md)** - Display code blocks with syntax highlighting
- **[Inline](./Inline.md)** - Inline formatting and content

### Document Structure
- **[Document](./Document.md)** - Full document structures with metadata ✨
- **[CaptionedParagraph](./CaptionedParagraph.md)** - Paragraphs with customizable captions
- **[FileTree](./FileTree.md)** - Display directory structures as trees
- **[Folder](./Folder.md)** - Represent file system folders and directories 🆕
- **[Webpage](./Webpage.md)** - Reference web pages with URLs and content extraction 🆕

### Lists and Data Presentation  
- **[List](./List.md)** - Create ordered and unordered lists 🆕
- **[ListItem](./ListItem.md)** - Individual list items with fine-grained control 🆕
- **[Table](./Table.md)** - Create tables with headers and data rows
- **[DataObject](./DataObject.md)** - Display structured object data with template variables ✨
- **[Image](./Image.md)** - Display images with captions and positioning

### Example Components
- **[Example](./Example.md)** - Generic examples with categories and difficulty levels 🆕
- **[ExampleInput](./ExampleInput.md)** - Show example inputs with template variables ✨
- **[ExampleOutput](./ExampleOutput.md)** - Show example outputs with template variables ✨ 
- **[ExampleSet](./ExampleSet.md)** - Group related examples with template variables ✨

### Format Control
- **[OutputFormat](./OutputFormat.md)** - Specify and document output formats ✨

### Interactive & Media
- **[Audio](./Audio.md)** - Include audio references and transcriptions
- **[Question](./Question.md)** - Create questions with multiple formats 🆕
- **[Hint](./Hint.md)** - Provide hints and tips in content 🆕

### Conversation & Messaging
- **[Conversation](./Conversation.md)** - Organize message sequences and conversations 🆕
- **[HumanMessage](./HumanMessage.md)** - Messages from human users 🆕
- **[AiMessage](./AiMessage.md)** - Messages from AI models 🆕
- **[SystemMessage](./SystemMessage.md)** - System notifications and messages 🆕
- **[MessageContext](./MessageContext.md)** - Provide context for conversations 🆕

### Tools & Integration
- **[ToolRequest](./ToolRequest.md)** - Tool usage requests 🆕
- **[ToolResponse](./ToolResponse.md)** - Tool usage responses 🆕
- **[MCPToolFunction](./MCPToolFunction.md)** - MCP tool function definitions 🆕
- **[MCPToolServer](./MCPToolServer.md)** - MCP tool server configurations 🆕
- **[CodeboltToolFunction](./CodeboltToolFunction.md)** - Codebolt tool functions 🆕
- **[CodeboltToolServer](./CodeboltToolServer.md)** - Codebolt tool servers 🆕

### Project Management & Organization
- **[Task](./Task.md)** - Task management and tracking components with template variables ✨
- **[Role](./Role.md)** - Define roles with permissions and responsibilities 🆕

### Instructional & Learning
- **[Introducer](./Introducer.md)** - Introduction and context setting 🆕
- **[StepwiseInstructions](./StepwiseInstructions.md)** - Step-by-step instruction guides 🆕

### Advanced Features
- **[Loop](./Loop.md)** - Loop over arrays with context management 🆕
- **[SubContent](./SubContent.md)** - Nested content with hierarchical structure 🆕

✨ = Recently enhanced with template variable support and improved functionality
🆕 = New components added to documentation

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
| `templateVars` | `Record<string, any>` | `{}` | Template variables for dynamic content |

### Template Variables Support

Many components now support template variables through the `templateVars` prop, allowing dynamic content injection:

```jsx
const variables = { userName: "Alice", status: "active" };

<Task 
  title="Welcome {userName}" 
  description="Account status: {status}"
  templateVars={variables}
/>
// Renders: Welcome Alice, Account status: active
```

Template variables use `{variableName}` syntax and are processed by the [`processTemplateVars`](../api-reference.md#processtemplatevarstestvariables) utility function.

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

| Component | Primary Use | Key Features | Template Variables | Output Formats |
|-----------|-------------|--------------|-------------------|----------------|
| Header | Section titles | 6 levels, auto-formatting | ✓ | All |
| Bold | Text emphasis | Simple bold formatting | ✓ | All |
| Code | Code display | Syntax highlighting, line numbers | ✓ | All |
| Audio | Media inclusion | Transcription, metadata | ✓ | All |
| FileTree | Directory structure | Tree visualization | ✓ | Text-based |
| CaptionedParagraph | Labeled content | Flexible caption styles | ✓ | All |
| Inline | Inline formatting | Minimal wrapping | ✓ | All |
| Document | Full documents | Metadata, structure | ✓ Enhanced | All |
| Table | Structured data | Headers, rows, styling | ✓ | All |
| Image | Visual content | Captions, sizing, positioning | ✓ | All |
| Task | Project management | Status, priority, assignment | ✓ Enhanced | All |
| Question | Interactive content | Multiple question types | ✓ | All |
| Role | Team organization | Permissions, responsibilities | ✓ | All |
| Hint | Contextual help | Tips, warnings, dismissible | ✓ | All |
| Introducer | Context setting | Speaker, tone, context | ✓ | All |
| StepwiseInstructions | Procedural guides | Numbered steps, code examples | ✓ | All |
| DataObject | Data structures | Expandable, type display, inline | ✓ Enhanced | All |
| OutputFormat | Format specs | Type, schema, examples | ✓ Enhanced | All |
| ExampleInput | Input examples | Code samples, descriptions | ✓ Enhanced | All |
| ExampleOutput | Output examples | Expected results | ✓ Enhanced | All |
| ExampleSet | Example groups | Related examples, limits | ✓ Enhanced | All |

## Next Steps

- Explore individual component documentation for detailed usage
- Learn about [Custom Components](../custom-components.md) to create your own
- Check out [Examples](../examples/) for real-world usage patterns