# ExampleOutput Component

The `ExampleOutput` component is used to display example output data, results, or responses in documentation, API references, and tutorials. It complements `ExampleInput` to show complete workflows and supports multiple output formats with template variable processing.

## Props

```typescript
interface ExampleOutputProps extends BaseComponentProps {
  label?: string;           // Label for the example output
  inline?: boolean;         // Whether to render as inline (default: false)
  format?: string;          // Output format/type (e.g., 'json', 'yaml', 'xml')
  templateVars?: Record<string, any>; // Template variables for dynamic content
}
```

### Properties

- **`label`** (optional): A descriptive label for the example output
- **`inline`** (optional): When `true`, renders the output in a compact inline format
- **`format`** (optional): Specifies the format type for syntax highlighting and proper formatting
- **`templateVars`** (optional): Object containing variables for template interpolation
- **`syntax`** (inherited): Output format - 'markdown', 'html', 'json', 'yaml', 'xml', or 'text'
- **`className`** (inherited): CSS class name for styling
- **`speaker`** (inherited): Attribution for the content ('human', 'ai', 'system')

## Basic Usage

### Simple Output Example

```jsx
<ExampleOutput label="API Response">
{"success": true, "token": "abc123", "user": {"id": 1, "name": "Alice"}}
</ExampleOutput>
```

**Output (Markdown):**
```
**API Response**

```
{"success": true, "token": "abc123", "user": {"id": 1, "name": "Alice"}}
```
```

### Inline Output Example

```jsx
<ExampleOutput label="Status" inline={true}>
success
</ExampleOutput>
```

**Output (Markdown):**
```
**Status:** `success`
```

### Formatted Output Example

```jsx
<ExampleOutput label="Login Response" format="json">
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 12345,
    "username": "alice",
    "email": "alice@example.com",
    "roles": ["user", "admin"]
  },
  "expires": "2024-01-15T18:30:00Z"
}
</ExampleOutput>
```

**Output (Markdown):**
```
**Login Response**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 12345,
    "username": "alice",
    "email": "alice@example.com",
    "roles": ["user", "admin"]
  },
  "expires": "2024-01-15T18:30:00Z"
}
```
```

## Template Variables

The `ExampleOutput` component supports template variable interpolation in the label:

```jsx
const variables = {
  operation: "create",
  resource: "user",
  status: "success"
};

<ExampleOutput 
  label="{operation} {resource} Response ({status})" 
  format="json"
  templateVars={variables}
>
{
  "id": 123,
  "status": "{status}",
  "message": "{resource} created successfully"
}
</ExampleOutput>
```

**Output:**
```
**create user Response (success)**

```json
{
  "id": 123,
  "status": "{status}",
  "message": "{resource} created successfully"
}
```
```

## Different Output Formats

### HTML Output

```jsx
<ExampleOutput 
  label="User Data" 
  format="json"
  syntax="html"
>
{"name": "John", "age": 30, "active": true}
</ExampleOutput>
```

**Output:**
```html
<span class="example-output">
  <strong>User Data:</strong> 
  <code>{"name": "John", "age": 30, "active": true}</code>
</span>
```

### JSON Output

```jsx
<ExampleOutput 
  label="API Result" 
  format="json"
  syntax="json"
>
{"result": "processed", "count": 42}
</ExampleOutput>
```

**Output:**
```json
{
  "label": "API Result",
  "inline": false,
  "format": "json",
  "content": "{\"result\": \"processed\", \"count\": 42}"
}
```

### YAML Output

```jsx
<ExampleOutput 
  label="Service Status" 
  format="yaml"
  syntax="yaml"
>
status: running
services:
  - name: web
    port: 3000
    healthy: true
  - name: database
    port: 5432
    healthy: true
</ExampleOutput>
```

**Output:**
```yaml
label: "Service Status"
inline: false
format: "yaml"
content: |
  status: running
  services:
    - name: web
      port: 3000
      healthy: true
    - name: database
      port: 5432
      healthy: true
```

### XML Output

```jsx
<ExampleOutput 
  label="Response Data" 
  format="xml"
  syntax="xml"
>
<response>
  <status>success</status>
  <data>
    <user id="123">
      <name>John Doe</name>
      <email>john@example.com</email>
    </user>
  </data>
</response>
</ExampleOutput>
```

**Output:**
```xml
<exampleOutput label="Response Data" format="xml" inline="false">
  <content>&lt;response&gt;
  &lt;status&gt;success&lt;/status&gt;
  &lt;data&gt;
    &lt;user id=&quot;123&quot;&gt;
      &lt;name&gt;John Doe&lt;/name&gt;
      &lt;email&gt;john@example.com&lt;/email&gt;
    &lt;/user&gt;
  &lt;/data&gt;
