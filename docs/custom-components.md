# Custom Components

Learn how to create and use custom components in EPOML to extend functionality beyond the built-in components.

## Creating Custom Components

Custom components are functions that accept props and return a `Component` object. They follow the same pattern as built-in components and can be used seamlessly in templates.

### Basic Component Structure

```typescript
import { createElement, type Component } from 'epoml';

interface MyComponentProps {
  title: string;
  children?: (Component | string)[];
}

function MyComponent(props: MyComponentProps): Component {
  const { title, children = [] } = props;
  
  return createElement('div', {},
    createElement('h3', {}, title),
    ...children
  );
}
```

### Component Function Signature

```typescript
type ComponentFunction = (props: any) => Component;
```

Components must:
- Accept a props object as the first parameter
- Return a `Component` object
- Handle the `children` prop if they accept child content

## Registering Components

Before using custom components in templates, you must register them:

```typescript
import { registerComponent } from 'epoml';

// Register the component
registerComponent('MyComponent', MyComponent);

// Now you can use it in templates
const template = `<MyComponent title="Hello">Content here</MyComponent>`;
```

### Component Registry Functions

```typescript
import { 
  registerComponent, 
  unregisterComponent, 
  getComponent, 
  clearComponents 
} from 'epoml';

// Register a component
registerComponent('Alert', AlertComponent);

// Check if component exists
const component = getComponent('Alert');
if (component) {
  console.log('Alert component is registered');
}

// Remove a component
unregisterComponent('Alert');

// Clear all registered components
clearComponents();
```

## Complete Example: Alert Component

```typescript
import { createElement, registerComponent, type Component } from 'epoml';

interface AlertProps {
  type: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  dismissible?: boolean;
  syntax?: 'markdown' | 'html' | 'text';
  children?: (Component | string)[];
}

function Alert(props: AlertProps): Component {
  const { 
    type, 
    title, 
    dismissible = false, 
    syntax = 'markdown',
    children = [] 
  } = props;
  
  // Get icon and styling based on type
  const icon = getAlertIcon(type);
  const content = children.map(child => 
    typeof child === 'string' ? child : ''
  ).join('');
  
  // Format based on syntax
  switch (syntax) {
    case 'html':
      return createElement('div', 
        { className: `alert alert-${type}` },
        icon,
        title && createElement('strong', {}, title),
        createElement('span', {}, content),
        dismissible && createElement('button', { className: 'close' }, '×')
      );
      
    case 'text':
      return createElement('div', {}, 
        `${icon} ${title ? title + ': ' : ''}${content}`
      );
      
    case 'markdown':
    default:
      const prefix = title ? `**${title}**: ` : '';
      return createElement('div', {}, `${icon} ${prefix}${content}`);
  }
}

function getAlertIcon(type: string): string {
  switch (type) {
    case 'info': return 'ℹ️';
    case 'warning': return '⚠️';
    case 'error': return '❌';
    case 'success': return '✅';
    default: return 'ℹ️';
  }
}

// Register the component
registerComponent('Alert', Alert);
```

**Usage:**
```jsx
<Alert type="warning" title="Important">
  Please backup your data before proceeding.
</Alert>

<Alert type="success">
  Your changes have been saved successfully!
</Alert>
```

## Advanced Examples

### Container Component with Layout

```typescript
interface CardProps {
  title?: string;
  footer?: string;
  border?: boolean;
  padding?: boolean;
  syntax?: 'markdown' | 'html' | 'text';
  children?: (Component | string)[];
}

function Card(props: CardProps): Component {
  const { 
    title, 
    footer, 
    border = true, 
    padding = true,
    syntax = 'markdown',
    children = [] 
  } = props;
  
  const content = children.map(child => 
    typeof child === 'string' ? child : ''
  ).join('');
  
  switch (syntax) {
    case 'html':
      const cardElements = [];
      
      if (title) {
        cardElements.push(createElement('div', { className: 'card-header' }, title));
      }
      
      cardElements.push(
        createElement('div', { className: 'card-body' }, content)
      );
      
      if (footer) {
        cardElements.push(createElement('div', { className: 'card-footer' }, footer));
      }
      
      return createElement('div', { 
        className: `card ${border ? 'border' : ''} ${padding ? 'p-3' : ''}` 
      }, ...cardElements);
      
    case 'text':
      let result = '';
      if (border) result += '┌' + '─'.repeat(50) + '┐\n';
      if (title) result += `│ ${title.padEnd(48)} │\n`;
      if (title && border) result += '├' + '─'.repeat(50) + '┤\n';
      
      const lines = content.split('\n');
      lines.forEach(line => {
        result += border ? `│ ${line.padEnd(48)} │\n` : `${line}\n`;
      });
      
      if (footer && border) result += '├' + '─'.repeat(50) + '┤\n';
      if (footer) result += border ? `│ ${footer.padEnd(48)} │\n` : `${footer}\n`;
      if (border) result += '└' + '─'.repeat(50) + '┘';
      
      return createElement('pre', {}, result);
      
    case 'markdown':
    default:
      let md = '';
      if (title) md += `### ${title}\n\n`;
      md += content;
      if (footer) md += `\n\n*${footer}*`;
      
      return createElement('div', {}, md);
  }
}

