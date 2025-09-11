# SystemMessage Component

The SystemMessage component represents automated system messages, notifications, and status updates with support for message types and priority levels.

## Usage

```jsx
<SystemMessage messageType="notification" priority="high">
  System maintenance scheduled for tonight at 2 AM.
</SystemMessage>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `messageType` | `string` | - | Type of system message (e.g., 'notification', 'warning', 'info') |
| `priority` | `'low' \| 'medium' \| 'high' \| 'critical'` | - | Priority level of the message |
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling |

## Output Formats

### Markdown (Default)
```jsx
<SystemMessage messageType="notification" priority="high">
  User login detected from new device.
</SystemMessage>
```

**Output:**
```markdown
**System** [notification] (high): User login detected from new device.
```

### HTML
```jsx
<SystemMessage syntax="html" messageType="warning" priority="critical">
  Database connection lost. Please try again.
</SystemMessage>
```

**Output:**
```html
<div class="system-message">
  <strong>System</strong> <em>[warning]</em> <span class="priority-critical">(critical)</span>: Database connection lost. Please try again.
</div>
```

### Plain Text
```jsx
<SystemMessage syntax="text" messageType="info" priority="low">
  System backup completed successfully.
</SystemMessage>
```

**Output:**
```text
System [info] (low): System backup completed successfully.
```

### Structured Formats (JSON, YAML, XML)
```jsx
<SystemMessage syntax="json" messageType="error" priority="high">
  Failed to process payment. Please contact support.
</SystemMessage>
```

**Output:**
```json
{
  "type": "system-message",
  "messageType": "error",
  "priority": "high",
  "content": "Failed to process payment. Please contact support."
}
```

## Examples

### Basic System Message
```jsx
<SystemMessage>
  Operation completed successfully.
</SystemMessage>
```

### Notification Message
```jsx
<SystemMessage messageType="notification" priority="medium">
  New software update available. Please restart the application.
</SystemMessage>
```

### Warning Message
```jsx
<SystemMessage messageType="warning" priority="high">
  Disk space is running low. Please free up some space.
</SystemMessage>
```

### Error Message
```jsx
<SystemMessage messageType="error" priority="critical">
  Authentication failed. Invalid credentials provided.
</SystemMessage>
```

### Information Message
```jsx
<SystemMessage messageType="info" priority="low">
  Daily backup completed at 3:00 AM.
</SystemMessage>
```

## Message Types and Priorities

### Common Message Types
- `notification` - General notifications
- `warning` - Warning messages
- `error` - Error conditions
- `info` - Informational messages
- `success` - Success confirmations
- `alert` - Important alerts
- `maintenance` - Maintenance notifications
- `security` - Security-related messages

### Priority Levels
- `low` - Non-urgent, informational
- `medium` - Standard priority
- `high` - Important, requires attention
- `critical` - Urgent, immediate action required

## Best Practices

1. **Appropriate Types**: Use meaningful message types that match the content
2. **Correct Priorities**: Set priorities that reflect actual urgency
3. **Clear Content**: Write clear, actionable system messages
4. **Consistent Formatting**: Use consistent styling across all system messages
5. **User-Friendly Language**: Use language that users can understand

## Common Patterns

### Status Updates
```jsx
<div>
  <SystemMessage messageType="info" priority="low">
    System status: All services operational
  </SystemMessage>
  
  <SystemMessage messageType="maintenance" priority="medium">
    Scheduled maintenance: Database optimization in progress
  </SystemMessage>
</div>
```

### Error Handling
```jsx
<div>
  <SystemMessage messageType="error" priority="high">
    Connection timeout. Retrying in 30 seconds...
  </SystemMessage>
  
  <SystemMessage messageType="error" priority="critical">
    Critical error: Service unavailable. Please contact support.
  </SystemMessage>
</div>
```

### Security Alerts
```jsx
<div>
  <SystemMessage messageType="security" priority="high">
    Unusual login activity detected from IP: {suspiciousIP}
  </SystemMessage>
  
  <SystemMessage messageType="security" priority="critical">
    Account locked due to multiple failed login attempts
  </SystemMessage>
</div>
```

### User Notifications
```jsx
<div>
  <SystemMessage messageType="notification" priority="medium">
    Welcome back! You have {messageCount} new messages.
  </SystemMessage>
  
  <SystemMessage messageType="success" priority="low">
    Profile updated successfully.
  </SystemMessage>
