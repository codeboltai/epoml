# Output Formats

EPOML supports multiple output formats through the `syntax` prop, allowing you to generate content for different platforms and use cases from the same templates.

## Available Formats

- **Markdown** (`'markdown'`) - Default format, ideal for documentation and README files
- **HTML** (`'html'`) - For web pages and email content  
- **JSON** (`'json'`) - Structured data format for APIs and configuration
- **YAML** (`'yaml'`) - Human-readable data serialization for config files
- **XML** (`'xml'`) - Structured markup for data exchange
- **Text** (`'text'`) - Plain text for reports and simple output
- **Multimedia** (`'multimedia'`) - Special format for media components

## Format Comparison

### Header Component Example

```jsx
<Header level={2}>Sample Header</Header>
```

| Format | Output |
|--------|--------|
| Markdown | `## Sample Header` |
| HTML | `<h2>Sample Header</h2>` |
| Text | `Sample Header`<br/>`-------------` |
| JSON | `{"header": "Sample Header", "level": 2}` |
| YAML | `header: "Sample Header"`<br/>`level: 2` |
| XML | `<header level="2">Sample Header</header>` |

### Bold Component Example

```jsx
<Bold>Important Text</Bold>
```

| Format | Output |
|--------|--------|
| Markdown | `**Important Text**` |
| HTML | `<b>Important Text</b>` |
| Text | `IMPORTANT TEXT` |
| JSON | `"Important Text"` |
| YAML | `"Important Text"` |
| XML | `Important Text` |

### Code Component Example

```jsx
<Code inline={false} lang="javascript">console.log("Hello");</Code>
```

| Format | Output |
|--------|--------|
| Markdown | ````markdown<br/>```javascript<br/>console.log("Hello");<br/>```<br/>```` |
| HTML | `<pre><code class="language-javascript">console.log("Hello");</code></pre>` |
| Text | `    console.log("Hello");` |
| JSON | `{"code": "console.log(\"Hello\");", "language": "javascript"}` |
| YAML | `code: "console.log(\"Hello\");"`<br/>`language: "javascript"` |
| XML | `<code language="javascript">console.log("Hello");</code>` |

## Setting Output Format

### Component-Level Syntax

Set the format for individual components:

```jsx
<div>
  <!-- Markdown header -->
  <Header level={2} syntax="markdown">Markdown Title</Header>
  
  <!-- HTML header -->
  <Header level={2} syntax="html">HTML Title</Header>
  
  <!-- Text header -->
  <Header level={2} syntax="text">Text Title</Header>
</div>
```

### Template-Wide Format

Use variables to set format consistently:

```jsx
const template = `
  <div>
    <Header level={1} syntax={format}>Document Title</Header>
    <Bold syntax={format}>Important note</Bold>
    <Code syntax={format} lang="javascript">console.log("Hello");</Code>
  </div>
`;

// Generate different formats
const formats = ['markdown', 'html', 'text', 'json'];
for (const format of formats) {
  const result = await epomlparse(template, { format });
  console.log(`${format.toUpperCase()}:`, result);
}
```

## Format-Specific Features

### Markdown Features

```jsx
<!-- GitHub-flavored markdown -->
<div>
  <Header level={1} syntax="markdown">My Project</Header>
  <Header level={2} syntax="markdown">Installation</Header>
  
  <Code syntax="markdown" inline={false} lang="bash">
    npm install my-project
  </Code>
  
  <Bold syntax="markdown">Note:</Bold> This requires Node.js 16+.
  
  <!-- Markdown tables (using raw markdown) -->
  <div>
    | Feature | Status |
    |---------|--------|
    | Authentication | ✅ Complete |
    | API | 🚧 In Progress |
  </div>
</div>
```

### HTML Features

```jsx
<!-- Rich HTML with classes and attributes -->
<div>
  <Header level={1} syntax="html" className="page-title">
    Welcome
  </Header>
  
  <Bold syntax="html" className="highlight">
    Important message
  </Bold>
  
  <Code syntax="html" className="code-block" lang="javascript">
    const app = express();
  </Code>
  
  <!-- HTML-specific elements -->
  <div syntax="html">
    <button onclick="alert('Hello')">Click me</button>
    <img src="image.jpg" alt="Description" />
  </div>
</div>
```

### JSON Structured Data

```jsx
<!-- JSON output for APIs -->
<div>
  <Header 
    level={2} 
    syntax="json" 
    name="title"
    type="heading"
  >
    API Documentation
  </Header>
  
  <Code 
    syntax="json"
    name="example"
    type="code_snippet"
    lang="javascript"
  >
    fetch('/api/users').then(r => r.json())
  </Code>
</div>
```

**Output:**
```json
{
  "title": "API Documentation",
  "level": 2,
  "type": "heading"
}

{
  "example": "fetch('/api/users').then(r => r.json())",
  "language": "javascript",
  "type": "code_snippet"
}
```

### YAML Configuration

```jsx
<!-- YAML for configuration files -->
<div>
  <Header syntax="yaml" name="app_name">My Application</Header>
  
  <Code syntax="yaml" name="database_config">
    host: localhost
    port: 5432
    name: myapp_db
  </Code>
</div>
```

