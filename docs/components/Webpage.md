# Webpage Component

The Webpage component represents web page references and content with support for URLs, titles, selectors, and content extraction options across multiple output formats.

## Usage

```jsx
<Webpage url="https://example.com" title="Example Website">
  This is content from the Example website.
</Webpage>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | `string` | **Required** | URL of the webpage |
| `title` | `string` | - | Title of the webpage (defaults to URL if not provided) |
| `selector` | `string` | - | CSS selector to extract specific content |
| `extractText` | `boolean` | `false` | Whether to extract text content only |
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling |

## Output Formats

### Markdown (Default)
```jsx
<Webpage url="https://docs.example.com" title="Documentation">
  Comprehensive guide to using our API
</Webpage>
```

**Output:**
```markdown
🌐 [Documentation](https://docs.example.com)

Comprehensive guide to using our API
```

### HTML
```jsx
<Webpage syntax="html" url="https://blog.example.com" title="Tech Blog">
  Latest articles about web development
</Webpage>
```

**Output:**
```html
<div class="webpage">
  <h3>🌐 <a href="https://blog.example.com">Tech Blog</a></h3>
  <div class="webpage-content">Latest articles about web development</div>
</div>
```

### Plain Text
```jsx
<Webpage syntax="text" url="https://news.example.com" title="News Site">
  Breaking news and current events
</Webpage>
```

**Output:**
```text
🌐 News Site (https://news.example.com)

Breaking news and current events
```

### With Selector
```jsx
<Webpage 
  url="https://api.example.com/docs" 
  title="API Reference"
  selector=".method-description"
>
  Authentication method documentation
</Webpage>
```

**Output (Markdown):**
```markdown
🌐 [API Reference](https://api.example.com/docs) (Selector: `.method-description`)

Authentication method documentation
```

### Structured Formats (JSON, YAML, XML)
```jsx
<Webpage 
  syntax="json" 
  url="https://example.com" 
  title="Example"
  selector="#main-content"
  extractText={true}
>
  Page content here
</Webpage>
```

**Output:**
```json
{
  "type": "webpage",
  "url": "https://example.com",
  "title": "Example",
  "selector": "#main-content",
  "extractText": true,
  "content": "Page content here"
}
```

## Examples

### Basic Webpage Reference
```jsx
<Webpage url="https://www.example.com">
  Homepage of Example Corporation
</Webpage>
```

### Documentation Reference
```jsx
<Webpage 
  url="https://docs.react.dev/learn" 
  title="React Documentation"
>
  Learn React with the official documentation and tutorials.
</Webpage>
```

### Specific Content Extraction
```jsx
<Webpage 
  url="https://github.com/facebook/react" 
  title="React GitHub Repository"
  selector=".markdown-body"
  extractText={true}
>
  The React library source code and documentation.
</Webpage>
```

### API Documentation
```jsx
<Webpage 
  url="https://api.github.com/docs" 
  title="GitHub API Docs"
  selector=".endpoint-description"
>
  REST API endpoints for GitHub integration.
</Webpage>
```

### Blog Post Reference
```jsx
<Webpage 
  url="https://blog.example.com/post/123" 
  title="How to Build Better APIs"
>
  A comprehensive guide to API design principles and best practices.
</Webpage>
```

## Best Practices

1. **Valid URLs**: Always provide valid, accessible URLs
2. **Descriptive Titles**: Use clear, descriptive titles for better context
3. **Appropriate Selectors**: Use specific CSS selectors for content extraction
4. **Content Relevance**: Include relevant content descriptions
5. **URL Validation**: Ensure URLs are properly formatted and accessible

## Common Patterns

### Reference Lists
```jsx
<div>
  <Header level={2}>Additional Resources</Header>
  
  <List>
    <ListItem>
      <Webpage 
        url="https://developer.mozilla.org/en-US/docs/Web" 
        title="MDN Web Docs"
      >
        Comprehensive web development documentation
      </Webpage>
    </ListItem>
    
    <ListItem>
      <Webpage 
        url="https://www.w3.org/standards/" 
        title="W3C Standards"
      >
        Web standards and specifications
      </Webpage>
    </ListItem>
    
    <ListItem>
      <Webpage 
        url="https://caniuse.com/" 
        title="Can I Use"
      >
        Browser compatibility tables for web technologies
      </Webpage>
    </ListItem>
  </List>
</div>
```

### Documentation References
```jsx
<div>
  <Header level={3}>Framework Documentation</Header>
  
  <Paragraph>
    For detailed information, refer to the official documentation:
  </Paragraph>
  
  <Webpage 
    url="https://nextjs.org/docs" 
    title="Next.js Documentation"
  >
    Complete guide to building applications with Next.js, including 
    routing, API routes, and deployment strategies.
  </Webpage>
  
  <Webpage 
    url="https://tailwindcss.com/docs" 
    title="Tailwind CSS Documentation"
  >
    Utility-first CSS framework documentation with examples 
    and configuration options.
  </Webpage>
</div>
```

### Source Code References
```jsx
<div>
  <Header level={3}>Source Code</Header>
  
  <Paragraph>
    The implementation can be found in the following repositories:
  </Paragraph>
  
  <Webpage 
    url="https://github.com/vercel/next.js" 
    title="Next.js GitHub Repository"
    selector=".repository-content"
  >
    Main repository containing the Next.js framework source code.
  </Webpage>
  
  <Webpage 
    url="https://github.com/tailwindlabs/tailwindcss" 
    title="Tailwind CSS Repository"
    selector="README.md"
  >
    Tailwind CSS utility framework implementation.
  </Webpage>
</div>
```

### API References
```jsx
<div>
  <Header level={3}>API Endpoints</Header>
  
  <Webpage 
    url="https://api.github.com/repos" 
    title="GitHub Repositories API"
    selector=".endpoint-docs"
    extractText={true}
  >
    Endpoint for accessing repository information and metadata.
  </Webpage>
  
  <Webpage 
    url="https://api.github.com/users" 
    title="GitHub Users API"
    selector=".method-description"
  >
    User profile and account information endpoints.
  </Webpage>
</div>
```

### Tutorial References
```jsx
<div>
  <Header level={3}>Learning Resources</Header>
  
  <Webpage 
    url="https://react.dev/learn/tutorial-tic-tac-toe" 
    title="React Tutorial: Tic-Tac-Toe"
  >
    Interactive tutorial that teaches React fundamentals by building 
    a simple tic-tac-toe game.
  </Webpage>
  
  <Webpage 
    url="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" 
    title="Introduction to Node.js"
    selector=".tutorial-content"
  >
    Beginner-friendly introduction to server-side JavaScript with Node.js.
  </Webpage>
</div>
```

## Integration Examples

### In Documentation
```jsx
<Document title="Project Setup Guide">
  <Header level={1}>Getting Started</Header>
  
  <Paragraph>
    This project uses several modern web technologies. For detailed 
    information about each technology, refer to their official documentation:
  </Paragraph>
  
  <List>
    <ListItem>
      <Webpage url="https://react.dev" title="React">
        JavaScript library for building user interfaces
      </Webpage>
    </ListItem>
    <ListItem>
      <Webpage url="https://www.typescriptlang.org" title="TypeScript">
        Typed superset of JavaScript for better development experience
      </Webpage>
    </ListItem>
  </List>
</Document>
```

### Research Citations
```jsx
<div>
  <Header level={2}>References</Header>
  
  <List ordered>
    <ListItem>
      <Webpage 
        url="https://research.google/pubs/pub43146/" 
        title="MapReduce: Simplified Data Processing"
      >
        Original paper describing the MapReduce programming model 
        for processing large datasets.
      </Webpage>
    </ListItem>
    
    <ListItem>
      <Webpage 
        url="https://www.usenix.org/conference/osdi14/technical-sessions" 
        title="OSDI '14 Technical Sessions"
        selector=".paper-abstract"
      >
        Conference proceedings with distributed systems research papers.
      </Webpage>
    </ListItem>
  </List>
</div>
```

### Tool References
```jsx
<div>
  <Header level={3}>Development Tools</Header>
  
  <Table>
    <tr>
      <td><Bold>Tool</Bold></td>
      <td><Bold>Purpose</Bold></td>
      <td><Bold>Documentation</Bold></td>
    </tr>
    <tr>
      <td>Vite</td>
      <td>Build tool</td>
      <td>
        <Webpage url="https://vitejs.dev" title="Vite Docs">
          Fast build tool for modern web development
        </Webpage>
      </td>
    </tr>
    <tr>
      <td>ESLint</td>
      <td>Code linting</td>
      <td>
        <Webpage url="https://eslint.org" title="ESLint Docs">
          Pluggable JavaScript linter for code quality
        </Webpage>
      </td>
    </tr>
  </Table>
</div>
```

## Advanced Usage

### Dynamic URLs
```jsx
<Webpage 
  url={`https://api.example.com/docs/${version}`}
  title={`API Documentation v${version}`}
>
  Version-specific API documentation
</Webpage>
```

### Conditional Selectors
```jsx
<Webpage 
  url={documentationUrl}
  title={documentationTitle}
  selector={isDetailed ? '.full-content' : '.summary'}
  extractText={extractTextOnly}
>
  {documentationDescription}
</Webpage>
```

### Template Variables
```jsx
<Webpage 
  url="{baseUrl}/docs/{section}"
  title="{sectionTitle}"
  selector="{contentSelector}"
>
  {sectionDescription}
</Webpage>
```

### Custom Styling
```jsx
<Webpage 
  url="https://internal.company.com/docs"
  title="Internal Documentation"
  className="internal-resource"
  speaker="documentation-system"
>
  Company-internal documentation and procedures
</Webpage>
```

### Batch References
```jsx
{webpageReferences.map(ref => (
  <Webpage 
    key={ref.id}
    url={ref.url}
    title={ref.title}
    selector={ref.selector}
  >
    {ref.description}
  </Webpage>
))}
```

## Security Considerations

1. **URL Validation**: Validate URLs to prevent malicious links
2. **Content Filtering**: Be cautious with extracted content
3. **Access Controls**: Consider authentication requirements for referenced pages
4. **Data Privacy**: Respect privacy when referencing external content

## Accessibility Considerations

1. **Link Text**: Ensure link text is descriptive and meaningful
2. **External Links**: Consider indicating external links appropriately
3. **Screen Readers**: Provide sufficient context for webpage references
4. **Navigation**: Ensure links are keyboard accessible

## Use Cases

### Documentation and References
- API documentation links
- Tutorial references
- Research paper citations
- Official documentation links

### Resource Collections
- Tool and library references
- Learning resources
- Code repositories
- Technical specifications

### Content Aggregation
- Blog post references
- News article links
- Forum discussions
- Community resources

## Related Components

- **[FileTree](./FileTree.md)** - For file and directory structure references
- **[Code](./Code.md)** - For displaying code from web sources
- **[Document](./Document.md)** - For comprehensive documentation with web references
- **[List](./List.md)** - For organizing multiple webpage references
- **[Table](./Table.md)** - For structured webpage reference lists