</div>
```

### System Operations
```jsx
<div>
  <SystemMessage messageType="maintenance" priority="high">
    System will be unavailable for maintenance from 2:00 AM to 4:00 AM EST
  </SystemMessage>
  
  <SystemMessage messageType="info" priority="low">
    Cache cleared. Performance improvements may be noticeable.
  </SystemMessage>
</div>
```

## Integration Examples

### In Conversation Context
```jsx
<Conversation title="Support Chat">
  <HumanMessage name="User" userId="user_123">
    I'm having trouble logging in.
  </HumanMessage>
  
  <SystemMessage messageType="info" priority="low">
    User authentication attempt logged.
  </SystemMessage>
  
  <AiMessage model="support-bot">
    I can help you with login issues. Let me check your account status.
  </AiMessage>
  
  <SystemMessage messageType="warning" priority="medium">
    Multiple failed login attempts detected for this account.
  </SystemMessage>
</Conversation>
```

### Dashboard Notifications
```jsx
<div className="dashboard">
  <Header level={2}>System Status</Header>
  
  <SystemMessage messageType="success" priority="low">
    All systems operational
  </SystemMessage>
  
  <SystemMessage messageType="info" priority="medium">
    Server load: {serverLoad}% - Performance optimal
  </SystemMessage>
  
  <SystemMessage messageType="warning" priority="high">
    High memory usage detected on server-03
  </SystemMessage>
</div>
```

### Application Logs
```jsx
<div>
  <Header level={3}>Application Log - {logDate}</Header>
  
  <SystemMessage messageType="info" priority="low">
    Application started successfully
  </SystemMessage>
  
  <SystemMessage messageType="notification" priority="medium">
    Database connection established
  </SystemMessage>
  
  <SystemMessage messageType="error" priority="high">
    Failed to load configuration file: config.json
  </SystemMessage>
  
  <SystemMessage messageType="warning" priority="medium">
    Using default configuration values
  </SystemMessage>
</div>
```

### Workflow Status
```jsx
<div>
  <Header level={3}>Deployment Pipeline</Header>
  
  <SystemMessage messageType="info" priority="low">
    Build started for commit {commitHash}
  </SystemMessage>
  
  <SystemMessage messageType="success" priority="medium">
    Tests passed: 156/156
  </SystemMessage>
  
  <SystemMessage messageType="notification" priority="medium">
    Deploying to staging environment...
  </SystemMessage>
  
  <SystemMessage messageType="success" priority="high">
    Deployment completed successfully
  </SystemMessage>
</div>
```

## Advanced Usage

### Dynamic Message Types
```jsx
<SystemMessage 
  messageType={getMessageType(status)} 
  priority={calculatePriority(severity)}
>
  {generateStatusMessage(status, details)}
</SystemMessage>
```

### Conditional Priority
```jsx
<SystemMessage 
  messageType="alert"
  priority={isUrgent ? 'critical' : 'medium'}
>
  {alertMessage}
</SystemMessage>
```

### Custom Styling
```jsx
<SystemMessage 
  messageType="custom"
  priority="high"
  className="custom-system-message"
  speaker="monitoring-system"
>
  Custom monitoring alert: {monitoringData}
</SystemMessage>
```

### Template Variables
```jsx
<SystemMessage messageType="{messageType}" priority="{priority}">
  {messageTemplate}
</SystemMessage>
```

### Batch System Messages
```jsx
{systemMessages.map(msg => (
  <SystemMessage 
    key={msg.id}
    messageType={msg.type}
    priority={msg.priority}
  >
    {msg.content}
  </SystemMessage>
))}
```

## Accessibility Considerations

1. **Screen Readers**: Ensure priority levels are announced appropriately
2. **Visual Indicators**: Use color and icons to support priority levels
3. **Clear Language**: Write messages that are easy to understand
4. **Consistent Patterns**: Use consistent message patterns throughout the application

## Use Cases

### Application Monitoring
- System health status
- Performance metrics
- Error notifications
- Maintenance announcements

### User Notifications
- Account updates
- Security alerts
- Feature announcements
- System limitations

### Development and Operations
- Build pipeline status
- Deployment notifications
- Error logging
- Performance monitoring

### Customer Support
- Ticket routing
- Agent assignment
- Escalation notifications
- Resolution updates

## Related Components

- **[HumanMessage](./HumanMessage.md)** - For human-generated messages
- **[AiMessage](./AiMessage.md)** - For AI-generated messages
- **[Conversation](./Conversation.md)** - For organizing message sequences
- **[MessageContext](./MessageContext.md)** - For providing conversation context
- **[Hint](./Hint.md)** - For user hints and tips