registerComponent('Card', Card);
```

**Usage:**
```jsx
<Card title="User Profile" footer="Last updated: 2024-01-15" border={true}>
  <p>Name: John Doe</p>
  <p>Email: john@example.com</p>
  <p>Role: Administrator</p>
</Card>
```

### Data List Component

```typescript
interface ListItemProps {
  label: string;
  value: any;
  highlight?: boolean;
}

interface DataListProps {
  title?: string;
  items: ListItemProps[];
  syntax?: 'markdown' | 'html' | 'text';
  orientation?: 'horizontal' | 'vertical';
}

function DataList(props: DataListProps): Component {
  const { 
    title, 
    items, 
    syntax = 'markdown',
    orientation = 'vertical'
  } = props;
  
  switch (syntax) {
    case 'html':
      const elements = [];
      
      if (title) {
        elements.push(createElement('h4', {}, title));
      }
      
      const listElement = orientation === 'horizontal' 
        ? createElement('div', { className: 'row' },
            ...items.map(item => 
              createElement('div', { className: 'col' },
                createElement('strong', {}, item.label + ': '),
                createElement('span', { 
                  className: item.highlight ? 'highlight' : '' 
                }, String(item.value))
              )
            )
          )
        : createElement('dl', {},
            ...items.flatMap(item => [
              createElement('dt', {}, item.label),
              createElement('dd', { 
                className: item.highlight ? 'highlight' : '' 
              }, String(item.value))
            ])
          );
      
      elements.push(listElement);
      return createElement('div', {}, ...elements);
      
    case 'text':
      let result = '';
      if (title) result += `${title}\n${'='.repeat(title.length)}\n\n`;
      
      if (orientation === 'horizontal') {
        const labels = items.map(item => item.label).join(' | ');
        const values = items.map(item => String(item.value)).join(' | ');
        result += `${labels}\n${values}`;
      } else {
        items.forEach(item => {
          const marker = item.highlight ? '* ' : '  ';
          result += `${marker}${item.label}: ${item.value}\n`;
        });
      }
      
      return createElement('pre', {}, result);
      
    case 'markdown':
    default:
      let md = '';
      if (title) md += `#### ${title}\n\n`;
      
      if (orientation === 'horizontal') {
        const headers = items.map(item => item.label).join(' | ');
        const separator = items.map(() => '---').join(' | ');
        const values = items.map(item => String(item.value)).join(' | ');
        md += `${headers}\n${separator}\n${values}`;
      } else {
        items.forEach(item => {
          const emphasis = item.highlight ? '**' : '';
          md += `- ${emphasis}${item.label}${emphasis}: ${item.value}\n`;
        });
      }
      
      return createElement('div', {}, md);
  }
}

registerComponent('DataList', DataList);
```

**Usage:**
```jsx
<DataList 
  title="System Information"
  orientation="vertical"
  items={[
    { label: "CPU Usage", value: "45%", highlight: false },
    { label: "Memory Usage", value: "78%", highlight: true },
    { label: "Disk Space", value: "23GB free", highlight: false },
    { label: "Uptime", value: "5 days", highlight: false }
  ]}
/>
```

## Component Composition

Custom components can use other components, including built-in ones:

```typescript
import { Header, Bold, Code } from 'epoml';

interface TutorialStepProps {
  stepNumber: number;
  title: string;
  description: string;
  code?: string;
  language?: string;
  children?: (Component | string)[];
}

