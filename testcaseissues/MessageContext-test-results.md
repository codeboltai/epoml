# MessageContext Component

## × should render message context with metadata (8 ms)
**Input:**
```jsx
<MessageContext description="Test context" metadata={{timestamp: "2024-01-01", source: "test"}}>Context content</MessageContext>
```

**Error:**
```
JSX value should be either an expression or a quoted JSX text
Syntax Error
```

## √ should render basic message context (96 ms)
## √ should render message context with html syntax (1 ms)
## √ should render message context with json syntax (1 ms)
