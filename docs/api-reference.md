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

### `DocumentProps`

Props for the Document component.

```typescript
interface DocumentProps extends BaseComponentProps {
  title?: string;
  author?: string;
  version?: string;
  date?: string;
  metadata?: Record<string, any>;
}
```

### `TableProps`

Props for the Table component.

```typescript
interface TableProps extends BaseComponentProps {
  headers?: string[];
  rows?: string[][];
  caption?: string;
  bordered?: boolean;
  striped?: boolean;
  align?: ('left' | 'center' | 'right')[];
}
```

### `TaskProps`

Props for the Task component.

```typescript
interface TaskProps extends BaseComponentProps {
  id?: string;
  title?: string;
  description?: string;
  status?: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority?: 'low' | 'medium' | 'high' | 'critical';
  assignee?: string;
  dueDate?: string;
  blocked?: boolean;
}
```

### `QuestionProps`

Props for the Question component.

```typescript
interface QuestionProps extends BaseComponentProps {
  text: string;
  type?: 'multiple-choice' | 'single-choice' | 'open-ended' | 'true-false' | 'rating';
  options?: string[];
  answer?: string | string[];
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  category?: string;
}
```

### `ImageProps`

Props for the Image component.

```typescript
interface ImageProps extends BaseComponentProps {
  src?: string;
  base64?: string;
  alt?: string;
  type?: string;
  position?: 'top' | 'bottom' | 'here';
  width?: string | number;
  height?: string | number;
  caption?: string;
}
```

### `RoleProps`

Props for the Role component.

```typescript
interface RoleProps extends BaseComponentProps {
  name: string;
  description?: string;
  responsibilities?: string[];
  permissions?: string[];
  active?: boolean;
}
```

### `HintProps`

Props for the Hint component.

```typescript
interface HintProps extends BaseComponentProps {
  type?: 'info' | 'tip' | 'warning' | 'note';
  title?: string;
  dismissible?: boolean;
  icon?: string;
}
```

### `StepwiseInstructionsProps`

Props for the StepwiseInstructions component.

```typescript
interface StepwiseInstructionsProps extends BaseComponentProps {
  title?: string;
  steps: Array<{
    title: string;
    description: string;
    code?: string;
    language?: string;
  }>;
  numbered?: boolean;
}
```

### `ObjectProps`

Props for the Object component.

```typescript
interface ObjectProps extends BaseComponentProps {
  data: any;
  expandLevel?: number;
  showTypes?: boolean;
  compact?: boolean;
}
```

### `ExampleInputProps`

Props for the ExampleInput component.

```typescript
interface ExampleInputProps extends BaseComponentProps {
  title?: string;
  content: string;
  language?: string;
  description?: string;
}
```

### `ExampleOutputProps`

Props for the ExampleOutput component.

```typescript
interface ExampleOutputProps extends BaseComponentProps {
  title?: string;
  content: string;
  language?: string;
  description?: string;
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

## Utility Functions

EPOML provides several utility functions for text processing, formatting, and template variable handling.

### `escapeHtml(text)`

Escapes HTML special characters to prevent XSS vulnerabilities.

```typescript
function escapeHtml(text: string): string
```

**Parameters:**
- `text: string` - The text to escape

**Returns:**
- `string` - The escaped text with HTML entities

**Example:**
```typescript
import { escapeHtml } from 'epoml';

const userInput = '<script>alert("xss")</script>';
const safe = escapeHtml(userInput);
console.log(safe); // &lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;
```

### `escapeXml(text)`

Escapes XML special characters for safe XML output.

```typescript
function escapeXml(text: string): string
```

**Parameters:**
- `text: string` - The text to escape

**Returns:**
- `string` - The escaped text with XML entities

**Example:**
```typescript
import { escapeXml } from 'epoml';

const xmlContent = 'A & B < C > D "quote" \'apos\'';
const escaped = escapeXml(xmlContent);
console.log(escaped); // A &amp; B &lt; C &gt; D &quot;quote&quot; &#39;apos&#39;
```

### `processTemplateVars(text, context)`

Processes template variables in text content by replacing `{variableName}` patterns.

```typescript
function processTemplateVars(text: string, context?: Record<string, any>): string
```

**Parameters:**
- `text: string` - The text containing template variables
- `context?: Record<string, any>` - Object containing variable values (default: {})

**Returns:**
- `string` - The text with variables replaced by actual values

**Example:**
```typescript
import { processTemplateVars } from 'epoml';

