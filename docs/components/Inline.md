# Inline Component

The Inline component provides minimal formatting for inline content, ensuring clean text rendering without additional markup or spacing.

## Usage

```jsx
<!-- Basic inline content -->
<Inline>This is inline text</Inline>

<!-- Inline content within larger text -->
<p>This paragraph contains <Inline>inline content</Inline> within it.</p>

<!-- Multiple inline elements -->
<p>
  User: <Inline>{username}</Inline>, 
  Role: <Inline>{userRole}</Inline>, 
  Status: <Inline>{status}</Inline>
</p>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling |

## Output Formats

### Markdown (Default)
```jsx
<Inline>inline content</Inline>
```
**Output:**
```text
inline content
```

### HTML
```jsx
<Inline syntax="html">inline content</Inline>
```
**Output:**
```html
<span>inline content</span>
```

### JSON
```jsx
<Inline syntax="json">inline content</Inline>
```
**Output:**
```json
"inline content"
```

### YAML
```jsx
<Inline syntax="yaml">inline content</Inline>
```
**Output:**
```yaml
"inline content"
```

### XML
```jsx
<Inline syntax="xml">inline content</Inline>
```
**Output:**
```xml
<span>inline content</span>
```

### Plain Text
```jsx
<Inline syntax="text">inline content</Inline>
```
**Output:**
```text
inline content
```

## Examples

### Basic Inline Usage
```jsx
<p>
  Welcome to <Inline>EPOML</Inline>, the enhanced template engine.
</p>
```

### Variable Interpolation
```jsx
<p>
  Hello, <Inline>{firstName}</Inline> <Inline>{lastName}</Inline>! 
  Your account balance is <Inline>${balance}</Inline>.
</p>
```

**Usage:**
```typescript
const template = `
  <p>
    Hello, <Inline>{firstName}</Inline> <Inline>{lastName}</Inline>! 
    Your account balance is <Inline>${balance}</Inline>.
  </p>
`;

const result = await epomlparse(template, {
  firstName: "John",
  lastName: "Doe", 
  balance: "1,250.00"
});
```

### Data Display
```jsx
<div>
  <p>
    Name: <Inline>{fullName}</Inline><br/>
    Email: <Inline>{email}</Inline><br/>
    Phone: <Inline>{phoneNumber}</Inline><br/>
    Department: <Inline>{department}</Inline>
  </p>
</div>
```

### Custom Styling
```jsx
<p>
  The status is: <Inline className="status-indicator" speaker="system">
    {currentStatus}
  </Inline>
</p>
```

### Whitespace Handling
```jsx
<!-- Filter whitespace (default) -->
<Inline whiteSpace="filter">  Multiple   spaces   normalized  </Inline>
<!-- Output: "Multiple spaces normalized" -->

<!-- Preserve whitespace -->
<Inline whiteSpace="pre">  Exact   spacing   preserved  </Inline>
<!-- Output: "  Exact   spacing   preserved  " -->

<!-- Trim whitespace -->
<Inline whiteSpace="trim">  Leading and trailing removed  </Inline>
<!-- Output: "Leading and trailing removed" -->
```

### Different Syntaxes
```jsx
<!-- For HTML output -->
<p>Status: <Inline syntax="html" className="status">{status}</Inline></p>

<!-- For JSON serialization -->
<Inline syntax="json">{jsonValue}</Inline>

<!-- For plain text -->
<Inline syntax="text">{plainValue}</Inline>
```

## Best Practices

1. **Minimal Formatting**: Use Inline for content that needs minimal processing
2. **Clean Text**: Ideal for user-generated content that should appear as-is
3. **Data Display**: Perfect for displaying variable values inline
4. **Consistent Syntax**: Use same syntax throughout related content
5. **Whitespace Control**: Choose appropriate whitespace handling for your use case
6. **Semantic Meaning**: Use Inline when content doesn't need special formatting

## Common Patterns

### User Information Display
```jsx
<div>
  <p>
    User Profile:<br/>
    ID: <Inline>{userId}</Inline><br/>
    Username: <Inline>{username}</Inline><br/>
    Email: <Inline>{email}</Inline><br/>
    Last Login: <Inline>{lastLogin}</Inline>
  </p>
</div>
```

### Form Field Values
```jsx
<div>
  <p>
    <Bold>Current Settings:</Bold><br/>
    Theme: <Inline>{currentTheme}</Inline><br/>
    Language: <Inline>{selectedLanguage}</Inline><br/>
    Timezone: <Inline>{timezone}</Inline><br/>
    Notifications: <Inline>{notificationSettings}</Inline>
  </p>
