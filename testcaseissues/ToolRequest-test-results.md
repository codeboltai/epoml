# ToolRequest Component

## × should render tool request with parameters (1 ms)
**Input:**
```jsx
<ToolRequest tool="calculator" parameters={{operation: "add", a: 5, b: 3}}>Request details</ToolRequest>
```

**Error:**
```
JSX value should be either an expression or a quoted JSX text
Syntax Error
```

## √ should render basic tool request (14 ms)
## √ should render tool request with request ID (1 ms)
## √ should render tool request with html syntax (1 ms)
