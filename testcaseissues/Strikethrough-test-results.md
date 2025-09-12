# Strikethrough Component

## × should render strikethrough text with html syntax (2 ms)
**Input:**
```jsx
<Strikethrough syntax="html">This is strikethrough text</Strikethrough>
```

**Expected:**
```
<del>This is strikethrough text</del>
```

**Actual:**
```
This is strikethrough text
```

## × should render strikethrough text with json syntax (4 ms)
**Input:**
```jsx
<Strikethrough syntax="json">This is strikethrough text</Strikethrough>
```

**Expected:**
```
"type": "strikethrough"
"text": "This is strikethrough text"
```

**Actual:**
```
{"type":"strikethrough","text":"This is strikethrough text"}
```

## √ should render strikethrough text with markdown syntax (6 ms)
## √ should render strikethrough text with custom class (1 ms)
