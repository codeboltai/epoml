# OutputFormat Component

The `OutputFormat` component is used to specify and document different output formats supported by APIs, systems, or processes. It provides comprehensive information about format types, descriptions, examples, schemas, and preferences with support for template variables.

## Props

```typescript
interface OutputFormatProps extends BaseComponentProps {
  type: 'json' | 'xml' | 'csv' | 'yaml' | 'text' | 'markdown' | 'html'; // Required format type
  description?: string;         // Description of the format
  example?: string;            // Example of the format
  schema?: any;                // Schema definition for the format
  preferred?: boolean;         // Whether this is the preferred format (default: false)
  templateVars?: Record<string, any>; // Template variables for dynamic content
}
```

### Properties

- **`type`** (required): The output format type - one of 'json', 'xml', 'csv', 'yaml', 'text', 'markdown', or 'html'
- **`description`** (optional): A detailed description of the format and its use cases
- **`example`** (optional): Sample content demonstrating the format
- **`schema`** (optional): Schema definition or structure specification for the format
- **`preferred`** (optional): Mark this format as preferred (displays with a star indicator)
- **`templateVars`** (optional): Object containing variables for template interpolation
- **`syntax`** (inherited): Output format - 'markdown', 'html', 'json', 'yaml', 'xml', or 'text'
- **`className`** (inherited): CSS class name for styling
- **`speaker`** (inherited): Attribution for the content ('human', 'ai', 'system')

## Basic Usage

### Simple Format Specification

```jsx
<OutputFormat 
  type="json"
  description="JavaScript Object Notation - lightweight data interchange format"
/>
```

**Output (Markdown):**
```
## Output Format: json

**Description:** JavaScript Object Notation - lightweight data interchange format
```

### Preferred Format

```jsx
<OutputFormat 
  type="json"
  description="Recommended format for API responses"
  preferred={true}
/>
```

**Output (Markdown):**
```
## Output Format: json 🌟 (Preferred)

**Description:** Recommended format for API responses
```

### Format with Example

```jsx
<OutputFormat 
  type="json"
  description="User profile data in JSON format"
  example={`{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "active": true
}`}
/>
```

**Output (Markdown):**
```
## Output Format: json

**Description:** User profile data in JSON format

### Example

```json
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "active": true
}
```
```

### Format with Schema

```jsx
<OutputFormat 
  type="json"
  description="User API response format"
  schema={{
    type: "object",
    properties: {
      id: { type: "number" },
      name: { type: "string" },
      email: { type: "string", format: "email" },
      active: { type: "boolean" }
    },
    required: ["id", "name", "email"]
  }}
/>
```

**Output (Markdown):**
```
## Output Format: json

**Description:** User API response format

### Schema

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "number" },
    "name": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "active": { "type": "boolean" }
  },
  "required": ["id", "name", "email"]
}
```
```

## Template Variables

The `OutputFormat` component supports template variable interpolation in descriptions and examples:

```jsx
const variables = {
  serviceName: "UserService",
  version: "v2",
  responseTime: "< 100ms"
};

<OutputFormat 
  type="json"
  description="JSON format for {serviceName} API {version} with {responseTime} response time"
  templateVars={variables}
  example={`{
  "service": "{serviceName}",
  "version": "{version}",
  "data": { ... }
}`}
/>
```

**Output:**
```
## Output Format: json

**Description:** JSON format for UserService API v2 with < 100ms response time

### Example

```json
{
  "service": "{serviceName}",
  "version": "{version}",
  "data": { ... }
}
```
```

## Different Output Formats

### HTML Output

```jsx
<OutputFormat 
  type="xml"
  description="XML format for data exchange"
  syntax="html"
  preferred={true}
/>
```

**Output:**
```html
<div class="output-format">
  <h2>Output Format: xml 🌟 (Preferred)</h2>
  <p class="format-description"><strong>Description:</strong> XML format for data exchange</p>
</div>
```

### JSON Output

```jsx
<OutputFormat 
  type="yaml"
  description="YAML configuration format"
  syntax="json"
  preferred={false}
/>
```

**Output:**
```json
{
  "type": "yaml",
  "preferred": false,
  "description": "YAML configuration format"
}
```

### YAML Output

```jsx
<OutputFormat 
  type="csv"
  description="Comma-separated values for data export"
  syntax="yaml"
  example="id,name,email\n1,John,john@example.com"
/>
```

**Output:**
```yaml
type: csv
preferred: false
description: YAML configuration format
example: |
  id,name,email
  1,John,john@example.com
```

### XML Output

```jsx
<OutputFormat 
  type="html"
  description="HTML format for web display"
  syntax="xml"
/>
```

**Output:**
```xml
<outputFormat type="html" preferred="false">
  <description>HTML format for web display</description>
</outputFormat>
```

### Text Output

```jsx
<OutputFormat 
  type="text"
  description="Plain text format for simple output"
  syntax="text"
  preferred={true}
/>
```

**Output:**
```
OUTPUT FORMAT: TEXT 🌟 (Preferred)
==================================

Description: Plain text format for simple output
```

## Advanced Examples

### Complete API Format Documentation

```jsx
<OutputFormat 
  type="json"
  description="RESTful API response format with pagination support"
  preferred={true}
  templateVars={{ 
    apiVersion: "v1", 
    maxItems: 100,
    defaultLimit: 20 
  }}
  example={`{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Item 1",
      "created": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": {defaultLimit},
    "total": 250,
    "hasNext": true,
    "hasPrev": false
  },
  "meta": {
    "version": "{apiVersion}",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`}
  schema={{
    type: "object",
    properties: {
      success: { type: "boolean" },
      data: { 
        type: "array",
        items: { type: "object" }
      },
      pagination: {
        type: "object",
        properties: {
          page: { type: "number" },
          limit: { type: "number", maximum: 100 },
          total: { type: "number" },
          hasNext: { type: "boolean" },
          hasPrev: { type: "boolean" }
        }
      },
      meta: { type: "object" }
    },
    required: ["success", "data"]
  }}