**Output:**
```yaml
app_name: "My Application"

database_config: |
  host: localhost
  port: 5432
  name: myapp_db
```

### XML Data Exchange

```jsx
<!-- XML for data exchange -->
<div>
  <Header 
    syntax="xml" 
    name="title"
    type="document"
  >
    User Manual
  </Header>
  
  <CaptionedParagraph 
    syntax="xml"
    caption="Description"
    name="section"
    type="content"
  >
    This manual covers all features.
  </CaptionedParagraph>
</div>
```

**Output:**
```xml
<title type="document">User Manual</title>
<section type="content" caption="Description">This manual covers all features.</section>
```

### Plain Text Reports

```jsx
<!-- Clean text output for reports -->
<div>
  <Header level={1} syntax="text">System Report</Header>
  <Header level={2} syntax="text">Status Overview</Header>
  
  <Bold syntax="text">CPU Usage:</Bold> 45%
  <Bold syntax="text">Memory:</Bold> 2.1GB / 8GB
  <Bold syntax="text">Disk:</Bold> 120GB / 500GB
  
  <Code syntax="text" inline={false}>
    Last backup: 2024-01-15 09:30:00
    Next backup: 2024-01-16 09:30:00
  </Code>
</div>
```

## Multi-Format Templates

Create templates that work well across multiple formats:

```jsx
const universalTemplate = `
  <div>
    <Header level={1} syntax={format}>{doc.title}</Header>
    
    <CaptionedParagraph 
      caption="Summary" 
      captionStyle="header"
      syntax={format}
    >
      {doc.summary}
    </CaptionedParagraph>
    
    <Header level={2} syntax={format}>Features</Header>
    {doc.features.map(feature => `
      <CaptionedParagraph 
        caption="${feature.name}"
        captionStyle="bold"
        syntax={format}
      >
        ${feature.description}
      </CaptionedParagraph>
    `).join('')}
    
    <Header level={2} syntax={format}>Example Usage</Header>
    <Code 
      syntax={format} 
      inline={false} 
      lang={doc.example.language}
      name="usage_example"
    >
      {doc.example.code}
    </Code>
  </div>
`;

const docData = {
  doc: {
    title: "EPOML Library",
    summary: "A powerful JSX-based template engine for dynamic text generation.",
    features: [
      {
        name: "Variables",
        description: "Dynamic content with template variables"
      },
      {
        name: "Components", 
        description: "Reusable components for structured content"
      }
    ],
    example: {
      language: "javascript",
      code: `import { epomlparse } from 'epoml';
const result = await epomlparse(template, variables);`
    }
  }
};

// Generate all formats
const formats = ['markdown', 'html', 'text', 'json', 'yaml', 'xml'];
for (const format of formats) {
  console.log(`\n=== ${format.toUpperCase()} ===`);
  const result = await epomlparse(universalTemplate, { ...docData, format });
  console.log(result);
}
```

## Format Selection Strategies

### Use Case Based Selection

```typescript
function selectFormat(useCase: string): string {
  switch (useCase) {
    case 'documentation':
    case 'readme':
    case 'blog':
      return 'markdown';
      
    case 'email':
    case 'webpage':
    case 'newsletter':
      return 'html';
      
    case 'report':
    case 'log':
    case 'console':
      return 'text';
      
    case 'api':
    case 'config':
    case 'data_exchange':
      return 'json';
      
    case 'configuration':
    case 'ci_cd':
      return 'yaml';
      
    case 'legacy_systems':
    case 'soap_api':
      return 'xml';
      
    default:
      return 'markdown';
  }
}

// Usage
const format = selectFormat('documentation');
const result = await epomlparse(template, { ...variables, format });
```

### Environment-Based Selection

```typescript
function getFormatFromEnvironment(): string {
  const outputFormat = process.env.EPOML_OUTPUT_FORMAT;
  const validFormats = ['markdown', 'html', 'text', 'json', 'yaml', 'xml'];
  
  if (outputFormat && validFormats.includes(outputFormat)) {
    return outputFormat;
  }
  
  // Default based on environment
  if (process.env.NODE_ENV === 'production') {
    return 'html';
  } else if (process.env.CI) {
    return 'text';
  } else {
    return 'markdown';
  }
}
```

## Best Practices

1. **Consistent Format Usage**: Use the same format throughout related templates
2. **Format-Appropriate Content**: Tailor content structure to the target format
3. **Variable-Driven Format**: Use variables to control format selection
4. **Fallback Handling**: Provide sensible defaults for unsupported format features
5. **Testing**: Test templates across all target formats
6. **Documentation**: Document which formats are supported for each template

## Format Limitations

### Markdown Limitations
- No native support for advanced layout
- Limited styling options
- Table support varies by renderer

### HTML Limitations  
- May require CSS for proper styling
- Not suitable for plain text contexts
- Security considerations with user content

### Text Limitations
- No formatting or styling
- Fixed-width layout assumptions
- Limited visual hierarchy

### JSON/YAML/XML Limitations
- Structural formats, not presentation formats
- May not preserve visual layout
- Require appropriate parsing on consumption

Understanding these formats and their appropriate use cases will help you choose the right output format for your specific needs and create templates that work effectively across different platforms and contexts.