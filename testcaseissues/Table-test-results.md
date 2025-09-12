# Table Component

## × should render basic table with headers and rows (11 ms)
**Input:**
```jsx
<Table headers={["Name", "Age"]} rows={[["Alice", "30"], ["Bob", "25"]]} />
```

**Expected:**
```
| Name | Age |
| --- | --- |
| Alice | 30 |
| Bob | 25 |
```

**Actual:**
```
Name | Age
--- | ---
Alice | 30
Bob | 25
```

## √ should render table with caption (3 ms)
## √ should render table with html syntax (4 ms)
