# ExampleInput Component

The `ExampleInput` component is used to display example input data or parameters in documentation, API references, and tutorials. It supports multiple output formats and includes template variable processing for dynamic content.

## Props

```typescript
interface ExampleInputProps extends BaseComponentProps {
  label?: string;           // Label for the example input
  inline?: boolean;         // Whether to render as inline (default: false)
  format?: string;          // Input format/type (e.g., 'json', 'yaml', 'xml')
  templateVars?: Record<string, any>; // Template variables for dynamic content
}
```

### Properties

- **`label`** (optional): A descriptive label for the example input
- **`inline`** (optional): When `true`, renders the input in a compact inline format
- **`format`** (optional): Specifies the format type for syntax highlighting and proper formatting
- **`templateVars`** (optional): Object containing variables for template interpolation
- **`syntax`** (inherited): Output format - 'markdown', 'html', 'json', 'yaml', 'xml', or 'text'
- **`className`** (inherited): CSS class name for styling
- **`speaker`** (inherited): Attribution for the content ('human', 'ai', 'system')

## Basic Usage

### Simple Input Example

```jsx
<ExampleInput label="API Request">
{"username": "alice", "action": "login"}
</ExampleInput>
```

**Output (Markdown):**
```
**API Request**

```
{"username": "alice", "action": "login"}
```
```

### Inline Input Example

```jsx
<ExampleInput label="Username" inline={true}>
alice
</ExampleInput>
```

**Output (Markdown):**
```
**Username:** `alice`
```

### Formatted Input Example

```jsx
<ExampleInput label="Login Request" format="json">
{
  "username": "alice",
  "password": "secret123",
  "rememberMe": true
}
</ExampleInput>
```

**Output (Markdown):**
```
**Login Request**

```json
{
  "username": "alice",
  "password": "secret123",
  "rememberMe": true
}
```
```

## Template Variables

The `ExampleInput` component supports template variable interpolation in the label:

```jsx
const variables = {
  endpoint: "login",
  version: "v2"
};

<ExampleInput 
  label="API {endpoint} Request ({version})" 
  format="json"
  templateVars={variables}
>
{
  "username": "{username}",
  "action": "{endpoint}"
}
</ExampleInput>
```

**Output:**
```
**API login Request (v2)**

```json
{
  "username": "{username}",
  "action": "{endpoint}"
}
```
```

## Different Output Formats

### HTML Output

```jsx
<ExampleInput 
  label="User Input" 
  format="json"
  syntax="html"
>
{"name": "John", "age": 30}
</ExampleInput>
```

**Output:**
```html
<span class="example-input">
  <strong>User Input:</strong> 
  <code>{"name": "John", "age": 30}</code>
</span>
```

### JSON Output

```jsx
<ExampleInput 
  label="Sample Data" 
  format="json"
  syntax="json"
>
{"key": "value"}
</ExampleInput>
```

**Output:**
```json
{
  "label": "Sample Data",
  "inline": false,
  "format": "json",
  "content": "{\"key\": \"value\"}"
}
```

### YAML Output

```jsx
<ExampleInput 
  label="Configuration" 
  format="yaml"
  syntax="yaml"
>
database:
  host: localhost
  port: 5432
</ExampleInput>
```

**Output:**
```yaml
label: "Configuration"
inline: false
format: "yaml"
content: |
  database:
    host: localhost
    port: 5432
```

### XML Output

```jsx
<ExampleInput 
  label="Request Body" 
  format="xml"
  syntax="xml"
>
<user><name>John</name><age>30</age></user>
</ExampleInput>
```

**Output:**
```xml
<exampleInput label="Request Body" format="xml" inline="false">
  <content>&lt;user&gt;&lt;name&gt;John&lt;/name&gt;&lt;age&gt;30&lt;/age&gt;&lt;/user&gt;</content>
</exampleInput>
```

### Text Output

```jsx
<ExampleInput 
  label="Command Line" 
  format="bash"
  syntax="text"
>
npm install epoml
</ExampleInput>
```

**Output:**
```
INPUT: Command Line
==================

Format: bash

Content:
-------
npm install epoml
```

## Advanced Examples

### API Documentation

```jsx
<ExampleInput 
  label="Create User Request" 
  format="json"
  templateVars={{ apiVersion: "v1", endpoint: "users" }}
>
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "role": "user",
  "permissions": ["read", "write"],
  "metadata": {
    "source": "api",
    "version": "{apiVersion}"
  }
}
</ExampleInput>
```

### Configuration Examples

```jsx
<ExampleInput 
  label="Database Configuration" 
  format="yaml"
  templateVars={{ env: "production" }}
>
database:
  host: db.{env}.example.com
  port: 5432
  name: myapp_{env}
  ssl: true
  pool:
    min: 5
    max: 20
    idle: 30000
</ExampleInput>
```

### Command Line Examples

```jsx
<ExampleInput 
  label="Installation Command" 
  format="bash"
  inline={true}
>
npm install --save epoml
</ExampleInput>
```

## Styling and Customization

### Custom CSS Classes

```jsx
<ExampleInput 
  label="Styled Input" 
  className="custom-input-style"
  format="json"
>
{"customized": true}
</ExampleInput>
```

### Speaker Attribution

```jsx
<ExampleInput 
  label="System Input" 
  speaker="system"
  format="json"
>
{"type": "system", "level": "info"}
</ExampleInput>
```

## Best Practices

1. **Use descriptive labels** to help users understand the context of the input
2. **Specify format** when showing code or structured data for proper syntax highlighting
3. **Use inline format** for short, simple inputs to save space
4. **Include template variables** when showing dynamic examples
5. **Pair with ExampleOutput** to show complete input/output workflows

## Common Use Cases

- **API Documentation**: Show request payloads and parameters
- **Configuration Guides**: Display configuration file contents
- **Code Examples**: Present function inputs and method parameters
- **Tutorial Steps**: Illustrate data that users should input
- **Testing Documentation**: Show test data and mock inputs

## Related Components

- [`ExampleOutput`](./ExampleOutput.md) - For displaying example outputs and results
- [`ExampleSet`](./ExampleSet.md) - For grouping related input/output examples
- [`Code`](./Code.md) - For general code display without input/output semantics
- [`Object`](./Object.md) - For displaying structured object data