# DataObject Component

The `DataObject` component is used to display structured object data with proper formatting across multiple output formats. It provides comprehensive support for nested objects, arrays, and complex data structures with enhanced inline rendering and template variable processing.

**Note:** This component was previously named `Object` but has been renamed to `DataObject` to avoid conflicts with JavaScript's built-in `Object`.

## Props

```typescript
interface ObjectProps extends BaseComponentProps {
  data?: any;                   // The object data to display
  title?: string;               // Optional title for the object
  expandLevel?: number;         // How many levels deep to expand (default: 2)
  showTypes?: boolean;          // Whether to show data types (default: false)
  inline?: boolean;             // Whether to render inline (default: false)
  sortKeys?: boolean;           // Whether to sort object keys (default: false)
  templateVars?: Record<string, any>; // Template variables for dynamic content
}
```

### Properties

- **`data`** (optional): The JavaScript object or value to display
- **`title`** (optional): A descriptive title for the object display
- **`expandLevel`** (optional): Controls how many nested levels to show expanded (default: 2)
- **`showTypes`** (optional): Display type annotations alongside values
- **`inline`** (optional): Render in a compact single-line format when possible
- **`sortKeys`** (optional): Alphabetically sort object keys for consistent display
- **`templateVars`** (optional): Object containing variables for template interpolation in the title
- **`syntax`** (inherited): Output format - 'markdown', 'html', 'json', 'yaml', 'xml', or 'text'
- **`className`** (inherited): CSS class name for styling
- **`speaker`** (inherited): Attribution for the content ('human', 'ai', 'system')

## Basic Usage

### Simple Object Display

```jsx
<DataObject 
  data={{
    name: "John Doe",
    age: 30,
    email: "john@example.com"
  }}
/>
```

**Output (Text):**
```
name: John Doe
age: 30
email: john@example.com
```

### Object with Title

```jsx
<DataObject 
  title="User Profile"
  data={{
    id: 123,
    name: "Alice Johnson",
    role: "admin",
    active: true
  }}
/>
```

**Output (Text):**
```
USER PROFILE
============

id: 123
name: Alice Johnson
role: admin
active: true
```

### Inline Object Display

```jsx
<DataObject 
  data={{ status: "active", count: 42 }}
  inline={true}
/>
```

**Output (Text):**
```
{ status: active, count: 42 }
```

### Nested Object with Expand Level

```jsx
<Object 
  title="Configuration"
  data={{
    app: {
      name: "MyApp",
      version: "1.0.0",
      settings: {
        debug: true,
        logging: {
          level: "info",
          file: "/var/log/app.log"
        }
      }
    },
    database: {
      host: "localhost",
      port: 5432
    }
  }}
  expandLevel={3}
/>
```

**Output (Text):**
```
CONFIGURATION
=============

app:
  name: MyApp
  version: 1.0.0
  settings:
    debug: true
    logging:
      level: info
      file: /var/log/app.log
database:
  host: localhost
  port: 5432
```

## Template Variables

The `Object` component supports template variable interpolation in the title:

```jsx
const variables = {
  entityType: "User",
  entityId: "123",
  environment: "production"
};

<Object 
  title="{entityType} {entityId} ({environment})"
  templateVars={variables}
  data={{
    id: 123,
    name: "John Doe",
    environment: "production",
    lastLogin: "2024-01-15T10:30:00Z"
  }}
/>
```

**Output:**
```
USER 123 (PRODUCTION)
====================

id: 123
name: John Doe
environment: production
lastLogin: 2024-01-15T10:30:00Z
```

## Different Output Formats

### Markdown Output

```jsx
<Object 
  title="API Response" 
  data={{
    success: true,
    data: {
      users: ["Alice", "Bob"],
      total: 2
    }
  }}
  syntax="markdown"
/>
```

**Output:**
```markdown
## API Response

```
success: true
data:
  users:
    - Alice
    - Bob
  total: 2
```
```

### HTML Output

```jsx
<Object 
  title="User Data" 
  data={{
    name: "John",
    skills: ["JavaScript", "Python"],
    active: true
  }}
  syntax="html"
/>
```

**Output:**
```html
<div class="object-display">
  <h3>User Data</h3>
  <pre class="object-content">
name: John
skills:
  - JavaScript
  - Python
active: true
  </pre>
</div>
```

### JSON Output

```jsx
<Object 
  title="Configuration Object" 
  data={{
    api: { version: "v1", timeout: 5000 },
    features: { auth: true, cache: false }
  }}
  syntax="json"
  expandLevel={2}
/>
```

**Output:**
```json
{
  "title": "Configuration Object",
  "expandLevel": 2,
  "inline": false,
  "data": {
    "api": {
      "version": "v1",
      "timeout": 5000
    },
    "features": {
      "auth": true,
      "cache": false
    }
  }
}
```

### YAML Output

```jsx
<Object 
  title="Server Config" 
  data={{
    server: {
      host: "0.0.0.0",
      port: 3000
    },
    database: {
      url: "postgresql://localhost:5432/mydb"
    }
  }}
  syntax="yaml"
/>
```

**Output:**
```yaml
title: "Server Config"
inline: false
expandLevel: 2
data:
  server:
    host: "0.0.0.0"
    port: 3000
  database:
    url: "postgresql://localhost:5432/mydb"
```

### XML Output

```jsx
<Object 
  title="Product Info" 
  data={{
    id: 1,
    name: "Widget",
    price: 19.99,
    categories: ["tools", "hardware"]
  }}
  syntax="xml"
/>
```

