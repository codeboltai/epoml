# ExampleSet Component

The `ExampleSet` component is used to group and organize related example inputs and outputs together. It provides a structured way to present multiple examples with consistent formatting and optional features like titles, descriptions, and example limits.

## Props

```typescript
interface ExampleSetProps extends BaseComponentProps {
  title?: string;           // Title for the example set
  description?: string;     // Description of the example set
  inline?: boolean;         // Whether to render examples inline (default: false)
  limit?: number;           // Number of examples to show (for truncation)
  templateVars?: Record<string, any>; // Template variables for dynamic content
}
```

### Properties

- **`title`** (optional): A descriptive title for the entire example set
- **`description`** (optional): Additional context or explanation for the examples
- **`inline`** (optional): When `true`, renders examples in a compact inline format
- **`limit`** (optional): Maximum number of examples to display (useful for long lists)
- **`templateVars`** (optional): Object containing variables for template interpolation
- **`syntax`** (inherited): Output format - 'markdown', 'html', 'json', 'yaml', 'xml', or 'text'
- **`className`** (inherited): CSS class name for styling
- **`speaker`** (inherited): Attribution for the content ('human', 'ai', 'system')

## Basic Usage

### Simple Example Set

```jsx
<ExampleSet 
  title="Color Examples" 
  description="Various color representations"
>
  red
  green
  blue
  yellow
</ExampleSet>
```

**Output (Markdown):**
```
## Color Examples

Various color representations

**Examples:**

1. red
2. green
3. blue
4. yellow
```

### Inline Example Set

```jsx
<ExampleSet 
  title="Status Codes" 
  inline={true}
>
  200
  404
  500
</ExampleSet>
```

**Output (Markdown):**
```
## Status Codes

**Examples:** 200, 404, 500
```

### Limited Example Set

```jsx
<ExampleSet 
  title="HTTP Methods" 
  description="Common HTTP methods used in REST APIs"
  limit={3}
>
  GET
  POST
  PUT
  DELETE
  PATCH
  HEAD
  OPTIONS
</ExampleSet>
```

**Output (Markdown):**
```
## HTTP Methods

Common HTTP methods used in REST APIs

**Examples:**

1. GET
2. POST
3. PUT
```

## Template Variables

The `ExampleSet` component supports template variable interpolation in title and description:

```jsx
const variables = {
  apiVersion: "v2",
  totalExamples: 5,
  category: "authentication"
};

<ExampleSet 
  title="{category} Examples (API {apiVersion})"
  description="Showing {totalExamples} examples for the {category} module"
  templateVars={variables}
>
  /api/v2/login
  /api/v2/logout
  /api/v2/refresh
  /api/v2/profile
  /api/v2/settings
</ExampleSet>
```

**Output:**
```
## authentication Examples (API v2)

Showing 5 examples for the authentication module

**Examples:**

1. /api/v2/login
2. /api/v2/logout
3. /api/v2/refresh
4. /api/v2/profile
5. /api/v2/settings
```

## Different Output Formats

### HTML Output

```jsx
<ExampleSet 
  title="File Extensions" 
  description="Common file types"
  syntax="html"
>
  .txt
  .pdf
  .docx
</ExampleSet>
```

**Output:**
```html
<div class="example-set">
  <h3>File Extensions</h3>
  <p>Common file types</p>
  <div class="examples">
    <strong>Examples:</strong>
    <ol>
      <li>.txt</li>
      <li>.pdf</li>
      <li>.docx</li>
    </ol>
  </div>
</div>
```

### JSON Output

```jsx
<ExampleSet 
  title="Programming Languages" 
  description="Popular languages"
  syntax="json"
>
  JavaScript
  Python
  Java
</ExampleSet>
```

**Output:**
```json
{
  "title": "Programming Languages",
  "description": "Popular languages",
  "inline": false,
  "examples": [
    "JavaScript",
    "Python",
    "Java"
  ]
}
```

### YAML Output

```jsx
<ExampleSet 
  title="Database Types" 
  syntax="yaml"
>
  MySQL
  PostgreSQL
  MongoDB
</ExampleSet>
```

**Output:**
```yaml
title: "Database Types"
inline: false
examples:
  - "MySQL"
  - "PostgreSQL"
  - "MongoDB"
```

### XML Output

```jsx
<ExampleSet 
  title="HTTP Status Codes" 
  description="Common status codes"
  syntax="xml"
>
  200 OK
  404 Not Found
  500 Internal Server Error
</ExampleSet>
```

**Output:**
```xml
<exampleSet title="HTTP Status Codes" inline="false">
  <description>Common status codes</description>
  <examples>
    <example>200 OK</example>
    <example>404 Not Found</example>
    <example>500 Internal Server Error</example>
  </examples>
</exampleSet>
```

