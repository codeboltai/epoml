# Documentation Generation

Learn how to use EPOML for generating comprehensive technical documentation with consistent formatting and structure.

## Basic Documentation Template

```typescript
import { epomlparse } from 'epoml';

const documentationTemplate = `
  <div>
    <Header level={1}>{doc.title}</Header>
    
    {doc.version && (
      <p><Bold>Version:</Bold> {doc.version}</p>
    )}
    
    {doc.lastUpdated && (
      <p><Bold>Last Updated:</Bold> {doc.lastUpdated}</p>
    )}
    
    <Header level={2}>Table of Contents</Header>
    <ul>
      {doc.sections.map(section => `
        <li><a href="#${section.id}">${section.title}</a></li>
      `).join('')}
    </ul>
    
    {doc.sections.map(section => `
      <div id="${section.id}">
        <Header level={section.level || 2}>{section.title}</Header>
        {section.content}
        
        ${section.examples ? section.examples.map(example => `
          <CaptionedParagraph caption="Example" captionStyle="bold">
            ${example.description}
          </CaptionedParagraph>
          <Code inline={false} lang="${example.language || 'javascript'}">
            ${example.code}
          </Code>
        `).join('') : ''}
        
        ${section.subsections ? section.subsections.map(subsection => `
          <Header level={3}>${subsection.title}</Header>
          ${subsection.content}
        `).join('') : ''}
      </div>
    `).join('')}
    
    {doc.footer && (
      <div>
        <Header level={2}>Additional Information</Header>
        <p>{doc.footer}</p>
      </div>
    )}
  </div>
`;

// Usage example
const docVariables = {
  doc: {
    title: "EPOML Developer Guide",
    version: "1.0.0",
    lastUpdated: "2024-01-15",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        level: 2,
        content: "EPOML is a JSX-based template engine designed for dynamic text generation. It provides a powerful way to create reusable templates with variable interpolation and component composition.",
        examples: [
          {
            description: "Basic template with variable substitution",
            language: "javascript",
            code: `import { epomlparse } from 'epoml';

const template = \`<p>Hello, {name}!</p>\`;
const result = await epomlparse(template, { name: "World" });
console.log(result); // "Hello, World!"`
          }
        ]
      },
      {
        id: "installation", 
        title: "Installation",
        level: 2,
        content: "Install EPOML using your preferred package manager:",
        examples: [
          {
            description: "Install via npm",
            language: "bash",
            code: "npm install epoml"
          },
          {
            description: "Install via yarn",
            language: "bash", 
            code: "yarn add epoml"
          }
        ]
      },
      {
        id: "usage",
        title: "Usage",
        level: 2,
        content: "Getting started with EPOML is straightforward. Import the necessary functions and start creating templates.",
        subsections: [
          {
            title: "Basic Usage",
            content: "The simplest way to use EPOML is with the `epomlparse` function:"
          },
          {
            title: "Advanced Features", 
            content: "EPOML supports custom components, multiple output formats, and complex variable structures."
          }
        ],
        examples: [
          {
            description: "Complete example with components",
            language: "javascript",
            code: `import { epomlparse } from 'epoml';

const template = \`
  <div>
    <Header level={1}>{title}</Header>
    <Bold>Important:</Bold> {message}
    <Code lang="javascript">{codeExample}</Code>
  </div>
\`;

const variables = {
  title: "My Document",
  message: "This is a sample message.",
  codeExample: "console.log('Hello, EPOML!');"
};

const result = await epomlparse(template, variables);`
          }
        ]
      }
    ],
    footer: "For more information, visit our GitHub repository or contact support."
  }
};

