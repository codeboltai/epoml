# List Component

## × should render unordered list with default settings (17 ms)
**Input:**
```jsx
<List>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
</List>
```

**Expected:**
```
- First item
- Second item
```

**Actual:**
```
(empty string)
```

## × should render ordered list (1 ms)
**Input:**
```jsx
<List ordered={true}>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
</List>
```

**Expected:**
```
1. First item
2. Second item
```

**Actual:**
```
(empty string)
```

## × should render ordered list with custom start (1 ms)
**Input:**
```jsx
<List ordered={true} start={5}>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
</List>
```

**Expected:**
```
5. First item
6. Second item
```

**Actual:**
```
(empty string)
```

## × should render list with html syntax (1 ms)
**Input:**
```jsx
<List syntax="html">
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
</List>
```

**Expected:**
```
<ul>
<li>First item</li>
<li>Second item</li>
</ul>
```

**Actual:**
```
<ul>
</ul>
```