</div>
```

### API Response Display
```jsx
<div>
  <p>
    API Response:<br/>
    Status: <Inline>{response.status}</Inline><br/>
    Message: <Inline>{response.message}</Inline><br/>
    Timestamp: <Inline>{response.timestamp}</Inline><br/>
    Request ID: <Inline>{response.requestId}</Inline>
  </p>
</div>
```

### Configuration Values
```jsx
<div>
  <Header level={3}>Current Configuration</Header>
  <p>
    Database Host: <Inline>{config.database.host}</Inline><br/>
    Database Port: <Inline>{config.database.port}</Inline><br/>
    API Endpoint: <Inline>{config.api.endpoint}</Inline><br/>
    Debug Mode: <Inline>{config.debug ? 'Enabled' : 'Disabled'}</Inline>
  </p>
</div>
```

### Dynamic Content
```jsx
<p>
  Welcome back, <Inline>{user.name}</Inline>! 
  You have <Inline>{unreadCount}</Inline> unread messages 
  and <Inline>{pendingTasks}</Inline> pending tasks.
</p>
```

### List Item Content
```jsx
<ul>
  <li>Name: <Inline>{item.name}</Inline></li>
  <li>Price: <Inline>${item.price}</Inline></li>
  <li>Category: <Inline>{item.category}</Inline></li>
  <li>Stock: <Inline>{item.stock} units</Inline></li>
</ul>
```

### Conditional Display
```jsx
<p>
  Status: <Inline>{isOnline ? 'Online' : 'Offline'}</Inline>
  {hasNotifications && (
    <span> - <Inline>{notificationCount}</Inline> new notifications</span>
  )}
</p>
```

### Table-like Data
```jsx
<div>
  <Header level={4}>Server Statistics</Header>
  <p>
    CPU Usage: <Inline>{stats.cpu}%</Inline><br/>
    Memory Usage: <Inline>{stats.memory}%</Inline><br/>
    Disk Usage: <Inline>{stats.disk}%</Inline><br/>
    Uptime: <Inline>{stats.uptime}</Inline><br/>
    Active Connections: <Inline>{stats.connections}</Inline>
  </p>
</div>
```

## Advanced Usage

### Nested in Other Components
```jsx
<CaptionedParagraph caption="User Details">
  Name: <Inline>{user.fullName}</Inline>, 
  Age: <Inline>{user.age}</Inline>, 
  Location: <Inline>{user.city}, {user.country}</Inline>
</CaptionedParagraph>
```

### With Complex Variables
```jsx
<p>
  Transaction: <Inline>{transaction.id}</Inline><br/>
  Amount: <Inline>{transaction.amount} {transaction.currency}</Inline><br/>
  From: <Inline>{transaction.from.name} ({transaction.from.account})</Inline><br/>
  To: <Inline>{transaction.to.name} ({transaction.to.account})</Inline><br/>
  Date: <Inline>{new Date(transaction.timestamp).toLocaleString()}</Inline>
</p>
```

### Multi-format Output
```jsx
<!-- Function to render inline content in different formats -->
function renderInlineData(data, format) {
  return <Inline syntax={format}>{data}</Inline>;
}

<!-- Usage -->
<div>
  <p>Markdown: {renderInlineData(value, 'markdown')}</p>
  <p>HTML: {renderInlineData(value, 'html')}</p>
  <p>JSON: {renderInlineData(value, 'json')}</p>
</div>
```

### Custom Writer Options
```jsx
<Inline 
  syntax="html"
  writerOptions={{ 
    escapeHtml: false // If custom options are supported
  }}
>
  {htmlContent}
</Inline>
```

## Use Cases

1. **Data Display**: Showing variable values inline with text
2. **User Content**: Displaying user-generated content without formatting
3. **Configuration**: Showing configuration values in documentation
4. **Status Information**: Displaying system status and metrics
5. **Form Values**: Showing current form field values
6. **API Responses**: Displaying API response data
7. **Clean Text**: When you need minimal, clean text output

## Comparison with Other Components

| Component | Use Case | Formatting | Best For |
|-----------|----------|------------|----------|
| Inline | Minimal text | None | Variable values, clean text |
| Bold | Emphasis | Bold formatting | Important text, labels |
| Code | Code display | Monospace, syntax highlighting | Code snippets, commands |
| Header | Section titles | Header levels | Document structure |

## Related Components

- **[Bold](./Bold.md)** - For emphasized inline content
- **[Code](./Code.md)** - For inline code snippets
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For structured content with inline elements