# OutputFormat Component

## × should render basic output format (11 ms)
**Input:**
```jsx
<OutputFormat type="json" description="JSON format" />
```

**Expected:**
```
## Output Format: json
**Description:** JSON format
```

**Actual:**
```
OUTPUT FORMAT: JSON
==================
Description: JSON format
```

## × should render output format with example (1 ms)
**Input:**
```jsx
<OutputFormat type="json" description="JSON format" example=`{"key": "value"}` />
```

**Error:**
```
JSX value should be either an expression or a quoted JSX text
Syntax Error
```

## × should render output format with schema
**Input:**
```jsx
<OutputFormat type="json" description="JSON format" schema={{type: "object"}} />
```

**Error:**
```
JSX value should be either an expression or a quoted JSX text
Syntax Error
```

## √ should render preferred output format (2 ms)
## √ should render output format with html syntax (1 ms)