const template = 'Hello {name}, you have {count} messages';
const context = { name: 'Alice', count: 5 };
const result = processTemplateVars(template, context);
console.log(result); // Hello Alice, you have 5 messages
```

### `validateSyntax(syntax)`

Validates if a syntax type is supported by EPOML.

```typescript
function validateSyntax(syntax: string): boolean
```

**Parameters:**
- `syntax: string` - The syntax type to validate

**Returns:**
- `boolean` - `true` if the syntax is supported, `false` otherwise

**Example:**
```typescript
import { validateSyntax } from 'epoml';

console.log(validateSyntax('markdown')); // true
console.log(validateSyntax('json'));     // true
console.log(validateSyntax('invalid'));  // false
```

### `repeatChar(char, count)`

Generates a string by repeating a character a specified number of times.

```typescript
function repeatChar(char: string, count: number): string
```

**Parameters:**
- `char: string` - The character to repeat
- `count: number` - Number of repetitions (negative values return empty string)

**Returns:**
- `string` - The repeated character string

**Example:**
```typescript
import { repeatChar } from 'epoml';

console.log(repeatChar('=', 10)); // ==========
console.log(repeatChar('-', 5));  // -----
```

### `indentText(text, spaces)`

Indents each non-empty line of text by the specified number of spaces.

```typescript
function indentText(text: string, spaces: number): string
```

**Parameters:**
- `text: string` - The text to indent
- `spaces: number` - Number of spaces to indent each line

**Returns:**
- `string` - The indented text

**Example:**
```typescript
import { indentText } from 'epoml';

const code = 'function hello() {\n  console.log("hi");\n}';
const indented = indentText(code, 4);
console.log(indented);
/*
    function hello() {
      console.log("hi");
    }
*/
```

### `safeStringify(value)`

Safely converts any value to a string representation.

```typescript
function safeStringify(value: any): string
```

**Parameters:**
- `value: any` - The value to convert to string

**Returns:**
- `string` - String representation of the value

**Example:**
```typescript
import { safeStringify } from 'epoml';

console.log(safeStringify(null));         // ""
console.log(safeStringify(undefined));    // ""
console.log(safeStringify(42));           // "42"
console.log(safeStringify({a: 1}));       // "{\"a\":1}"
```

### `wrapInCodeBlock(content, language)`

Wraps content in a markdown code block with optional language specification.

```typescript
function wrapInCodeBlock(content: string, language?: string): string
```

**Parameters:**
- `content: string` - The content to wrap
- `language?: string` - Optional language identifier for syntax highlighting

**Returns:**
- `string` - Content wrapped in markdown code block

**Example:**
```typescript
import { wrapInCodeBlock } from 'epoml';

const code = 'console.log("Hello, World!");';
const wrapped = wrapInCodeBlock(code, 'javascript');
console.log(wrapped);
/*
```javascript
console.log("Hello, World!");
```
*/
```

### `validateRequired(obj, requiredProps)`

Validates that required properties are present in an object.

```typescript
function validateRequired<T>(obj: T, requiredProps: (keyof T)[]): void
```

**Parameters:**
- `obj: T` - The object to validate
- `requiredProps: (keyof T)[]` - Array of required property names

**Throws:**
- `Error` - If any required property is missing or null/undefined

**Example:**
```typescript
import { validateRequired } from 'epoml';

const user = { name: 'Alice', email: 'alice@example.com' };
try {
  validateRequired(user, ['name', 'email', 'id']); // Throws error - 'id' missing
} catch (error) {
  console.error(error.message); // Required property 'id' is missing
}
```

### `mergeProps(defaults, props)`

Merges default properties with provided properties.

```typescript
function mergeProps<T>(defaults: Partial<T>, props: Partial<T>): T
```

**Parameters:**
- `defaults: Partial<T>` - Default property values
- `props: Partial<T>` - Override property values

**Returns:**
- `T` - Merged properties object

**Example:**
```typescript
import { mergeProps } from 'epoml';

const defaults = { theme: 'light', size: 'medium', enabled: true };
const userProps = { theme: 'dark', size: 'large' };
const merged = mergeProps(defaults, userProps);
console.log(merged); // { theme: 'dark', size: 'large', enabled: true }
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