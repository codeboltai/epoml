# StepwiseInstructions Component

## × should render basic instructions (10 ms)
**Input:**
```jsx
<StepwiseInstructions title="Setup Guide" steps={["Step 1", "Step 2"]} />
```

**Expected:**
```
# Setup Guide
1. Step 1
2. Step 2
```

**Actual:**
```
INSTRUCTIONS: Setup Guide
======================
STEPS:
-----
1. Step 1
2. Step 2
```

## √ should render instructions with description (2 ms)
## √ should render unnumbered steps (1 ms)
## √ should render instructions with html syntax (2 ms)
## √ should render instructions with json syntax (1 ms)
