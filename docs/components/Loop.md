# Loop Component

## Overview
The `Loop` component enables iteration over arrays and dynamic content rendering with context management. It supports advanced loop expressions and context variables.

## Usage Example
```jsx
<Loop for="item in items">
  <Task text="Process {item}" />
</Loop>
```

## Props
| Prop     | Type                  | Required | Description                                         |
|----------|-----------------------|----------|-----------------------------------------------------|
| for      | string                | Yes      | Loop expression (e.g., "item in items")             |
| children | ReactNode             | Yes      | Content to render for each item                     |
| context  | Record<string, any>   | No       | Additional context variables                        |

## Loop Expression Syntax
- `for="item in items"` — Iterates over `items` array, exposes `item`, `index`, `length` in context
- Nested loops supported

## Output Format Examples
### Markdown
```markdown
- Process apple
- Process banana
- Process cherry
```
### HTML
```html
<ul>
  <li>Process apple</li>
  <li>Process banana</li>
  <li>Process cherry</li>
</ul>
```
### JSON
```json
[
  { "item": "apple", "output": "Process apple" },
  { "item": "banana", "output": "Process banana" },
  { "item": "cherry", "output": "Process cherry" }
]
```
### YAML
```yaml
- item: apple
  output: Process apple
- item: banana
  output: Process banana
- item: cherry
  output: Process cherry
```
### XML
```xml
<Loop for="item in items">
  <Task>Process apple</Task>
  <Task>Process banana</Task>
  <Task>Process cherry</Task>
</Loop>
```
### Text
Process apple
Process banana
Process cherry

## Practical Examples
- List rendering: `<Loop for="user in users"><Task text="Welcome {user}" /></Loop>`
- Dynamic templates: `<Loop for="step in steps"><Paragraph text="Step {index}: {step}" /></Loop>`
- Nested loops: `<Loop for="group in groups"><Loop for="member in group.members"><Text text="{member}" /></Loop></Loop>`

## Template Variable Support
- Use `{item}`, `{index}`, `{length}` in children for dynamic content

## Best Practices
- Use context for advanced scenarios
- Avoid deeply nested loops for readability
- Leverage template variables for dynamic rendering

## Common Patterns
- Data rendering
- List generation
- Dynamic content creation

## Integration
- Use with `Task`, `Question`, `Role` for repeated structures

## Related Components
- [StepwiseInstructions](./StepwiseInstructions.md)
- [List](./List.md)
- [Table](./Table.md)