async function generateDocumentation() {
  try {
    const result = await epomlparse(documentationTemplate, docVariables);
    console.log(result);
    return result;
  } catch (error) {
    console.error('Documentation generation failed:', error);
  }
}
```

## API Documentation Template

```typescript
const apiDocTemplate = `
  <div>
    <Header level={1}>{api.title}</Header>
    
    <CaptionedParagraph caption="Base URL" captionStyle="bold">
      <Code>{api.baseUrl}</Code>
    </CaptionedParagraph>
    
    <CaptionedParagraph caption="Version" captionStyle="bold">
      {api.version}
    </CaptionedParagraph>
    
    <Header level={2}>Authentication</Header>
    <p>{api.authentication.description}</p>
    
    <CaptionedParagraph caption="Example" captionStyle="bold">
      Include the following header in your requests:
    </CaptionedParagraph>
    
    <Code inline={false} lang="http">
      Authorization: Bearer YOUR_API_KEY
    </Code>
    
    <Header level={2}>Endpoints</Header>
    
    {api.endpoints.map(endpoint => `
      <Header level={3}>{endpoint.method} {endpoint.path}</Header>
      
      <p>{endpoint.description}</p>
      
      ${endpoint.parameters ? `
        <Header level={4}>Parameters</Header>
        <ul>
          ${endpoint.parameters.map(param => `
            <li>
              <Bold>${param.name}</Bold> (${param.type}${param.required ? ', required' : ', optional'})
              - ${param.description}
            </li>
          `).join('')}
        </ul>
      ` : ''}
      
      <CaptionedParagraph caption="Request Example" captionStyle="bold">
        <Code inline={false} lang="bash">
          curl -X ${endpoint.method} "${api.baseUrl}${endpoint.path}" \\
            -H "Authorization: Bearer YOUR_API_KEY"${endpoint.method !== 'GET' ? ' \\' : ''}${endpoint.method !== 'GET' ? `
            -H "Content-Type: application/json" \\
            -d '${JSON.stringify(endpoint.requestExample || {}, null, 2)}'` : ''}
        </Code>
      </CaptionedParagraph>
      
      <CaptionedParagraph caption="Response Example" captionStyle="bold">
        <Code inline={false} lang="json">
          ${JSON.stringify(endpoint.responseExample, null, 2)}
        </Code>
      </CaptionedParagraph>
      
      ${endpoint.errorCodes ? `
        <Header level={4}>Error Codes</Header>
        <ul>
          ${endpoint.errorCodes.map(error => `
            <li><Bold>${error.code}</Bold> - ${error.description}</li>
          `).join('')}
        </ul>
      ` : ''}
    `).join('')}
  </div>
`;

const apiVariables = {
  api: {
    title: "User Management API",
    baseUrl: "https://api.example.com/v1",
    version: "1.0",
    authentication: {
      description: "This API uses Bearer token authentication. Include your API key in the Authorization header."
    },
    endpoints: [
      {
        method: "GET",
        path: "/users",
        description: "Retrieve a list of all users",
        parameters: [
          {
            name: "limit",
            type: "integer",
            required: false,
            description: "Maximum number of users to return (default: 10)"
          },
          {
            name: "offset", 
            type: "integer",
            required: false,
            description: "Number of users to skip for pagination (default: 0)"
          }
        ],
        responseExample: {
          users: [
            {
              id: 1,
              name: "John Doe",
              email: "john@example.com",
              createdAt: "2024-01-15T10:30:00Z"
            }
          ],
          total: 1,
          limit: 10,
          offset: 0
        },
        errorCodes: [
          { code: 401, description: "Unauthorized - Invalid API key" },
          { code: 403, description: "Forbidden - Insufficient permissions" }
        ]
      },
      {
        method: "POST",
        path: "/users",
        description: "Create a new user",
        parameters: [
          {
            name: "name",
            type: "string",
            required: true,
            description: "User's full name"
          },
          {
            name: "email",
            type: "string", 
            required: true,
            description: "User's email address"
          }
        ],
        requestExample: {
          name: "Jane Smith",
          email: "jane@example.com"
        },
        responseExample: {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          createdAt: "2024-01-15T11:00:00Z"
        },
        errorCodes: [
          { code: 400, description: "Bad Request - Invalid input data" },
          { code: 409, description: "Conflict - Email already exists" }
        ]
      }
    ]
  }
};
```

## Feature Documentation Template

```typescript
const featureDocTemplate = `
  <div>
    <Header level={1}>{feature.name}</Header>
    
    {feature.status && (
      <p><Bold>Status:</Bold> {feature.status}</p>
    )}
    
    {feature.version && (
      <p><Bold>Available since:</Bold> {feature.version}</p>
    )}
    
    <Header level={2}>Overview</Header>
    <p>{feature.overview}</p>
    
    {feature.benefits && (
      <div>
        <Header level={2}>Benefits</Header>
        <ul>
          {feature.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
      </div>
    )}
    
    <Header level={2}>How to Use</Header>
    
    {feature.steps.map((step, index) => `
      <CaptionedParagraph caption="Step ${index + 1}: ${step.title}" captionStyle="header">
        {step.description}
        
        ${step.code ? `
          <Code inline={false} lang="${step.language || 'javascript'}">
            ${step.code}
          </Code>
        ` : ''}
        
        ${step.note ? `
          <p><Bold>Note:</Bold> ${step.note}</p>
        ` : ''}
      </CaptionedParagraph>
    `).join('')}
    
    {feature.examples && (
      <div>
        <Header level={2}>Examples</Header>
        
        {feature.examples.map(example => `
          <CaptionedParagraph caption="${example.title}" captionStyle="header">
            ${example.description}
            
            <Code inline={false} lang="${example.language}">
              ${example.code}
            </Code>
            
            ${example.output ? `
              <CaptionedParagraph caption="Output" captionStyle="bold">
                <Code inline={false}>
                  ${example.output}
                </Code>
              </CaptionedParagraph>
            ` : ''}
          </CaptionedParagraph>
        `).join('')}
      </div>
    )}
    
    {feature.troubleshooting && (
      <div>
        <Header level={2}>Troubleshooting</Header>
        
        {feature.troubleshooting.map(issue => `
          <CaptionedParagraph caption="Issue: ${issue.problem}" captionStyle="bold">
            <Bold>Solution:</Bold> ${issue.solution}
            
            ${issue.example ? `
              <Code inline={false} lang="${issue.language || 'javascript'}">
                ${issue.example}
              </Code>
            ` : ''}
          </CaptionedParagraph>
        `).join('')}
      </div>
    )}
    
    {feature.seeAlso && (
      <div>
        <Header level={2}>See Also</Header>
        <ul>
          {feature.seeAlso.map(link => `
            <li><a href="${link.url}">${link.title}</a></li>
          `).join('')}
        </ul>
      </div>
    )}
  </div>
`;

