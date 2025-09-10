# Examples

This directory contains practical examples of EPOML usage in real-world scenarios. Each example demonstrates different features and patterns.

## Available Examples

- **[Documentation Generation](./documentation-generation.md)** - Creating technical documentation with EPOML
- **[API Documentation](./api-documentation.md)** - Generating API reference docs
- **[Report Generation](./report-generation.md)** - Creating formatted reports and summaries
- **[Email Templates](./email-templates.md)** - Building dynamic email content
- **[Configuration Files](./configuration-files.md)** - Generating config files in multiple formats
- **[Tutorial Content](./tutorial-content.md)** - Creating step-by-step tutorials
- **[Data Dashboards](./data-dashboards.md)** - Displaying data and metrics
- **[Code Documentation](./code-documentation.md)** - Documenting code with examples

## Quick Start Examples

### Simple Variable Replacement
```typescript
import { epomlparse } from 'epoml';

const template = `
  <Header level={1}>Welcome, {user.name}!</Header>
  <p>You have {user.messageCount} new messages.</p>
`;

const result = await epomlparse(template, {
  user: {
    name: "Alice",
    messageCount: 5
  }
});

console.log(result);
// Output:
// # Welcome, Alice!
// You have 5 new messages.
```

### Using Built-in Components
```typescript
import { epomlparse } from 'epoml';

const template = `
  <div>
    <Header level={1}>Project Setup</Header>
    
    <CaptionedParagraph caption="Step 1" captionStyle="bold">
      Install the required dependencies:
    </CaptionedParagraph>
    
    <Code inline={false} lang="bash">
      npm install epoml
      npm install typescript
    </Code>
    
    <CaptionedParagraph caption="Step 2" captionStyle="bold">
      Create your first template:
    </CaptionedParagraph>
    
    <Code inline={false} lang="javascript">
      import { epomlparse } from 'epoml';
      
      const template = \`&lt;p&gt;Hello, {name}!&lt;/p&gt;\`;
      const result = await epomlparse(template, { name: "World" });
      console.log(result);
    </Code>
  </div>
`;

const result = await epomlparse(template);
console.log(result);
```

### Custom Component Example
```typescript
import { epomlparse, registerComponent, createElement } from 'epoml';

// Define a custom Alert component
function Alert({ type, children }) {
  const icons = {
    info: 'ℹ️',
    warning: '⚠️', 
    error: '❌',
    success: '✅'
  };
  
  const content = children.map(child => 
    typeof child === 'string' ? child : ''
  ).join('');
  
  return createElement('div', {}, `${icons[type]} ${content}`);
}

// Register the component
registerComponent('Alert', Alert);

// Use in template
const template = `
  <div>
    <Header level={2}>System Status</Header>
    
    <Alert type="success">
      All systems are operational.
    </Alert>
    
    <Alert type="warning">
      Scheduled maintenance in 2 hours.
    </Alert>
  </div>
`;

const result = await epomlparse(template);
console.log(result);
```

### Multi-format Output
```typescript
import { epomlparse } from 'epoml';

const template = `
  <Header level={2} syntax={format}>
    {title}
  </Header>
`;

// Generate different formats
const formats = ['markdown', 'html', 'text'];
const title = "API Reference";

for (const format of formats) {
  const result = await epomlparse(template, { format, title });
  console.log(`${format.toUpperCase()}:`, result);
}

// Output:
// MARKDOWN: ## API Reference
// HTML: <h2>API Reference</h2>
// TEXT: API Reference
//       -------------
```

## Common Patterns

### Template with Conditional Content
```typescript
const template = `
  <div>
    <Header level={1}>{report.title}</Header>
    
    {report.summary && (
      <CaptionedParagraph caption="Executive Summary" captionStyle="header">
        {report.summary}
      </CaptionedParagraph>
    )}
    
    {report.data.length > 0 && (
      <div>
        <Header level={2}>Data</Header>
        {report.data.map(item => `<p>• ${item}</p>`).join('')}
      </div>
    )}
    
    {report.showFooter && (
      <p><Bold>Generated on:</Bold> {report.generatedAt}</p>
    )}
  </div>
`;
```

### Loop Through Data
```typescript
const template = `
  <div>
    <Header level={1}>Team Members</Header>
    
    {team.members.map(member => `
      <CaptionedParagraph caption="${member.name}" captionStyle="bold">
        Role: ${member.role}<br/>
        Email: ${member.email}<br/>
        Department: ${member.department}
      </CaptionedParagraph>
    `).join('')}
  </div>
`;

const variables = {
  team: {
    members: [
      { name: "Alice Johnson", role: "Developer", email: "alice@company.com", department: "Engineering" },
      { name: "Bob Smith", role: "Designer", email: "bob@company.com", department: "Design" },
      { name: "Carol Davis", role: "Manager", email: "carol@company.com", department: "Product" }
    ]
  }
};
```

### Nested Template Structure
```typescript
const template = `
  <div>
    <Header level={1}>{project.name}</Header>
    
    <CaptionedParagraph caption="Overview" captionStyle="header">
      {project.description}
    </CaptionedParagraph>
    
    <Header level={2}>Technical Stack</Header>
    {project.technologies.map(tech => `
      <CaptionedParagraph caption="${tech.name}" captionStyle="bold">
        Version: ${tech.version}<br/>
        Purpose: ${tech.purpose}
      </CaptionedParagraph>
    `).join('')}
    
    <Header level={2}>Setup Instructions</Header>
    {project.setup.steps.map((step, index) => `
      <CaptionedParagraph caption="Step ${index + 1}" captionStyle="bold">
        ${step.description}
        ${step.code ? `<Code inline={false} lang="${step.language || 'bash'}">${step.code}</Code>` : ''}
      </CaptionedParagraph>
    `).join('')}
  </div>
`;
```

## Running Examples

To run these examples:

1. **Install EPOML**:
   ```bash
   npm install epoml
   ```

2. **Create a test file**:
   ```javascript
   // example.js
   import { epomlparse } from 'epoml';
   
   async function runExample() {
     // Paste any example template here
     const template = `...`;
     const variables = { ... };
     
     const result = await epomlparse(template, variables);
     console.log(result);
   }
   
   runExample().catch(console.error);
   ```

3. **Run the example**:
   ```bash
   node example.js
   ```

## Tips for Examples

1. **Start Simple**: Begin with basic variable replacement before moving to complex structures
2. **Use TypeScript**: Take advantage of type safety for better development experience
3. **Error Handling**: Always wrap `epomlparse` calls in try-catch blocks
4. **Variable Validation**: Check for required variables before rendering
5. **Performance**: Cache expensive computations in variables
6. **Testing**: Test templates with different variable sets

## Contributing Examples

If you have useful EPOML examples, consider contributing them:

1. Create a new markdown file in this directory
2. Follow the existing format and structure
3. Include complete, working code examples
4. Add explanations for complex patterns
5. Test all examples before submitting

Each example should be self-contained and demonstrate a specific use case or pattern that would be helpful to other EPOML users.