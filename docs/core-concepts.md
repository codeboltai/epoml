# Core Concepts

Understanding these core concepts will help you master EPOML and build powerful, flexible templates.

## Components

Components are the building blocks of EPOML templates. They are functions that accept props and return a structured representation of content.

### Component Structure

Every EPOML component follows this pattern:

```typescript
import { Component, createElement } from 'epoml';

interface MyComponentProps {
  // Define your component's props here
  title: string;
  children?: (Component | string)[];
}

function MyComponent(props: MyComponentProps): Component {
  const { title, children = [] } = props;
  
  // Process content and return a Component
  return createElement('div', {}, 
    createElement('h2', {}, title),
    ...children
  );
}
```

### Built-in vs Custom Components

EPOML provides several built-in components for common use cases:
- `Header` - For creating headers at different levels
- `Bold` - For emphasizing text
- `Code` - For displaying code blocks
- `Audio` - For including audio references
- `FileTree` - For displaying directory structures
- `CaptionedParagraph` - For paragraphs with captions
- `Inline` - For inline formatting

You can also create your own custom components and register them for use in templates.

## JSX Syntax

EPOML uses JSX-like syntax, which will be familiar to React developers:

```jsx
// Self-closing tags
<Header level={1} />

// Tags with content
<Bold>This text is bold</Bold>

// Nested components
<div>
  <Header level={2}>Section Title</Header>
  <p>Some paragraph content</p>
</div>

// Components with props
<Code language="javascript" syntax="markdown">
  console.log("Hello, World!");
</Code>
```

### Props and Attributes

Components accept props that customize their behavior:

- **String props**: `title="My Title"`
- **Number props**: `level={2}`
- **Boolean props**: `blankLine={true}`
- **Object props**: `writerOptions={{ indent: 2 }}`
- **Variable props**: `name={username}`

## Template Variables

Template variables allow you to inject dynamic content into your templates:

```typescript
const template = `<p>Hello, {name}! You have {count} messages.</p>`;
const variables = { name: "Alice", count: 5 };
const result = await epomlparse(template, variables);
```

### Variable Types

Variables can be of any type:

```typescript
const variables = {
  // Strings
  title: "My Document",
  
  // Numbers
  count: 42,
  level: 3,
  
  // Booleans
  isVisible: true,
  
  // Objects
  user: { name: "Alice", role: "admin" },
  
  // Arrays
  items: ["apple", "banana", "cherry"],
  
  // Functions (evaluated when used)
  currentDate: () => new Date().toISOString()
};
```

### Nested Properties

Access nested object properties using dot notation:

```typescript
const template = `<p>Welcome, {user.name}! Your role is {user.role}.</p>`;
const variables = {
  user: { name: "Alice", role: "admin" }
};
```

## Output Formats (Syntax)

EPOML supports multiple output formats through the `syntax` prop:

### Markdown (Default)

```typescript
<Header level={2} syntax="markdown">My Header</Header>
// Output: ## My Header

<Bold syntax="markdown">Important text</Bold>
// Output: **Important text**
```

### HTML

```typescript
<Header level={2} syntax="html">My Header</Header>
// Output: <h2>My Header</h2>

<Bold syntax="html">Important text</Bold>
// Output: <b>Important text</b>
```

### Plain Text

```typescript
<Header level={2} syntax="text">My Header</Header>
// Output: My Header
//         ---------

<Bold syntax="text">Important text</Bold>
// Output: IMPORTANT TEXT
```

### Structured Formats (JSON, YAML, XML)

```typescript
<Header level={2} syntax="json" name="title">My Header</Header>
// Output: { "title": "My Header", "level": 2 }

<Header level={2} syntax="yaml" name="title">My Header</Header>
// Output: title: "My Header"
//         level: 2
```

## Component Props

Most EPOML components share a common set of base props:

### Base Props

- `syntax?: Syntax` - Output format (markdown, html, json, yaml, xml, text)
- `className?: string` - CSS class for styling
- `speaker?: Speaker` - Content attribution (human, ai, system)
- `children?: (Component | string)[]` - Child content

### Layout Props

- `blankLine?: boolean` - Add extra spacing before/after content
- `name?: string` - Name for serialization
- `type?: string` - Type for serialization

### Advanced Props

- `writerOptions?: object` - Custom formatting options
- `whiteSpace?: WhitespaceHandling` - Whitespace handling (pre, filter, trim)
- `charLimit?: number` - Character limit for truncation
- `tokenLimit?: number` - Token limit for truncation
- `priority?: number` - Priority for global truncation

## Component Registry

EPOML maintains a registry of available components:

```typescript
import { registerComponent, unregisterComponent, getComponent, clearComponents } from 'epoml';

// Register a custom component
registerComponent('MyComponent', MyComponent);

// Check if a component is registered
const component = getComponent('MyComponent');

// Unregister a component
unregisterComponent('MyComponent');

// Clear all registered components
clearComponents();
```

## Rendering Process

When you call `epomlparse()`, EPOML goes through several steps:

1. **Parse JSX** - Convert JSX syntax to component tree
2. **Resolve Variables** - Replace template variables with actual values
3. **Instantiate Components** - Create component instances with resolved props
4. **Render Tree** - Convert component tree to final text output
5. **Apply Formatting** - Apply syntax-specific formatting

## Error Handling

EPOML provides helpful error messages for common issues:

- **Missing Components**: When using unregistered components
- **Invalid Props**: When required props are missing or invalid
- **Parse Errors**: When JSX syntax is malformed
- **Variable Errors**: When referenced variables don't exist

```typescript
try {
  const result = await epomlparse(template, variables);
} catch (error) {
  if (error.name === 'EPOMLParseError') {
    console.error('Template parsing failed:', error.message);
  } else if (error.name === 'EPOMLComponentError') {
    console.error('Component error:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Best Practices

1. **Use TypeScript** - Take advantage of type safety with proper interfaces
2. **Handle Errors** - Always wrap parsing in try-catch blocks
3. **Validate Variables** - Ensure all required variables are provided
4. **Component Naming** - Use PascalCase for component names
5. **Prop Validation** - Validate props in custom components
6. **Performance** - Cache compiled templates when possible
7. **Testing** - Write tests for custom components and templates

## Next Steps

- [API Reference](./api-reference.md) - Complete API documentation
- [Built-in Components](./components/) - Learn about all available components
- [Custom Components](./custom-components.md) - Create your own components
- [Template Variables](./template-variables.md) - Master variable usage