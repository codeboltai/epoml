# Code Component

The Code component displays code blocks and inline code with syntax highlighting support across multiple output formats. It provides robust template variable support for dynamic code injection.

## Usage

### Basic Examples

```jsx
<!-- Inline code -->
<Code>console.log("Hello")</Code>

<!-- Simple code block -->
<Code inline={false} lang="javascript">console.log("Hello World")</Code>
```

### Using Template Variables (Recommended for Complex Code)

For JavaScript code blocks containing functions, statements, or complex syntax, use template variables to avoid JSX parsing conflicts:

```jsx
<!-- Template with variable -->
<Code inline={false} lang="javascript">{code}</Code>
```

**Usage with epomlparse:**
```typescript
const template = `<Code inline={false} lang="javascript">{code}</Code>`;
const jsCode = 'function greet(name) { return `Hello, ${name}!`; }';
const result = await epomlparse(template, { code: jsCode });
```

**Output:**
```javascript
function greet(name) { return `Hello, ${name}!`; }
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `inline` | `boolean` | `true` | Whether to render as inline or block code |
| `lang` | `string` | - | Programming language for syntax highlighting |
| `blankLine` | `boolean` | `false` | Add extra spacing before/after (block only) |
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `name` | `string` | - | Name for serialization |
| `type` | `string` | - | Type for serialization |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'pre'` | Whitespace handling |
| `charLimit` | `number` | - | Character limit |
| `tokenLimit` | `number` | - | Token limit |
| `priority` | `number` | - | Truncation priority |

## Output Formats

### Markdown (Default)

#### Inline Code
```jsx
<Code>console.log("Hello")</Code>
```
**Output:** `` `console.log("Hello")` ``

#### Code Block with Template Variables
```jsx
<Code inline={false} lang="javascript">{functionCode}</Code>
```

