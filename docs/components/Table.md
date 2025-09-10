# Table Component

The Table component creates structured data tables with headers, rows, and various formatting options across multiple output formats.

## Usage

```jsx
<Table 
  headers={["Name", "Age", "City"]}
  rows={[
    ["Alice", "28", "New York"],
    ["Bob", "32", "Los Angeles"],
    ["Charlie", "25", "Chicago"]
  ]}
  caption="User Information"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headers` | `string[]` | `[]` | Table column headers |
| `rows` | `string[][]` | `[]` | Table data rows |
| `caption` | `string` | - | Table caption |
| `bordered` | `boolean` | `false` | Whether to render with borders |
| `striped` | `boolean` | `false` | Whether to render with striped rows |
| `align` | `('left' \| 'center' \| 'right')[]` | `[]` | Column alignment settings |
| `syntax` | `Syntax` | `'text'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |

## Output Formats

### Markdown
```jsx
<Table 
  syntax="markdown"
  headers={["Feature", "Status"]}
  rows={[
    ["Authentication", "✅ Complete"],
    ["API", "🚧 In Progress"],
    ["Documentation", "⏳ Pending"]
  ]}
  caption="Project Status"
/>
```

**Output:**
```markdown
Table: Project Status

| Feature | Status |
| --- | --- |
| Authentication | ✅ Complete |
| API | 🚧 In Progress |
| Documentation | ⏳ Pending |
```

### HTML
```jsx
<Table 
  syntax="html"
  headers={["Product", "Price", "Stock"]}
  rows={[
    ["Laptop", "$999", "5"],
    ["Mouse", "$25", "50"],
    ["Keyboard", "$75", "20"]
  ]}
  bordered={true}
  striped={true}
  align={["left", "right", "center"]}
/>
```

**Output:**
```html
<table>
  <thead>
    <tr>
      <th align="left">Product</th>
      <th align="right">Price</th>
      <th align="center">Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">Laptop</td>
      <td align="right">$999</td>
      <td align="center">5</td>
    </tr>
    <tr class="striped">
      <td align="left">Mouse</td>
      <td align="right">$25</td>
      <td align="center">50</td>
    </tr>
    <tr>
      <td align="left">Keyboard</td>
      <td align="right">$75</td>
      <td align="center">20</td>
    </tr>
  </tbody>
</table>
```

### Text (Default)
```jsx
<Table 
  headers={["ID", "Name", "Department"]}
  rows={[
    ["001", "Alice Johnson", "Engineering"],
    ["002", "Bob Smith", "Marketing"],
    ["003", "Carol Davis", "Design"]
  ]}
  bordered={true}
/>
```

**Output:**
```text
+-----+---------------+-------------+
| ID  | Name          | Department  |
+-----+---------------+-------------+
| 001 | Alice Johnson | Engineering |
| 002 | Bob Smith     | Marketing   |
| 003 | Carol Davis   | Design      |
+-----+---------------+-------------+
```

### JSON
```jsx
<Table 
  syntax="json"
  headers={["Metric", "Value"]}
  rows={[
    ["Users", "1,234"],
    ["Revenue", "$45,678"],
    ["Growth", "15%"]
  ]}
  caption="Dashboard Metrics"
/>
```

**Output:**
```json
{
  "caption": "Dashboard Metrics",
  "headers": ["Metric", "Value"],
  "rows": [
    ["Users", "1,234"],
    ["Revenue", "$45,678"],
    ["Growth", "15%"]
  ]
}
```

## Examples

### Data Dashboard
```jsx
<div>
  <Header level={2}>Performance Metrics</Header>
  
  <Table 
    headers={["KPI", "Current", "Target", "Status"]}
    rows={[
      ["Revenue", "$125,000", "$120,000", "✅ Above"],
      ["Users", "2,450", "2,500", "⚠️ Below"],
      ["Conversion", "3.2%", "3.0%", "✅ Above"],
      ["Churn", "1.8%", "2.0%", "✅ Below"]
    ]}
    caption="Q1 2024 Performance Dashboard"
    striped={true}
    align={["left", "right", "right", "center"]}
  />
</div>
```

### Comparison Table
```jsx
<Table 
  headers={["Feature", "Basic", "Pro", "Enterprise"]}
  rows={[
    ["Users", "5", "25", "Unlimited"],
    ["Storage", "1GB", "10GB", "1TB"],
    ["API Calls", "1,000", "10,000", "Unlimited"],
    ["Support", "Email", "Priority", "24/7 Phone"],
    ["Price", "$9/mo", "$29/mo", "$99/mo"]
  ]}
  caption="Plan Comparison"
  align={["left", "center", "center", "center"]}
