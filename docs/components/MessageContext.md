# MessageContext Component

## Overview
The `MessageContext` component provides context information and metadata for conversations and messages, supporting advanced debugging and documentation.

## Usage Example
```jsx
<MessageContext description="System message context" metadata={{ version: "1.0", source: "system" }} />
```

## Props
| Prop        | Type                | Required | Description                                 |
|-------------|---------------------|----------|---------------------------------------------|
| description | string              | No       | Description of the context                  |
| metadata    | Record<string, any> | No       | Metadata for the message/context            |
| ...baseProps| any                 | No       | Standard base props                         |

## Output Format Examples
### Markdown
```markdown
**Context:** System message context
Metadata:
- version: 1.0
- source: system
```
### HTML
```html
<div class="message-context">
  <strong>Context:</strong> System message context<br/>
  <ul>
    <li>version: 1.0</li>
    <li>source: system</li>
  </ul>
</div>
```
### JSON
```json
{
  "description": "System message context",
  "metadata": {
    "version": "1.0",
    "source": "system"
  }
}
```
### YAML
```yaml
description: System message context
metadata:
  version: 1.0
  source: system
```
### XML
```xml
<MessageContext>
  <Description>System message context</Description>
  <Metadata>
    <version>1.0</version>
    <source>system</source>
  </Metadata>
</MessageContext>
```
### Text
Context: System message context. Metadata: version=1.0, source=system

## Practical Examples
- Conversation context: `<MessageContext description="Chat context" metadata={{ topic: "Support" }} />`
- Debugging: `<MessageContext metadata={{ debug: true, traceId: "abc123" }} />`
- Dynamic: `<MessageContext description="{contextDesc}" metadata={contextMeta} />`

## Template Variable Support
```jsx
<MessageContext description="{contextDesc}" metadata={contextMeta} />
```

## Best Practices
- Use metadata for advanced context
- Provide clear descriptions for debugging
- Organize metadata for readability

## Common Patterns
- Chat applications
- Logging systems
- Conversation analysis

## Integration
- Use with conversation and message components

## Related Components
- [Conversation](./Conversation.md)
- [HumanMessage](./HumanMessage.md)
- [AiMessage](./AiMessage.md)
- [SystemMessage](./SystemMessage.md)
