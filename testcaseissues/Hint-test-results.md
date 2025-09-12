# Hint Component

## × should render basic hint (18 ms)
**Input:**
```jsx
<Hint text="This is a hint" type="tip" />
```

**Expected:**
```
> 💡 **Tip**
> This is a hint
```

**Actual:**
```
💡 Tip 🟢
--------
This is a hint
```

## × should render hint with different types (2 ms)
**Input:**
```jsx
<Hint text="This is a warning" type="warning" />
```

**Expected:**
```
> ⚠️ **Warning**
```

**Actual:**
```
⚠️ Warning 🟢
------------
This is a warning
```

## × should render hint with title and topic (4 ms)
**Input:**
```jsx
<Hint text="This is a hint" type="tip" title="Custom Title" topic="Testing" />
```

**Expected:**
```
> 💡 **Custom Title**
> *Topic: Testing*
```

**Actual:**
```
💡 Custom Title 🟢
-----------------
This is a hint
Topic: Testing
```

## √ should render hint with html syntax (3 ms)