/>
```

### Financial Report
```jsx
<Table 
  headers={["Quarter", "Revenue", "Expenses", "Profit", "Margin"]}
  rows={[
    ["Q1 2023", "$450K", "$320K", "$130K", "28.9%"],
    ["Q2 2023", "$520K", "$350K", "$170K", "32.7%"],
    ["Q3 2023", "$485K", "$340K", "$145K", "29.9%"],
    ["Q4 2023", "$610K", "$380K", "$230K", "37.7%"]
  ]}
  caption="Annual Financial Summary"
  align={["center", "right", "right", "right", "right"]}
  bordered={true}
/>
```

### API Endpoints Table
```jsx
<Table 
  headers={["Method", "Endpoint", "Description", "Auth Required"]}
  rows={[
    ["GET", "/api/users", "List all users", "Yes"],
    ["POST", "/api/users", "Create new user", "Yes"],
    ["GET", "/api/users/:id", "Get user by ID", "Yes"],
    ["PUT", "/api/users/:id", "Update user", "Yes"],
    ["DELETE", "/api/users/:id", "Delete user", "Yes"]
  ]}
  caption="User Management API"
  align={["center", "left", "left", "center"]}
/>
```

### Test Results
```jsx
<Table 
  headers={["Test Case", "Expected", "Actual", "Result"]}
  rows={[
    ["Login with valid credentials", "Success", "Success", "✅ Pass"],
    ["Login with invalid password", "Error", "Error", "✅ Pass"],
    ["Create new account", "Success", "Success", "✅ Pass"],
    ["Upload large file", "Success", "Timeout", "❌ Fail"],
    ["Delete account", "Success", "Success", "✅ Pass"]
  ]}
  caption="Integration Test Results"
  striped={true}
  align={["left", "left", "left", "center"]}
/>
```

### With Variables
```jsx
const tableTemplate = `
  <Table 
    headers={tableData.headers}
    rows={tableData.rows}
    caption={tableData.caption}
    align={tableData.alignment}
    striped={tableData.striped}
  />
`;

const tableData = {
  headers: ["Product", "Sales", "Growth"],
  rows: [
    ["Product A", "1,234", "+15%"],
    ["Product B", "987", "+8%"],
    ["Product C", "1,567", "+23%"]
  ],
  caption: "Sales Performance",
  alignment: ["left", "right", "right"],
  striped: true
};
```

### Dynamic Table Generation
```jsx
<Table 
  headers={Object.keys(data[0])}
  rows={data.map(item => Object.values(item))}
  caption={`${reportType} Report - ${data.length} records`}
  align={alignments}
  striped={true}
/>
```

## Best Practices

1. **Consistent Data Types**: Ensure all rows have the same number of columns as headers
2. **Appropriate Alignment**: Use right alignment for numbers, left for text, center for status
3. **Clear Headers**: Use descriptive, concise column headers
4. **Data Formatting**: Format numbers, dates, and currencies consistently
5. **Accessibility**: Include captions for screen readers
6. **Performance**: Consider pagination for large datasets

## Advanced Usage

### Conditional Styling
```jsx
<Table 
  headers={["Status", "Count", "Percentage"]}
  rows={data.map(item => [
    item.status,
    item.count.toString(),
    `${item.percentage}%`
  ])}
  striped={data.length > 5}
  bordered={showBorders}
  align={["center", "right", "right"]}
/>
```

### Multi-Format Support
```jsx
const generateTable = (format) => (
  <Table 
    syntax={format}
    headers={["Item", "Value"]}
    rows={[["A", "1"], ["B", "2"]]}
    caption="Data Table"
  />
);

// Generate for different formats
['markdown', 'html', 'text', 'json'].forEach(format => {
  console.log(`${format}:`, generateTable(format));
});
```

### Empty State Handling
```jsx
<Table 
  headers={["Column 1", "Column 2"]}
  rows={data.length > 0 ? data : [["No data available", ""]]}
  caption={data.length > 0 ? "Data Table" : "Empty Table"}
/>
```

## Common Patterns

### Summary Tables
```jsx
<Table 
  headers={["Summary", "Value"]}
  rows={[
    ["Total Records", totalRecords.toString()],
    ["Processing Time", `${processingTime}ms`],
    ["Success Rate", `${successRate}%`],
    ["Errors", errorCount.toString()]
  ]}
  align={["left", "right"]}
/>
```

### Configuration Tables
```jsx
<Table 
  headers={["Setting", "Value", "Default"]}
  rows={[
    ["Timeout", "30s", "30s"],
    ["Max Retries", "3", "3"],
    ["Cache TTL", "1h", "30m"],
    ["Debug Mode", "false", "false"]
  ]}
  caption="Current Configuration"
/>
```

## Related Components

- **[Document](./Document.md)** - For including tables in full documents
- **[Header](./Header.md)** - For table section titles
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For table descriptions