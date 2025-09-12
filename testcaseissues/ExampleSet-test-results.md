# ExampleSet Component

## × should render example set with html syntax (2 ms)
**Input:**
```jsx
<ExampleSet title="Test Examples" syntax="html">Example content</ExampleSet>
```

**Expected:**
```
<h3>Test Examples</h3>
<p>Example content</p>
```

**Actual:**
```
<div class="example-set">
  <h3>Test Examples</h3>
  <div class="examples">
    <strong>Examples:</strong>
    <ol>
      <li>Example content</li>
    </ol>
  </div>
</div>
```

## √ should render basic example set (91 ms)
## √ should render example set with description (1 ms)
## √ should render example set with inline examples (1 ms)
