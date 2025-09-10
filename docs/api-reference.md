# API Reference

Complete reference for all EPOML functions, types, and interfaces.

## Core Functions

### `epomlparse(template, variables?)`

The main function for parsing and rendering EPOML templates.

```typescript
function epomlparse(template: string, variables?: TemplateVariables): Promise<string>
```

**Parameters:**
- `template: string` - The EPOML template string with JSX syntax
- `variables?: TemplateVariables` - Optional object containing template variables

**Returns:**
- `Promise<string>` - The rendered template as a string

**Example:**
```typescript
import { epomlparse } from 'epoml';

const template = `<Header level={1}>Hello, {name}!</Header>`;
const result = await epomlparse(template, { name: "World" });
console.log(result); // # Hello, World!
```

### `createElement(type, props, ...children)`

Creates a component element programmatically.

```typescript
function createElement(
  type: string | Function,
  props: { [key: string]: any } | null,
  ...children: (Component | string)[]
): Component
```

**Parameters:**
- `type: string | Function` - HTML tag name or component function
- `props: object | null` - Properties to pass to the component
- `children: (Component | string)[]` - Child elements or text content

**Returns:**
- `Component` - A component object

**Example:**
```typescript
import { createElement } from 'epoml';

const element = createElement('div', { className: 'container' },
  createElement('h1', {}, 'Title'),
  createElement('p', {}, 'Content')
);
```

### `Fragment`

A component for grouping multiple elements without a wrapper.

```typescript
function Fragment(props: { children?: (Component | string)[] }): Component
```

**Example:**
```typescript
import { Fragment, createElement } from 'epoml';

const element = createElement(Fragment, {},
  createElement('p', {}, 'First paragraph'),
  createElement('p', {}, 'Second paragraph')
);
```

## Component Registry Functions

### `registerComponent(name, component)`

Registers a custom component for use in templates.

```typescript
function registerComponent(name: string, component: Function): void
```

**Parameters:**
- `name: string` - The name to register the component under
- `component: Function` - The component function

**Example:**
```typescript
import { registerComponent, createElement } from 'epoml';

function MyComponent({ title }: { title: string }) {
  return createElement('h2', {}, title);
}

registerComponent('MyComponent', MyComponent);
```

### `unregisterComponent(name)`

Removes a component from the registry.

```typescript
function unregisterComponent(name: string): void
```

### `getComponent(name)`

Retrieves a component from the registry.

```typescript
function getComponent(name: string): Function | undefined
```

### `clearComponents()`

Removes all registered components.

```typescript
function clearComponents(): void
```

## Types and Interfaces

### `Component`

The core component interface used throughout EPOML.

```typescript
interface Component {
  type: string | Function;
  props: { [key: string]: any };
  children: (Component | string)[];
}
```

### `TemplateVariables`

Type for template variables passed to `epomlparse`.

```typescript
type TemplateVariables = Record<string, any>;
```

### `Syntax`

Available output formats for components.

```typescript
type Syntax = 'markdown' | 'html' | 'json' | 'yaml' | 'xml' | 'text' | 'multimedia';
```

### `Speaker`

Speaker types for content attribution.

```typescript
type Speaker = 'human' | 'ai' | 'system';
```

### `WhitespaceHandling`

Whitespace handling options.

```typescript
type WhitespaceHandling = 'pre' | 'filter' | 'trim';
```

### `BaseComponentProps`

Base properties shared by many components.

```typescript
interface BaseComponentProps {
  syntax?: Syntax;
  className?: string;
  speaker?: Speaker;
  writerOptions?: object;
  whiteSpace?: WhitespaceHandling;
  children?: (Component | string)[];
}
```

### `SerializableComponentProps`

Extended properties for components that support serialization.

```typescript
interface SerializableComponentProps extends BaseComponentProps {
  name?: string;
  type?: string;
}
```

### `LayoutComponentProps`

Extended properties for components that support layout options.

```typescript
interface LayoutComponentProps extends SerializableComponentProps {
  blankLine?: boolean;
}
```

### `LimitedComponentProps`

Extended properties for components that support content limits.

```typescript
interface LimitedComponentProps extends LayoutComponentProps {
  charLimit?: number;
  tokenLimit?: number;
  priority?: number;
}
```

## Component Type Definitions

### `HeaderLevel`

Valid header levels for the Header component.

```typescript
type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;
```

### `AudioPosition`

Audio position options for the Audio component.