&lt;/response&gt;</content>
</exampleOutput>
```

### Text Output

```jsx
<ExampleOutput 
  label="Command Result" 
  format="bash"
  syntax="text"
>
Package installed successfully!
Total size: 2.3MB
Time: 1.2s
</ExampleOutput>
```

**Output:**
```
OUTPUT: Command Result
=====================

Format: bash

Content:
-------
Package installed successfully!
Total size: 2.3MB
Time: 1.2s
```

## Advanced Examples

### API Response Documentation

```jsx
<ExampleOutput 
  label="Get User Profile Response" 
  format="json"
  templateVars={{ userId: "12345", timestamp: "2024-01-15T10:30:00Z" }}
>
{
  "user": {
    "id": "{userId}",
    "username": "johndoe",
    "profile": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "avatar": "https://api.example.com/avatars/{userId}.jpg",
      "preferences": {
        "theme": "dark",
        "language": "en",
        "timezone": "UTC"
      }
    },
    "metadata": {
      "created": "2023-06-15T09:20:00Z",
      "lastLogin": "{timestamp}",
      "loginCount": 247
    }
  },
  "success": true,
  "timestamp": "{timestamp}"
}
</ExampleOutput>
```

### Error Response Examples

```jsx
<ExampleOutput 
  label="Validation Error Response" 
  format="json"
  templateVars={{ errorCode: "VALIDATION_ERROR" }}
>
{
  "success": false,
  "error": {
    "code": "{errorCode}",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      },
      {
        "field": "age",
        "message": "Age must be between 18 and 100"
      }
    ]
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
</ExampleOutput>
```

### Processing Results

```jsx
<ExampleOutput 
  label="Batch Processing Result" 
  format="yaml"
>
processedAt: "2024-01-15T10:30:00Z"
totalItems: 1000
processed: 995
failed: 5
summary:
  created: 800
  updated: 195
  errors:
    - item: 23
      error: "Invalid format"
    - item: 156
      error: "Duplicate entry"
    - item: 445
      error: "Missing required field"
    - item: 667
      error: "Data too long"
    - item: 889
      error: "Invalid reference"
</ExampleOutput>
```

## Input/Output Workflows

Combine with `ExampleInput` to show complete workflows:

```jsx
<div>
  <ExampleInput 
    label="Create Product Request" 
    format="json"
  >
  {
    "name": "Wireless Headphones",
    "category": "electronics",
    "price": 199.99,
    "description": "High-quality wireless headphones",
    "inventory": 50
  }
  </ExampleInput>

  <ExampleOutput 
    label="Create Product Response" 
    format="json"
  >
  {
    "success": true,
    "product": {
      "id": "prod_abc123",
      "name": "Wireless Headphones",
      "category": "electronics",
      "price": 199.99,
      "description": "High-quality wireless headphones",
      "inventory": 50,
      "created": "2024-01-15T10:30:00Z",
      "sku": "WH-001"
    },
    "message": "Product created successfully"
  }
  </ExampleOutput>
</div>
```

## Styling and Customization

### Custom CSS Classes

```jsx
<ExampleOutput 
  label="Success Response" 
  className="success-output"
  format="json"
>
{"status": "success", "code": 200}
</ExampleOutput>
```

### Speaker Attribution

```jsx
<ExampleOutput 
  label="System Response" 
  speaker="system"
  format="json"
>
{"type": "system", "message": "Operation completed"}
</ExampleOutput>
```

## Best Practices

1. **Use descriptive labels** that clearly indicate what the output represents
2. **Specify format** for proper syntax highlighting and formatting
3. **Use inline format** for short, simple outputs to conserve space
4. **Include template variables** for dynamic examples and reusable templates
5. **Pair with ExampleInput** to show complete request/response workflows
6. **Show error cases** alongside success cases for comprehensive documentation

## Common Use Cases

- **API Documentation**: Display response payloads and return values
- **Tutorial Results**: Show expected outcomes of operations
- **Testing Documentation**: Present expected test results and outputs
- **Configuration Results**: Display the effects of configuration changes
- **Process Documentation**: Illustrate the results of workflows and procedures

## Related Components

- [`ExampleInput`](./ExampleInput.md) - For displaying example inputs and parameters
- [`ExampleSet`](./ExampleSet.md) - For grouping related input/output examples
- [`Code`](./Code.md) - For general code display without input/output semantics
- [`Object`](./Object.md) - For displaying structured object data