### Text Output

```jsx
<ExampleSet 
  title="Command Line Tools" 
  description="Essential CLI utilities"
  syntax="text"
>
  git
  npm
  docker
  kubectl
</ExampleSet>
```

**Output:**
```
EXAMPLE SET: Command Line Tools
==============================

Essential CLI utilities

Examples:
--------

1. git
2. npm
3. docker
4. kubectl
```

## Advanced Examples

### API Endpoint Examples

```jsx
<ExampleSet 
  title="User Management Endpoints"
  description="REST API endpoints for user operations"
  templateVars={{ baseUrl: "https://api.example.com", version: "v1" }}
>
  GET {baseUrl}/{version}/users
  POST {baseUrl}/{version}/users
  GET {baseUrl}/{version}/users/:id
  PUT {baseUrl}/{version}/users/:id
  DELETE {baseUrl}/{version}/users/:id
</ExampleSet>
```

### Configuration Examples

```jsx
<ExampleSet 
  title="Environment Variables"
  description="Required environment variables for the application"
  limit={4}
>
  NODE_ENV=production
  PORT=3000
  DATABASE_URL=postgresql://user:pass@localhost:5432/db
  JWT_SECRET=your-secret-key
  REDIS_URL=redis://localhost:6379
  LOG_LEVEL=info
  MAIL_SERVICE=gmail
</ExampleSet>
```

### Code Snippet Examples

```jsx
<ExampleSet 
  title="Array Methods"
  description="Common JavaScript array operations"
  inline={false}
>
  array.push(item)
  array.pop()
  array.shift()
  array.unshift(item)
  array.splice(index, 1)
  array.slice(start, end)
  array.indexOf(item)
  array.includes(item)
</ExampleSet>
```

### Error Message Examples

```jsx
<ExampleSet 
  title="Validation Errors"
  description="Common validation error messages"
  templateVars={{ field: "email" }}
  limit={3}
>
  {field} is required
  {field} must be a valid email address
  {field} is already taken
  {field} must be at least 6 characters long
  {field} contains invalid characters
</ExampleSet>
```

## Combining with Other Components

### With ExampleInput and ExampleOutput

```jsx
<ExampleSet 
  title="Authentication Flow Examples"
  description="Complete request/response examples for authentication"
>
  <ExampleInput 
    label="Login Request" 
    format="json"
  >
  {
    "username": "alice",
    "password": "secret123"
  }
  </ExampleInput>
  
  <ExampleOutput 
    label="Login Response" 
    format="json"
  >
  {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {"id": 1, "username": "alice"}
  }
  </ExampleOutput>
  
  <ExampleInput 
    label="Profile Request" 
    format="json"
  >
  {
    "headers": {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIs..."
    }
  }
  </ExampleInput>
  
  <ExampleOutput 
    label="Profile Response" 
    format="json"
  >
  {
    "user": {
      "id": 1,
      "username": "alice",
      "email": "alice@example.com",
      "profile": {
        "firstName": "Alice",
        "lastName": "Smith"
      }
    }
  }
  </ExampleOutput>
</ExampleSet>
```

## Styling and Customization

### Custom CSS Classes

```jsx
<ExampleSet 
  title="Styled Examples" 
  className="custom-example-set"
  description="Examples with custom styling"
>
  Example 1
  Example 2
  Example 3
</ExampleSet>
```

### Speaker Attribution

```jsx
<ExampleSet 
  title="System Examples" 
  speaker="system"
  description="System-generated examples"
>
  system.log.info
  system.log.warn
  system.log.error
</ExampleSet>
```

## Best Practices

1. **Use descriptive titles** that clearly indicate the purpose of the example set
2. **Provide context** with descriptions when examples might not be self-explanatory
3. **Use limits** for long lists to avoid overwhelming readers
4. **Choose appropriate inline/block** format based on example complexity
5. **Group related examples** logically and consistently
6. **Include template variables** for dynamic content and reusable documentation

## Common Use Cases

- **API Documentation**: Group related endpoints, parameters, or responses
- **Configuration Guides**: Show sets of related configuration options
- **Code Examples**: Present collections of code snippets or methods
- **Tutorial Steps**: Organize examples that build upon each other
- **Reference Documentation**: Create comprehensive example libraries
- **Testing Documentation**: Group test cases and expected results

## Performance Considerations

- Use the `limit` prop to control the number of examples displayed
- Consider inline format for simple, short examples to save space
- Group logically related examples together for better organization

## Related Components

- [`ExampleInput`](./ExampleInput.md) - For displaying individual example inputs
- [`ExampleOutput`](./ExampleOutput.md) - For displaying individual example outputs
- [`Code`](./Code.md) - For general code display without grouping semantics
- [`Table`](./Table.md) - For tabular presentation of structured example data