# Task Component

## × should render basic task (10 ms)
**Input:**
```jsx
<Task title="Test Task" description="This is a test task" />
```

**Expected:**
```
## ⏳ 🔸 Test Task
**Description:** This is a test task
**Status:** pending
**Priority:** medium
```

**Actual:**
```
TASK: ⏳ 🔸 Test Task
-------------------
Description: This is a test task
Status: pending
Priority: medium
```

## × should render task with assignee and due date (4 ms)
**Input:**
```jsx
<Task title="Test Task" assignee="Alice" dueDate="2023-12-31" />
```

**Expected:**
```
**Assignee:** Alice
**Due Date:** 2023-12-31
```

**Actual:**
```
TASK: ⏳ 🔸 Test Task
-------------------
Status: pending
Priority: medium
Assignee: Alice
Due Date: 2023-12-31
```

## × should render blocked task (1 ms)
**Input:**
```jsx
<Task title="Test Task" blocked={true} />
```

**Expected:**
```
**Blocked:** Yes
```

**Actual:**
```
TASK: ⏳ 🔸 Test Task
-------------------
Status: pending
Priority: medium
Blocked: Yes
```

## √ should render task with ID (2 ms)
## √ should render task with different status (1 ms)
## √ should render task with different priority (1 ms)
## √ should render task with html syntax (4 ms)
