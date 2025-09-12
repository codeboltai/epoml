# Code Component

## × should render block code with language (1 ms)
**Input:**
```jsx
<Code lang="javascript">const x = 1;</Code>
```

**Expected:**
```
```javascript
```

**Actual:**
```
```const x = 1;```
```

## × should render code with html syntax (2 ms)
**Input:**
```jsx
<Code lang="javascript" syntax="html">const x = 1;</Code>
```

**Expected:**
```
<code
```

**Actual:**
```
const x = 1;
```

## × should render code with custom class (1 ms)
**Input:**
```jsx
<Code lang="javascript" className="highlight">const x = 1;</Code>
```

**Expected:**
```
```javascript
```

**Actual:**
```
```const x = 1;```
```

## √ should render inline code with default settings (6 ms)
