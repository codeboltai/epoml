# Question Component

## × should render basic question (11 ms)
**Input:**
```jsx
<Question text="What is EPOML?" />
```

**Expected:**
```
## 🟡 Question
**What is EPOML?**
```

**Actual:**
```
QUESTION: 🟡 What is EPOML?
========================
Difficulty: medium
```

## × should render question with options (6 ms)
**Input:**
```jsx
<Question text="What is EPOML?" type="multiple-choice" options={["A", "B", "C"]} />
```

**Expected:**
```
### Options
A. A
B. B
C. C
```

**Actual:**
```
QUESTION: 🟡 What is EPOML?
========================
Type: multiple-choice
Difficulty: medium
Options:
-------
A. A
B. B
C. C
```

## × should render question with answer (1 ms)
**Input:**
```jsx
<Question text="What is EPOML?" answer="A markup language" />
```

**Expected:**
```
### Answer
- A markup language
```

**Actual:**
```
QUESTION: 🟡 What is EPOML?
========================
Difficulty: medium
Answer:
------
- A markup language
```

## × should render question with explanation (1 ms)
**Input:**
```jsx
<Question text="What is EPOML?" explanation="EPOML stands for Enhanced Plain Old Markup Language" />
```

**Expected:**
```
### Explanation
EPOML stands for Enhanced Plain Old Markup Language
```

**Actual:**
```
QUESTION: 🟡 What is EPOML?
========================
Difficulty: medium
Explanation:
-----------
EPOML stands for Enhanced Plain Old Markup Language
```

## √ should render question with different difficulty levels (7 ms)
## √ should render question with html syntax (3 ms)
