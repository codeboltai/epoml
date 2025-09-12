# Underline Component

## × should render underlined text with json syntax (2 ms)
**Input:**
```jsx
<Underline syntax="json">This is underlined text</Underline>
```

**Expected:**
```
"type": "underline"
"text": "This is underlined text"
```

**Actual:**
```
{"type":"underline","text":"This is underlined text"}
```

## √ should render underlined text with markdown syntax (16 ms)
## √ should render underlined text with html syntax (1 ms)
## √ should render underlined text with custom class (3 ms)