**Usage:**
```typescript
const template = `<Code inline={false} lang="javascript">{functionCode}</Code>`;
const variables = {
  functionCode: `function greet(name) {
  console.log(\`Hello, \${name}!\`);
}`
};
const result = await epomlparse(template, variables);
```

**Output:**
````markdown
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```
````

### HTML

#### Inline Code
```jsx
<Code syntax="html">console.log("Hello")</Code>
```
**Output:**
```html
<code>console.log("Hello")</code>
```

#### Code Block
```jsx
<Code syntax="html" inline={false} lang="javascript">
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
</Code>
```
**Output:**
```html
<pre><code class="language-javascript" data-language="javascript">function greet(name) {
  console.log(`Hello, ${name}!`);
}</code></pre>
```

### Plain Text

#### Inline Code
```jsx
<Code syntax="text">console.log("Hello")</Code>
```
**Output:**
```text
console.log("Hello")
```

#### Code Block
```jsx
<Code syntax="text" inline={false}>
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
</Code>
```
**Output:**
```text
    function greet(name) {
      console.log(`Hello, ${name}!`);
    }
```

### JSON
```jsx
<Code syntax="json" lang="javascript" name="example">
  console.log("Hello");
</Code>
```
**Output:**
```json
{
  "code": "console.log(\"Hello\");",
  "language": "javascript",
  "name": "example"
}
```

### YAML
```jsx
<Code syntax="yaml" lang="python" name="script">
  print("Hello")
</Code>
```
**Output:**
```yaml
script: "print(\"Hello\")"
language: "python"
```

### XML
```jsx
<Code syntax="xml" lang="java" name="code" type="snippet">
  System.out.println("Hello");
</Code>
```
**Output:**
```xml
<code language="java" type="snippet">System.out.println("Hello");</code>
```

## Examples

### Basic Code Examples
```jsx
<p>
  Use the <Code>Array.map()</Code> method to transform arrays.
</p>

<Code inline={false} lang="javascript">
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(x => x * 2);
  console.log(doubled); // [2, 4, 6, 8, 10]
</Code>
```

### Multiple Languages
```jsx
<!-- JavaScript -->
<Code inline={false} lang="javascript">
  const greeting = "Hello, World!";
  console.log(greeting);
</Code>

<!-- Python -->
<Code inline={false} lang="python">
  greeting = "Hello, World!"
  print(greeting)
</Code>

<!-- Bash -->
<Code inline={false} lang="bash">
  echo "Hello, World!"
</Code>
```

### Real-world Example: JavaScript Functions

**Template:**
```jsx
<div>
  <p>Here is a <Bold>JavaScript function</Bold>:</p>
  <Code inline={false} lang="javascript">{code}</Code>
</div>
```

**Usage:**
```typescript
const template = `
<div>
  <p>Here is a <Bold>JavaScript function</Bold>:</p>
  <Code inline={false} lang="javascript">{code}</Code>
</div>
`;

const jsCode = 'function greet(name) { return `Hello, ${name}!`; }';
const result = await epomlparse(template, { code: jsCode });
```

**Output:**
```
Here is a **JavaScript function**:
```javascript
function greet(name) { return `Hello, ${name}!`; }
```
```

### With Styling and Metadata
```jsx
<Code 
  inline={false}
  lang="typescript"
  className="code-block"
  name="interface-example"
  type="definition"
  speaker="ai"
  blankLine={true}
>
  interface User {
    id: number;
    name: string;
    email: string;
  }
</Code>
```

### Content Limits
```jsx
<Code charLimit={100}>
  This is a very long code snippet that will be truncated if it exceeds the character limit
</Code>

<Code tokenLimit={10} inline={false} lang="javascript">
  function veryLongFunctionName(parameterOne, parameterTwo, parameterThree) {
    // This will be truncated at token limit
    return parameterOne + parameterTwo + parameterThree;
  }
</Code>
```

## Best Practices

1. **Use Template Variables for Complex Code**: For JavaScript code blocks containing functions, semicolons, or complex syntax, use template variables to avoid JSX parsing conflicts:
   ```jsx
   // ✅ Recommended - Using template variables
   <Code inline={false} lang="javascript">{code}</Code>
   
   // ❌ Avoid - Direct code in JSX (causes parsing errors)
   <Code inline={false} lang="javascript">
     function greet(name) { return 'Hello ' + name; }
   </Code>
   ```

2. **Language Specification**: Always specify the `lang` prop for better syntax highlighting
3. **Inline vs Block**: Use inline for short snippets, block for multi-line code
4. **Whitespace**: Use `whiteSpace="pre"` (default) to preserve code formatting
5. **Consistent Syntax**: Choose one output format and stick with it
6. **Escaping**: Let EPOML handle escaping - don't manually escape code content
7. **Readability**: Add blank lines around code blocks for better readability

## Common Patterns

### Documentation with Code Examples
```jsx
<div>
  <Header level={3}>Installation</Header>
  <p>Install the package using npm:</p>
  <Code inline={false} lang="bash">npm install epoml</Code>
  
  <Header level={3}>Basic Usage</Header>
  <p>Import and use <Code>epomlparse</Code> in your code:</p>
  <Code inline={false} lang="javascript">
    import { epomlparse } from 'epoml';
    
    const template = `&lt;p&gt;Hello, {name}!&lt;/p&gt;`;
    const result = await epomlparse(template, { name: "World" });
  </Code>
</div>
```

### API Documentation
```jsx
<div>
  <Header level={4}>Method: {methodName}</Header>
  <p><Bold>Signature:</Bold></p>
  <Code inline={false} lang={language}>{methodSignature}</Code>
  
  <p><Bold>Example:</Bold></p>
  <Code inline={false} lang={language}>{exampleUsage}</Code>
</div>
```

### Configuration Examples
```jsx
<Header level={3}>Configuration</Header>
<p>Create a <Code>config.json</Code> file:</p>
<Code inline={false} lang="json">
  {
    "apiUrl": "{apiEndpoint}",
    "timeout": {timeoutValue},
    "retries": 3
  }
</Code>
```

### Multi-language Examples
```jsx
<Header level={3}>Hello World Examples</Header>

<Header level={4}>JavaScript</Header>
<Code inline={false} lang="javascript">
  console.log("Hello, World!");
</Code>

<Header level={4}>Python</Header>
<Code inline={false} lang="python">
  print("Hello, World!")
</Code>

<Header level={4}>Java</Header>
<Code inline={false} lang="java">
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
    }
  }
</Code>
```

## Supported Languages

The `lang` prop accepts any programming language identifier. Common examples:

- `javascript`, `js`
- `typescript`, `ts`
- `python`, `py`
- `java`
- `csharp`, `c#`
- `cpp`, `c++`
- `php`
- `ruby`
- `go`
- `rust`
- `swift`
- `kotlin`
- `html`
- `css`
- `sql`
- `bash`, `shell`
- `json`
- `yaml`, `yml`
- `xml`
- `markdown`, `md`

## Advanced Usage

### Custom Writer Options
```jsx
<Code 
  inline={false}
  lang="javascript"
  writerOptions={{ 
    tabSize: 2,
    useTabs: false 
  }}
>
  function example() {
    return "formatted code";
  }
</Code>
```

### Conditional Code Display
```jsx
{showJavaScript && (
  <Code inline={false} lang="javascript">{jsCode}</Code>
)}
{showPython && (
  <Code inline={false} lang="python">{pythonCode}</Code>
)}
```

### Code with Line Numbers (HTML output)
```jsx
<Code 
  syntax="html"
  inline={false}
  lang="javascript"
  className="line-numbers"
>
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
</Code>
```

## Troubleshooting

### JSX Parsing Errors

If you encounter syntax errors like "Expected ';', '}' or <eof>" when using the Code component, it's likely due to JSX parsing conflicts. Here's how to resolve them:

**❌ Problem:** Direct JavaScript code in JSX
```jsx
<!-- This will cause parsing errors -->
<Code inline={false} lang="javascript">
  function greet(name) {
    console.log('Hello, ' + name + '!');
  }
</Code>
```

**✅ Solution:** Use template variables
```jsx
<!-- Template -->
<Code inline={false} lang="javascript">{code}</Code>
```
```typescript
// JavaScript
const jsCode = `function greet(name) {
  console.log('Hello, ' + name + '!');
}`;
const result = await epomlparse(template, { code: jsCode });
```

**Why this happens:** The SWC JSX parser tries to parse content inside JSX tags as JSX syntax, but JavaScript keywords like `function`, `return`, and semicolons confuse the parser.

### Container Elements

When using multiple JSX elements, wrap them in a container to prevent parsing issues:

```jsx
<!-- ✅ Good: Wrapped in container -->
<div>
  <p>This text contains <Bold>emphasized words</Bold> within it.</p>
  <Code inline={false} lang="javascript">{code}</Code>
</div>

<!-- ❌ Avoid: Multiple top-level elements -->
<p>This text contains <Bold>emphasized words</Bold> within it.</p>
<Code inline={false} lang="javascript">{code}</Code>
```

## Related Components

- **[Header](./Header.md)** - For section titles in code documentation
- **[Bold](./Bold.md)** - For emphasizing important parts in explanations
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For code examples with descriptions