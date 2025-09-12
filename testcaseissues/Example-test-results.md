# Example Component

## × should render basic example (8 ms)
**Input:**
```jsx
<Example title="Test Example">Example content</Example>
```

**Expected:**
```
## 📝 Example: Test Example
```

**Actual:**
```
EXAMPLE: 📝 Test Example
===========================
Difficulty: beginner
Content:
-------
Example content
```

## × should render example with description and category (2 ms)
**Input:**
```jsx
<Example title="Test Example" description="This is a test" category="Testing">Example content</Example>
```

**Expected:**
```
**Description:** This is a test
**Category:** Testing
```

**Actual:**
```
EXAMPLE: 📝 Test Example
===========================
Description: This is a test
Category: Testing
Difficulty: beginner
Content:
-------
Example content
```

## × should render example with different difficulty levels (2 ms)
**Input:**
```jsx
<Example title="Test Example" difficulty="beginner">Example content</Example>
```

**Expected:**
```
🟢
```

**Actual:**
```
EXAMPLE: 📝 Test Example
===========================
Difficulty: beginner
Content:
-------
Example content
```

## √ should render example with html syntax (6 ms)
