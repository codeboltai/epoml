# Italic Component

## × should render italic text with html syntax (2 ms)
**Input:**
```jsx
<Italic syntax="html">This is italic text</Italic>
```

**Expected:**
```
<em>This is italic text</em>
```

**Actual:**
```
This is italic text
```

## × should render italic text with json syntax (1 ms)
**Input:**
```jsx
<Italic syntax="json">This is italic text</Italic>
```

**Expected:**
```
"type": "italic"
```

**Actual:**
```
{"type":"italic","text":"This is italic text"}
```

## √ should render italic text with markdown syntax (6 ms)
## √ should render italic text with custom class
