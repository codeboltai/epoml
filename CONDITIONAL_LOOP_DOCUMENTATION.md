# Conditional Rendering and Loop Support in EPOML

This document explains how to use the new conditional rendering and loop support features in EPOML components.

## Overview

EPOML now supports two powerful features for dynamic content generation:
1. **Conditional Rendering** using the `if` attribute
2. **Loop Rendering** using the `for` attribute

These features are available in the following components:
- `Paragraph`
- `ListItem`
- `Example`

## Conditional Rendering

Conditional rendering allows you to show or hide components based on a condition.

### Syntax

```jsx
<Component if={condition}>Content</Component>
```

Where `condition` can be:
- A boolean value: `true` or `false`
- A variable reference: `isVisible`
- A string expression: `"count > 0"`

### Examples

```jsx
// Boolean condition
<Paragraph if={true}>This will render</Paragraph>
<Paragraph if={false}>This will not render</Paragraph>

// Variable condition
<Paragraph if={isVisible}>This renders based on isVisible variable</Paragraph>

// With template variables
<Paragraph if={user.isActive}>Welcome, {user.name}!</Paragraph>
```

## Loop Rendering

Loop rendering allows you to iterate over arrays and generate multiple components.

### Syntax

```jsx
<Component for="itemName in arrayExpression">Content with {itemName}</Component>
```

Where:
- `itemName` is the variable name for the current item
- `arrayExpression` is either:
  - A variable reference: `items`
  - An inline array: `['item1', 'item2', 'item3']`

### Examples

```jsx
// Loop over inline array
<Paragraph for="item in ['apple', 'banana', 'cherry']">{item} </Paragraph>

// Loop over variable array
<Paragraph for="user in users">User: {user.name}</Paragraph>

// Loop with index information
<ListItem for="demo in examples">
  Example {loop.index + 1} of {loop.length}: {demo.title}
</ListItem>
```

### Loop Variables

Inside loop iterations, the following special variables are available:
- `loop.index`: Current iteration index (0-based)
- `loop.length`: Total number of items in the list
- `loop.first`: Boolean indicating if this is the first iteration
- `loop.last`: Boolean indicating if this is the last iteration

## Combining Conditions and Loops

You can use both `if` and `for` attributes on the same component:

```jsx
<Paragraph if={hasItems} for="item in items">
  Item: {item} (Index: {loop.index})
</Paragraph>
```

In this case, the condition is evaluated first. If true, then the loop is processed.

## Testing the Features

To test these features, run:

```bash
cd packages/example
npm run example:conditional-loop
```

This will execute the [conditional-loop-example.ts](packages/example/src/conditional-loop-example.ts) file which demonstrates various use cases.

## Implementation Details

The implementation works by:
1. Adding `if` and `for` props to the supported components
2. Processing these props in the renderer rather than component creation
3. Using evaluation context to access variables during rendering
4. Supporting nested loops and conditions

## Security Considerations

The implementation uses JavaScript's `Function` constructor to evaluate expressions, which could be a security risk if processing untrusted templates. In production environments, consider:
1. Sanitizing input templates
2. Using a safer expression evaluation library
3. Implementing stricter context isolation

## Performance Considerations

For better performance:
1. Avoid complex expressions in conditions and loops
2. Consider caching parsed expressions for repeated use
3. Be mindful of deeply nested loops