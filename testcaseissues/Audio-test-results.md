# Audio Component

## × should render basic audio component (7 ms)
**Input:**
```jsx
<Audio src="test.mp3" alt="Test audio" />
```

**Expected:**
```
[Audio:
```

**Actual:**
```
Test audio
```

## × should render audio with position (1 ms)
**Input:**
```jsx
<Audio src="test.mp3" alt="Test audio" position="top" />
```

**Expected:**
```
[Audio:
```

**Actual:**
```
Test audio
```

## × should render audio with different syntax (1 ms)
**Input:**
```jsx
<Audio src="test.mp3" alt="Test audio" syntax="html" />
```

**Expected:**
```
<audio
```

**Actual:**
```
Test audio
```

## √ should render audio with base64 data (1 ms)