```typescript
type AudioPosition = 'top' | 'bottom' | 'here';
```

### `CaptionStyle`

Caption style options for components with captions.

```typescript
type CaptionStyle = 'header' | 'bold' | 'plain' | 'hidden';
```

### `TextTransform`

Text transformation options.

```typescript
type TextTransform = 'upper' | 'level' | 'capitalize' | 'none';
```

### `CaptionEnding`

Caption ending options.

```typescript
type CaptionEnding = 'colon' | 'newline' | 'colon-newline' | 'none';
```

### `AudioMimeType`

Supported audio MIME types.

```typescript
type AudioMimeType = 
  | 'audio/mpeg' 
  | 'audio/wav' 
  | 'audio/ogg' 
  | 'audio/mp4' 
  | 'audio/flac' 
  | 'audio/webm'
  | string;
```

## Built-in Component Props

### `HeaderProps`

Props for the Header component.

```typescript
interface HeaderProps extends LimitedComponentProps {
  level?: HeaderLevel;
}
```

### `BoldProps`

Props for the Bold component.

```typescript
interface BoldProps extends BaseComponentProps {
  // No additional props beyond BaseComponentProps
}
```

### `CodeProps`

Props for the Code component.

```typescript
interface CodeProps extends LimitedComponentProps {
  language?: string;
  filename?: string;
  lineNumbers?: boolean;
  highlight?: string;
}
```

### `AudioProps`

Props for the Audio component.

```typescript
interface AudioProps extends SerializableComponentProps {
  src: string;
  mimeType?: AudioMimeType;
  position?: AudioPosition;
  transcription?: string;
  duration?: number;
  title?: string;
  description?: string;
}
```

### `CaptionedParagraphProps`

Props for the CaptionedParagraph component.

```typescript
interface CaptionedParagraphProps extends LimitedComponentProps {
  caption?: string;
  captionStyle?: CaptionStyle;
  captionEnding?: CaptionEnding;
  captionTransform?: TextTransform;
}
```

### `InlineProps`

Props for the Inline component.

```typescript
interface InlineProps extends BaseComponentProps {
  // No additional props beyond BaseComponentProps
}
```

## Error Types

EPOML may throw different types of errors:

### `EPOMLParseError`

Thrown when template parsing fails.

```typescript
class EPOMLParseError extends Error {
  name = 'EPOMLParseError';
}
```

### `EPOMLComponentError`

Thrown when component instantiation or rendering fails.

```typescript
class EPOMLComponentError extends Error {
  name = 'EPOMLComponentError';
}
```

### `EPOMLVariableError`

Thrown when template variables are missing or invalid.

```typescript
class EPOMLVariableError extends Error {
  name = 'EPOMLVariableError';
}
```

## Usage Examples

### Complete Type-Safe Example

```typescript
import { 
  epomlparse, 
  registerComponent, 
  createElement,
  type Component,
  type BaseComponentProps,
  type TemplateVariables 
} from 'epoml';

// Define a custom component with proper typing
interface AlertProps extends BaseComponentProps {
  type: 'info' | 'warning' | 'error';
}

function Alert(props: AlertProps): Component {
  const { type, children = [], className, speaker } = props;
  const icon = type === 'info' ? 'ℹ️' : type === 'warning' ? '⚠️' : '❌';
  const content = children.map(child => typeof child === 'string' ? child : '').join('');
  
  return createElement('div', { className, 'data-speaker': speaker }, `${icon} ${content}`);
}

// Register the component
registerComponent('Alert', Alert);

// Use in template with proper typing
async function example() {
  const template = `
    <div>
      <Header level={1}>Status Report</Header>
      <Alert type="info">System is operational</Alert>
      <Alert type="warning">Maintenance scheduled for {maintenanceDate}</Alert>
    </div>
  `;
  
  const variables: TemplateVariables = {
    maintenanceDate: '2024-01-15'
  };
  
  try {
    const result = await epomlparse(template, variables);
    console.log(result);
  } catch (error) {
    console.error('Template error:', error);
  }
}
```

## Performance Considerations

- **Template Caching**: Consider caching parsed templates for frequently used patterns
- **Variable Validation**: Validate variables before passing to `epomlparse`
- **Component Registry**: Avoid registering/unregistering components frequently
- **Memory Usage**: Be mindful of large templates and variable objects
- **Async Nature**: Always use `await` or proper Promise handling with `epomlparse`