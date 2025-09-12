# Header Component

## × should render header with html syntax (10 ms)
**Input:**
```jsx
<Header level={3} syntax="html">Test Header</Header>
```

**Expected:**
```
<h3>Test Header</h3>
```

**Actual:**
```
Test Header
```

## √ should render header with default level (25 ms)
## √ should render header with specific level (4 ms)
## √ should render header with custom class (1 ms)
