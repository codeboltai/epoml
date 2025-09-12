# Inline Component

## × should render inline content with html syntax (2 ms)
**Input:**
```jsx
<Inline syntax="html">This is inline content</Inline>
```

**Expected:**
```
<span>This is inline content</span>
```

**Actual:**
```
This is inline content
```

## √ should render basic inline content (9 ms)
## √ should render inline content with json syntax (1 ms)
## √ should render inline content with custom class (2 ms)
