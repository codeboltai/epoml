# Introducer Component

## × should render basic introducer (54 ms)
**Input:**
```jsx
<Introducer text="This is an introduction" />
```

**Expected:**
```
# 💼 Introduction
This is an introduction
```

**Actual:**
```
INTRODUCTION: 💼
============
This is an introduction
```

## × should render introducer with name and role (2 ms)
**Input:**
```jsx
<Introducer name="John Doe" role="Developer" text="This is an introduction" />
```

**Expected:**
```
**John Doe, Developer**
```

**Actual:**
```
INTRODUCTION: 💼
============
John Doe, Developer
This is an introduction
```

## × should render introducer with purpose (1 ms)
**Input:**
```jsx
<Introducer text="This is an introduction" purpose="Demo" />
```

**Expected:**
```
*Purpose: Demo*
```

**Actual:**
```
INTRODUCTION: 💼
============
Purpose: Demo
This is an introduction
```

## × should render introducer with different tones (1 ms)
**Input:**
```jsx
<Introducer text="This is an introduction" tone="formal" />
```

**Expected:**
```
# 🎩 Introduction
```

**Actual:**
```
INTRODUCTION: 🎩
============
This is an introduction
```

## √ should render introducer with html syntax (1 ms)
