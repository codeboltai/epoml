# HumanMessage Component

## × should render basic human message (7 ms)
**Input:**
```jsx
<HumanMessage name="Alice">This is a human message</HumanMessage>
```

**Expected:**
```
Alice: This is a human message
```

**Actual:**
```
**Alice**: This is a human message
```

## × should render human message with user ID (2 ms)
**Input:**
```jsx
<HumanMessage name="Alice" userId="123">This is a human message</HumanMessage>
```

**Expected:**
```
Alice (123): This is a human message
```

**Actual:**
```
**Alice** (123): This is a human message
```

## √ should render human message with html syntax (1 ms)
## √ should render human message with json syntax (2 ms)