function TutorialStep(props: TutorialStepProps): Component {
  const { 
    stepNumber, 
    title, 
    description, 
    code, 
    language = 'javascript',
    children = [] 
  } = props;
  
  const elements = [
    createElement(Header, { level: 3 }, `Step ${stepNumber}: ${title}`),
    createElement('p', {}, description)
  ];
  
  if (code) {
    elements.push(
      createElement(Bold, {}, 'Example:'),
      createElement(Code, { 
        inline: false, 
        lang: language 
      }, code)
    );
  }
  
  if (children.length > 0) {
    elements.push(...children);
  }
  
  return createElement('div', {}, ...elements);
}

registerComponent('TutorialStep', TutorialStep);
```

**Usage:**
```jsx
<TutorialStep 
  stepNumber={1}
  title="Installation"
  description="First, install the required packages."
  code="npm install epoml"
  language="bash"
>
  <p>Additional notes about installation...</p>
</TutorialStep>
```

## Best Practices

### 1. TypeScript Interfaces
Always define proper TypeScript interfaces for your component props:

```typescript
interface ComponentProps {
  requiredProp: string;
  optionalProp?: number;
  children?: (Component | string)[];
}
```

### 2. Default Props
Provide sensible defaults for optional props:

```typescript
function MyComponent(props: MyComponentProps): Component {
  const { 
    syntax = 'markdown',
    visible = true,
    children = []
  } = props;
  
  // Component logic...
}
```

### 3. Syntax Support
Support multiple output formats when possible:

```typescript
function MyComponent(props: MyComponentProps): Component {
  const { syntax = 'markdown' } = props;
  
  switch (syntax) {
    case 'html':
      return generateHtmlOutput();
    case 'text':
      return generateTextOutput();
    case 'markdown':
    default:
      return generateMarkdownOutput();
  }
}
```

### 4. Error Handling
Handle edge cases and invalid props gracefully:

```typescript
function MyComponent(props: MyComponentProps): Component {
  const { data } = props;
  
  if (!data) {
    return createElement('span', {}, 'No data provided');
  }
  
  try {
    // Component logic...
  } catch (error) {
    return createElement('span', {}, `Error: ${error.message}`);
  }
}
```

### 5. Children Handling
Properly process children when your component accepts them:

```typescript
function Container(props: ContainerProps): Component {
  const { children = [] } = props;
  
  // Convert children to string content
  const content = children
    .map(child => typeof child === 'string' ? child : '')
    .join('');
  
  // Or preserve children as components
  return createElement('div', { className: 'container' }, ...children);
}
```

## Testing Custom Components

```typescript
import { epomlparse, registerComponent } from 'epoml';

// Register your component
registerComponent('MyComponent', MyComponent);

// Test the component
async function testMyComponent() {
  const template = `
    <MyComponent title="Test" value={42}>
      This is test content.
    </MyComponent>
  `;
  
  const result = await epomlparse(template, {});
  console.log(result);
}
```

## Common Patterns

### 1. Conditional Rendering
```typescript
function ConditionalComponent(props: { condition: boolean; children: any[] }) {
  const { condition, children } = props;
  
  if (!condition) {
    return createElement('div', {}, ''); // Empty component
  }
  
  return createElement('div', {}, ...children);
}
```

### 2. Loop Components
```typescript
function LoopComponent(props: { items: any[]; template: string }) {
  const { items, template } = props;
  
  const elements = items.map((item, index) => 
    createElement('div', { key: index }, 
      template.replace('{item}', item)
    )
  );
  
  return createElement('div', {}, ...elements);
}
```

### 3. Wrapper Components
```typescript
function Section(props: { title: string; children: any[] }) {
  const { title, children } = props;
  
  return createElement('div', { className: 'section' },
    createElement('h2', {}, title),
    createElement('div', { className: 'content' }, ...children)
  );
}
```

## Component Library Organization

For larger projects, organize components in modules:

```typescript
// components/alerts.ts
export { Alert, Warning, Info, Error };

// components/layout.ts  
export { Card, Section, Container };

// components/data.ts
export { DataList, Table, Chart };

// components/index.ts
export * from './alerts';
export * from './layout';
export * from './data';

// Register all components
import * as components from './components';

Object.entries(components).forEach(([name, component]) => {
  registerComponent(name, component);
});
```

This approach to custom components allows you to extend EPOML's functionality to meet your specific needs while maintaining consistency with the built-in component system.