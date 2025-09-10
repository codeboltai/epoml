# EPOML (Enhanced Plain Old Markup Language)

EPOML is a JSX-based template engine that allows you to write structured content using JSX syntax and render it to plain text. It uses SWC (Speedy Web Compiler) for fast JSX transformation, making it efficient for runtime template processing.

## Installation

```bash
npm install epoml
```

## Usage

### Using the epomlparse function (Recommended)

The easiest way to use EPOML is with the `epomlparse` function:

```javascript
import { epomlparse } from 'epoml';

const prompt = `
<>
  <p>This is basic text</p>
  <list>
    <item>item1</item>
    <item>item2</item>
  </list>
</>
`;

const output = await epomlparse(prompt);
console.log(output);
// Output:
// This is basic text
// - item1
// - item2
```

### Components

EPOML comes with built-in components:

- `<p>` - Paragraph element
- `<list>` - List container
- `<item>` - List item
- `<FileTree>` - File tree component that shows the directory structure

Example with FileTree:

```javascript
import { epomlparse } from 'epoml';

const prompt = `
<>
  <p>Project structure:</p>
  <FileTree depth={2}/>
</>
`;

const output = await epomlparse(prompt);
console.log(output);
```

## API

### epomlparse(prompt: string): Promise<string>

Parses an EPOML string and returns the rendered output.

## Performance

EPOML uses SWC (Speedy Web Compiler) for JSX transformation, which provides significant performance improvements over traditional transpilers like Babel or TypeScript's built-in transpiler. SWC is used by major frameworks like Next.js and is one of the fastest JavaScript/TypeScript compilers available.

## Custom Components

You can create custom components by defining functions that return EPOML elements:

```javascript
import { Epoml } from 'epoml';

function MyComponent({ name }) {
  return Epoml.createElement('p', {}, `Hello, ${name}!`);
}
```

Then use it in your EPOML:

```javascript
const prompt = `
<MyComponent name="World" />
`;