const featureVariables = {
  feature: {
    name: "Template Variables",
    status: "Stable",
    version: "1.0.0",
    overview: "Template variables allow you to inject dynamic content into EPOML templates, making them reusable and adaptable for different contexts.",
    benefits: [
      "Dynamic content generation",
      "Template reusability",
      "Type-safe variable handling",
      "Support for complex data structures"
    ],
    steps: [
      {
        title: "Define Variables",
        description: "Create an object containing the data you want to inject into your template.",
        code: `const variables = {
  user: {
    name: "Alice",
    email: "alice@example.com"
  },
  count: 42
};`,
        note: "Variables can be any valid JavaScript value including objects, arrays, and functions."
      },
      {
        title: "Use Variables in Template", 
        description: "Reference variables in your template using curly brace syntax.",
        code: `const template = \`
  <p>Hello, {user.name}!</p>
  <p>Your email is {user.email}</p>
  <p>Count: {count}</p>
\`;`
      },
      {
        title: "Parse Template",
        description: "Use epomlparse to render the template with your variables.",
        code: `const result = await epomlparse(template, variables);
console.log(result);`
      }
    ],
    examples: [
      {
        title: "Basic Variable Usage",
        description: "Simple string and number variable replacement:",
        language: "javascript",
        code: `const template = \`<p>Hello, {name}! You are {age} years old.</p>\`;
const variables = { name: "Bob", age: 30 };
const result = await epomlparse(template, variables);`,
        output: "Hello, Bob! You are 30 years old."
      },
      {
        title: "Object Properties",
        description: "Accessing nested object properties:",
        language: "javascript", 
        code: `const template = \`<p>{user.profile.firstName} {user.profile.lastName}</p>\`;
const variables = {
  user: {
    profile: {
      firstName: "Jane",
      lastName: "Doe"
    }
  }
};`,
        output: "Jane Doe"
      }
    ],
    troubleshooting: [
      {
        problem: "Variable not found error",
        solution: "Ensure all referenced variables exist in the variables object. Use optional chaining for nested properties.",
        example: `// Safe access to potentially undefined properties
const template = \`<p>{user?.name || 'Anonymous'}</p>\`;`
      },
      {
        problem: "Variable value is undefined",
        solution: "Provide default values using logical OR operator.",
        example: `const template = \`<p>Theme: {settings.theme || 'default'}</p>\`;`
      }
    ],
    seeAlso: [
      { title: "Custom Components", url: "/docs/custom-components" },
      { title: "API Reference", url: "/docs/api-reference" }
    ]
  }
};
```

## Usage

```typescript
// Generate different types of documentation
async function generateAllDocs() {
  console.log("=== User Guide ===");
  await generateDocumentation();
  
  console.log("\n=== API Documentation ===");
  const apiDoc = await epomlparse(apiDocTemplate, apiVariables);
  console.log(apiDoc);
  
  console.log("\n=== Feature Documentation ===");
  const featureDoc = await epomlparse(featureDocTemplate, featureVariables);
  console.log(featureDoc);
}

generateAllDocs().catch(console.error);
```

These templates provide a solid foundation for generating comprehensive documentation. They can be customized and extended based on your specific documentation needs, whether you're documenting APIs, features, or complete user guides.