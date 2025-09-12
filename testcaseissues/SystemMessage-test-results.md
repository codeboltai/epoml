# SystemMessage Component

## × should render basic system message (8 ms)
**Input:**
```jsx
<SystemMessage>This is a system message</SystemMessage>
```

**Expected:**
```
System: This is a system message
```

**Actual:**
```
**System**: This is a system message
```

## × should render system message with message type (1 ms)
**Input:**
```jsx
<SystemMessage messageType="warning">This is a system message</SystemMessage>
```

**Expected:**
```
System [warning]: This is a system message
```

**Actual:**
```
**System** [warning]: This is a system message
```

## × should render system message with priority (2 ms)
**Input:**
```jsx
<SystemMessage priority="high">This is a system message</SystemMessage>
```

**Expected:**
```
System (high): This is a system message
```

**Actual:**
```
**System** (high): This is a system message
```

## √ should render system message with html syntax (2 ms)
