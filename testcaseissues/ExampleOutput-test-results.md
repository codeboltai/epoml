# ExampleOutput Component

## × should render basic example output (97 ms)
**Input:**
```jsx
<ExampleOutput label="Test Output">Output content</ExampleOutput>
```

**Expected:**
```
**Test Output:**
`Output content`
```

**Actual:**
```
**Test Output**
```
Output content
```
```

## × should render example output as block (2 ms)
**Input:**
```jsx
<ExampleOutput label="Test Output" inline={false}>Output content</ExampleOutput>
```

**Expected:**
```
```Output content```
```

**Actual:**
```
**Test Output**
```
Output content
```
```

## × should render example output with format (6 ms)
**Input:**
```jsx
<ExampleOutput label="Test Output" format="json" inline={false}>{"result": "success"}</ExampleOutput>
```

**Error:**
```
Expected '</', got ':'
Syntax Error
```

## × should render example output with html syntax (2 ms)
**Input:**
```jsx
<ExampleOutput label="Test Output" syntax="html">Output content</ExampleOutput>
```

**Expected:**
```
<strong>Test Output:</strong>
<code>Output content</code>
```

**Actual:**
```
<div class="example-output">
  <h4>Test Output</h4>
  <pre><code>Output content</code></pre>
</div>
```
