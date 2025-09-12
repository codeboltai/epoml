# Folder Component

## × should render basic folder (13 ms)
**Input:**
```jsx
<Folder name="Test Folder"/>
```

**Expected:**
```
📁 Test Folder
```

**Actual:**
```
📁 **Test Folder**
```

## × should render folder with path (2 ms)
**Input:**
```jsx
<Folder name="Test Folder" path="/test/path" />
```

**Expected:**
```
📁 Test Folder
```

**Actual:**
```
📁 **Test Folder** (`/test/path`)
```

## √ should render folder with html syntax (2 ms)
## √ should render folder with json syntax (3 ms)
