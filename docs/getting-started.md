# Getting Started

This guide will help you get up and running with EPOML quickly.

## Installation

Install EPOML using npm, yarn, or pnpm:

```bash
# npm
npm install epoml

# yarn
yarn add epoml

# pnpm
pnpm add epoml
```

## Your First Template

EPOML uses JSX-like syntax to create templates. Here's a simple example:

```typescript
import { epomlparse } from 'epoml';

async function basicExample() {
  const template = `<p>Hello, {name}!</p>`;
  const result = await epomlparse(template, { name: "World" });
  console.log(result); // Output: "Hello, World!"
}

basicExample();
```

## Template Variables

EPOML supports dynamic content through template variables:

```typescript
import { epomlparse } from 'epoml';

async function variableExample() {
  const template = `
    <div>
      <Header level={1}>Welcome, {username}!</Header>
      <p>You have {messageCount} new messages.</p>
      <p>Today is {currentDate}.</p>
    </div>
  `;
  
  const variables = {
    username: "Alice",
    messageCount: 5,
    currentDate: new Date().toLocaleDateString()
  };
  
  const result = await epomlparse(template, variables);
  console.log(result);
}

variableExample();
```

## Using Built-in Components

EPOML comes with several built-in components for common use cases:

```typescript
import { epomlparse } from 'epoml';

async function componentExample() {
  const template = `
    <div>
      <Header level={1}>My Project</Header>
      
      <Bold>Important:</Bold> Please read the following carefully.
      
      <Code language="javascript">
        const greeting = "Hello, World!";
        console.log(greeting);
      </Code>
      
      <FileTree directory="./" />
    </div>
  `;
  
  const result = await epomlparse(template);
  console.log(result);
}

componentExample();
```

## Output Formats

EPOML supports multiple output formats. You can specify the format using the `syntax` prop:

```typescript
import { epomlparse } from 'epoml';

async function formatExample() {
  // Markdown output (default)
  const markdownTemplate = `<Header level={2}>Markdown Header</Header>`;
  const markdownResult = await epomlparse(markdownTemplate);
  console.log('Markdown:', markdownResult); // ## Markdown Header
  
  // HTML output
  const htmlTemplate = `<Header level={2} syntax="html">HTML Header</Header>`;
  const htmlResult = await epomlparse(htmlTemplate);
  console.log('HTML:', htmlResult); // <h2>HTML Header</h2>
  
  // Plain text output
  const textTemplate = `<Header level={2} syntax="text">Text Header</Header>`;
  const textResult = await epomlparse(textTemplate);
  console.log('Text:', textResult); // Text Header\n-----------
}

formatExample();
```

## Creating Custom Components

You can create and register your own components:

```typescript
import { epomlparse, registerComponent, createElement, type Component } from 'epoml';

// Define a custom component
function Alert({ type, children }: { type: 'info' | 'warning' | 'error'; children: (Component | string)[] }): Component {
  const icon = type === 'info' ? 'ℹ️' : type === 'warning' ? '⚠️' : '❌';
  const content = children.map(child => typeof child === 'string' ? child : '').join('');
  
  return createElement('div', {}, `${icon} ${content}`);
}

// Register the component
registerComponent('Alert', Alert);

async function customComponentExample() {
  const template = `
    <div>
      <Alert type="info">This is an informational message.</Alert>
      <Alert type="warning">This is a warning message.</Alert>
      <Alert type="error">This is an error message.</Alert>
    </div>
  `;
  
  const result = await epomlparse(template);
  console.log(result);
}

customComponentExample();
```

## Error Handling

Always wrap your EPOML parsing in try-catch blocks to handle errors gracefully:

```typescript
import { epomlparse } from 'epoml';

async function errorHandlingExample() {
  try {
    const template = `<InvalidComponent>This component doesn't exist</InvalidComponent>`;
    const result = await epomlparse(template);
    console.log(result);
  } catch (error) {
    console.error('EPOML parsing error:', error.message);
  }
}

errorHandlingExample();
```

## Next Steps

Now that you've learned the basics, explore more advanced features:

- [Core Concepts](./core-concepts.md) - Deeper understanding of EPOML's architecture
- [Built-in Components](./components/) - Complete reference for all built-in components
- [Custom Components](./custom-components.md) - Advanced component creation techniques
- [Template Variables](./template-variables.md) - Advanced variable usage and best practices
- [Examples](./examples/) - Real-world use cases and patterns