**Output:**
```xml
<object title="Product Info" expandLevel="2" inline="false">
  <data>
    <id>1</id>
    <name>Widget</name>
    <price>19.99</price>
    <categories>tools,hardware</categories>
  </data>
</object>
```

## Advanced Features

### Type Information Display

```jsx
<Object 
  title="Typed Data Structure"
  data={{
    id: 123,
    name: "Alice",
    active: true,
    score: 98.5,
    tags: ["admin", "power-user"],
    metadata: {
      created: new Date("2024-01-15"),
      settings: null
    }
  }}
  showTypes={true}
/>
```

**Output (Text):**
```
TYPED DATA STRUCTURE
===================

id: 123 (number)
name: Alice (string)
active: true (boolean)
score: 98.5 (number)
tags: (array)
  - admin (string)
  - power-user (string)
metadata: (object)
  created: 2024-01-15T00:00:00.000Z (Date)
  settings: null (null)
```

### Sorted Keys

```jsx
<Object 
  title="Sorted Configuration"
  data={{
    zIndex: 1000,
    backgroundColor: "#ffffff",
    animation: "fadeIn",
    border: "1px solid #ccc"
  }}
  sortKeys={true}
/>
```

**Output (Text):**
```
SORTED CONFIGURATION
===================

animation: fadeIn
backgroundColor: #ffffff
border: 1px solid #ccc
zIndex: 1000
```

### Complex Data Structures

```jsx
<Object 
  title="Complex API Response"
  data={{
    meta: {
      timestamp: "2024-01-15T10:30:00Z",
      version: "1.2.0",
      requestId: "req_abc123"
    },
    data: {
      users: [
        {
          id: 1,
          profile: {
            name: "Alice Johnson",
            avatar: "https://example.com/avatars/1.jpg",
            preferences: {
              theme: "dark",
              notifications: {
                email: true,
                push: false,
                sms: true
              }
            }
          },
          roles: ["admin", "user"],
          lastLogin: "2024-01-15T09:15:00Z"
        },
        {
          id: 2,
          profile: {
            name: "Bob Smith",
            avatar: null,
            preferences: {
              theme: "light",
              notifications: {
                email: false,
                push: true,
                sms: false
              }
            }
          },
          roles: ["user"],
          lastLogin: "2024-01-14T16:20:00Z"
        }
      ],
      pagination: {
        page: 1,
        limit: 10,
        total: 2,
        hasNext: false,
        hasPrev: false
      }
    },
    errors: []
  }}
  expandLevel={4}
  sortKeys={false}
/>
```

### Array Data Display

```jsx
<Object 
  title="Shopping Cart Items"
  data={[
    {
      id: "item_1",
      name: "Wireless Headphones",
      price: 199.99,
      quantity: 1,
      attributes: {
        color: "black",
        brand: "TechCorp"
      }
    },
    {
      id: "item_2", 
      name: "USB Cable",
      price: 12.99,
      quantity: 2,
      attributes: {
        length: "2m",
        type: "USB-C"
      }
    }
  ]}
  expandLevel={3}
/>
```

**Output (Text):**
```
SHOPPING CART ITEMS
==================

[0]:
  id: item_1
  name: Wireless Headphones
  price: 199.99
  quantity: 1
  attributes:
    color: black
    brand: TechCorp
[1]:
  id: item_2
  name: USB Cable
  price: 12.99
  quantity: 2
  attributes:
    length: 2m
    type: USB-C
```

## Inline Rendering

The `Object` component provides intelligent inline rendering for different scenarios:

### Simple Inline Objects

```jsx
<Object data={{ status: "ok", code: 200 }} inline={true} />
```

**Output:** `{ status: ok, code: 200 }`

### Complex Objects with Inline Mode

```jsx
<Object 
  data={{
    user: { name: "Alice", role: "admin" },
    permissions: ["read", "write", "delete"]
  }}
  inline={true}
/>
```

**Output:** `{ user: { name: Alice, role: admin }, permissions: [read, write, delete] }`

## Styling and Customization

### Custom CSS Classes

```jsx
<Object 
  title="Styled Data"
  className="custom-object-display"
  data={{ theme: "dark", fontSize: 14 }}
/>
```

### Speaker Attribution

```jsx
<Object 
  title="System Configuration"
  speaker="system"
  data={{
    version: "1.0.0",
    environment: "production"
  }}
/>
```

## Performance Considerations

- Use `expandLevel` to control the depth of nested objects displayed
- Enable `inline` mode for simple objects to save space
- Consider `sortKeys` for consistent object key ordering
- Large objects may impact rendering performance

## Best Practices

1. **Set appropriate expand levels** to avoid overwhelming output for deeply nested objects
2. **Use inline mode** for simple objects in flowing text
3. **Provide descriptive titles** when displaying complex data structures
4. **Sort keys** when consistent ordering is important
5. **Show types** when debugging or documenting data structures
6. **Use template variables** for dynamic titles and context

## Common Use Cases

- **API Response Documentation**: Display JSON response structures
- **Configuration Display**: Show configuration object contents  
- **Debug Output**: Inspect object states and values
- **Data Structure Documentation**: Explain complex nested data
- **Test Result Display**: Show test data and expected values
- **Database Record Display**: Present database query results

## Related Components

- [`ExampleInput`](./ExampleInput.md) - For showing input data examples
- [`ExampleOutput`](./ExampleOutput.md) - For displaying output data examples
- [`Code`](./Code.md) - For displaying code with syntax highlighting
- [`Table`](./Table.md) - For tabular data presentation