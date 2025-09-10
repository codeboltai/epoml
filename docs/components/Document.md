# Document Component

The Document component creates complete document structures with metadata, headers, and content organization. It's perfect for generating full documents with proper formatting across multiple output formats.

## Usage

```jsx
<Document 
  title="User Manual" 
  author="Documentation Team"
  version="1.0.0"
  date="2024-01-15"
>
  <Header level={2}>Introduction</Header>
  <p>Welcome to our comprehensive user manual...</p>
</Document>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Document title |
| `author` | `string` | - | Document author |
| `version` | `string` | - | Document version |
| `date` | `string` | - | Document date |
| `metadata` | `Record<string, any>` | `{}` | Additional metadata |
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |

## Output Formats

### Markdown (Default)
```jsx
<Document 
  title="API Guide" 
  author="Dev Team"
  version="2.1.0"
  date="2024-01-15"
>
  Content goes here...
</Document>
```

**Output:**
```markdown
# API Guide

<!-- Document Info -->
**Author:** Dev Team  
**Version:** 2.1.0  
**Date:** 2024-01-15  

Content goes here...
```

### HTML
```jsx
<Document 
  syntax="html"
  title="Web Documentation" 
  author="Frontend Team"
>
  <p>Web-specific content here...</p>
</Document>
```

**Output:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Web Documentation</title>
</head>
<body>
  <h1>Web Documentation</h1>
  <div class="document-info">
    <p><strong>Author:</strong> Frontend Team</p>
  </div>
  <div class="document-content">
    <p>Web-specific content here...</p>
  </div>
</body>
</html>
```

### JSON
```jsx
<Document 
  syntax="json"
  title="Data Structure Guide"
  metadata={{ category: "technical", audience: "developers" }}
>
  Technical content...
</Document>
```

**Output:**
```json
{
  "title": "Data Structure Guide",
  "metadata": {
    "category": "technical",
    "audience": "developers"
  },
  "content": "Technical content..."
}
```

## Examples

### Technical Documentation
```jsx
<Document 
  title="EPOML Component Library"
  author="EPOML Team"
  version="2.0.0"
  date="2024-01-15"
  metadata={{
    category: "documentation",
    audience: "developers",
    language: "en"
  }}
>
  <Header level={2}>Overview</Header>
  <p>EPOML is a JSX-based template engine for dynamic text generation.</p>
  
  <Header level={2}>Getting Started</Header>
  <Code inline={false} lang="bash">npm install epoml</Code>
  
  <Header level={2}>Basic Usage</Header>
  <Code inline={false} lang="javascript">
    import { epomlparse } from 'epoml';
    const result = await epomlparse(template, variables);
  </Code>
</Document>
```

### Report Generation
```jsx
<Document 
  title="Monthly Performance Report"
  author="Analytics Team"
  date={new Date().toISOString().split('T')[0]}
  metadata={{
    reportType: "performance",
    period: "monthly",
    confidential: true
  }}
>
  <Header level={2}>Executive Summary</Header>
  <p>This month showed significant improvements across key metrics.</p>
  
  <Header level={2}>Key Metrics</Header>
  <Table 
    headers={["Metric", "Current", "Previous", "Change"]}
    rows={[
      ["Revenue", "$125K", "$118K", "+5.9%"],
      ["Users", "2,450", "2,180", "+12.4%"],
      ["Conversion", "3.2%", "2.8%", "+0.4%"]
    ]}
  />
</Document>
```

### Policy Document
```jsx
<Document 
  title="Data Privacy Policy"
  author="Legal Department"
  version="3.1"
  date="2024-01-15"
  metadata={{
    effective: "2024-02-01",
    jurisdiction: "US",
    type: "policy"
  }}
>
  <Header level={2}>Data Collection</Header>
  <p>We collect the following types of information:</p>
  
  <ul>
    <li>Personal identification information</li>
    <li>Usage data and analytics</li>
    <li>Device and browser information</li>
  </ul>
  
  <Header level={2}>Data Usage</Header>
  <p>Your data is used to improve our services...</p>
</Document>
```

### Academic Paper
```jsx
<Document 
  title="Machine Learning in Template Processing"
  author="Dr. Jane Smith, Prof. John Doe"
  date="2024-01-15"
  metadata={{
    journal: "Journal of Computing",
    doi: "10.1234/jc.2024.001",
    keywords: ["machine learning", "templates", "NLP"]
  }}
>
  <Header level={2}>Abstract</Header>
  <p>This paper explores the application of machine learning techniques...</p>
  
  <Header level={2}>Introduction</Header>
  <p>Template processing systems have evolved significantly...</p>
  
  <Header level={2}>Methodology</Header>
  <p>We employed a hybrid approach combining...</p>
</Document>
```

## Best Practices

1. **Complete Metadata**: Include all relevant document information
2. **Consistent Structure**: Use Headers to organize content hierarchically
3. **Version Control**: Always specify version for evolving documents
4. **Appropriate Format**: Choose syntax based on intended use
5. **Metadata Standards**: Use consistent metadata schemas across projects

## Common Patterns

### Multi-Language Documents
```jsx
const documentTemplate = `
  <Document 
    title={doc.title}
    author={doc.author}
    version={doc.version}
    date={doc.date}
    metadata={{ language: doc.language }}
  >
    {doc.sections.map(section => \`
      <Header level={2}>{section.title}</Header>
      <p>{section.content}</p>
    \`).join('')}
  </Document>
`;
```

### Generated Documentation
```jsx
<Document 
  title={`${project.name} Documentation`}
  author="Auto-Generator"
  version={project.version}
  date={new Date().toISOString()}
  metadata={{
    generated: true,
    source: project.repository
  }}
>
  {project.modules.map(module => `
    <Header level={2}>${module.name}</Header>
    <p>${module.description}</p>
    <Code lang="${module.language}">${module.example}</Code>
  `).join('')}
</Document>
```

### Compliance Documents
```jsx
<Document 
  title="Security Compliance Report"
  author="Security Team"
  version="1.0"
  date={reportDate}
  metadata={{
    classification: "confidential",
    compliance: ["SOC2", "ISO27001"],
    reviewDate: nextReviewDate
  }}
>
  <Header level={2}>Compliance Status</Header>
  <p>Current compliance status across all frameworks...</p>
</Document>
```

## Integration Examples

### With Other Components
```jsx
<Document title="Component Showcase" author="Demo">
  <CaptionedParagraph caption="Overview" captionStyle="header">
    This document demonstrates various EPOML components.
  </CaptionedParagraph>
  
  <Task 
    title="Review Documentation"
    status="in-progress"
    assignee="Tech Writer"
  />
  
  <Question 
    text="What is the primary benefit of using EPOML?"
    type="multiple-choice"
    options={["Speed", "Flexibility", "Type Safety", "All of the above"]}
    answer="All of the above"
  />
</Document>
```

## Related Components

- **[Header](./Header.md)** - For document structure and sections
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For organized content sections
- **[Table](./Table.md)** - For data presentation in documents
- **[Code](./Code.md)** - For code examples and snippets