/>
```

### Multiple Format Specifications

```jsx
<div>
  <OutputFormat 
    type="json"
    description="Primary format for API responses with full metadata"
    preferred={true}
    example={`{
  "status": "success",
  "data": { ... },
  "timestamp": "2024-01-15T10:30:00Z"
}`}
  />

  <OutputFormat 
    type="xml"
    description="Legacy XML format for backward compatibility"
    example={`<response>
  <status>success</status>
  <data>...</data>
  <timestamp>2024-01-15T10:30:00Z</timestamp>
</response>`}
  />

  <OutputFormat 
    type="csv"
    description="Simplified CSV format for data export"
    example="id,name,status,created\n1,Item 1,active,2024-01-15"
  />
</div>
```

### Configuration Format Examples

```jsx
<OutputFormat 
  type="yaml"
  description="Application configuration format"
  templateVars={{ 
    appName: "MyApp",
    environment: "production" 
  }}
  example={`app:
  name: {appName}
  environment: {environment}
  debug: false
  
database:
  host: localhost
  port: 5432
  name: myapp_prod
  
redis:
  host: localhost
  port: 6379
  db: 0`}
  schema={{
    type: "object",
    properties: {
      app: {
        type: "object",
        properties: {
          name: { type: "string" },
          environment: { type: "string", enum: ["development", "staging", "production"] },
          debug: { type: "boolean" }
        }
      },
      database: { type: "object" },
      redis: { type: "object" }
    }
  }}
/>
```

### Error Format Documentation

```jsx
<OutputFormat 
  type="json"
  description="Standardized error response format"
  templateVars={{ service: "UserAPI" }}
  example={`{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input parameters",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ],
    "timestamp": "2024-01-15T10:30:00Z",
    "service": "{service}"
  }
}`}
  schema={{
    type: "object",
    properties: {
      success: { type: "boolean", const: false },
      error: {
        type: "object",
        properties: {
          code: { type: "string" },
          message: { type: "string" },
          details: { 
            type: "array",
            items: {
              type: "object",
              properties: {
                field: { type: "string" },
                message: { type: "string" }
              }
            }
          },
          timestamp: { type: "string", format: "date-time" },
          service: { type: "string" }
        },
        required: ["code", "message"]
      }
    },
    required: ["success", "error"]
  }}
/>
```

## Format-Specific Examples

### JSON Format

```jsx
<OutputFormat 
  type="json"
  description="JavaScript Object Notation for structured data exchange"
  preferred={true}
  example={`{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "roles": ["admin", "user"]
    },
    {
      "id": 2,
      "name": "Bob",
      "roles": ["user"]
    }
  ],
  "total": 2,
  "page": 1
}`}
/>
```

### XML Format

```jsx
<OutputFormat 
  type="xml"
  description="Extensible Markup Language for hierarchical data representation"
  example={`<?xml version="1.0" encoding="UTF-8"?>
<users total="2" page="1">
  <user id="1">
    <name>Alice</name>
    <roles>
      <role>admin</role>
      <role>user</role>
    </roles>
  </user>
  <user id="2">
    <name>Bob</name>
    <roles>
      <role>user</role>
    </roles>
  </user>
</users>`}
/>
```

### CSV Format

```jsx
<OutputFormat 
  type="csv"
  description="Comma-Separated Values for tabular data export"
  example="id,name,email,active,created
1,Alice Johnson,alice@example.com,true,2024-01-15
2,Bob Smith,bob@example.com,false,2024-01-14
3,Carol Davis,carol@example.com,true,2024-01-13"
/>
```

### YAML Format

```jsx
<OutputFormat 
  type="yaml"
  description="YAML Ain't Markup Language for human-readable configuration"
  example={`users:
  - id: 1
    name: Alice Johnson
    email: alice@example.com
    active: true
    roles:
      - admin
      - user
  - id: 2
    name: Bob Smith
    email: bob@example.com
    active: false
    roles:
      - user
metadata:
  total: 2
  page: 1
  generated: 2024-01-15T10:30:00Z`}
/>
```

## Styling and Customization

### Custom CSS Classes

```jsx
<OutputFormat 
  type="json"
  description="Custom styled format"
  className="api-format-spec"
  preferred={true}
/>
```

### Speaker Attribution

```jsx
<OutputFormat 
  type="xml"
  description="System-generated format specification"
  speaker="system"
/>
```

## Best Practices

1. **Always specify the type** - it's required and provides important context
2. **Use descriptions** to explain when and why to use each format
3. **Provide examples** for complex or unfamiliar formats
4. **Include schemas** for structured data formats like JSON and XML
5. **Mark preferred formats** to guide users toward recommended options
6. **Use template variables** for dynamic format documentation
7. **Group related formats** together for comparison

## Common Use Cases

- **API Documentation**: Specify supported response and request formats
- **Configuration Guides**: Document configuration file formats and options
- **Data Export**: Describe available export formats and their characteristics
- **Integration Guides**: Explain format requirements for third-party integrations
- **Migration Documentation**: Compare old and new format specifications

## Related Components

- [`ExampleInput`](./ExampleInput.md) - For showing input examples in specific formats
- [`ExampleOutput`](./ExampleOutput.md) - For displaying output examples in various formats
- [`Code`](./Code.md) - For general code display with syntax highlighting
- [`Object`](./Object.md) - For displaying structured object data