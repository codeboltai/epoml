# Conversation Component

## Overview
The `Conversation` component organizes message sequences and conversations, supporting participant lists and structured dialogue formatting.

## Usage Example
```jsx
<Conversation title="Team Sync" participants={["Alice", "Bob"]}>
  <HumanMessage text="Hello!" />
  <AiMessage text="Hi Alice!" />
</Conversation>
```

## Props
| Prop         | Type        | Required | Description                                 |
|--------------|-------------|----------|---------------------------------------------|
| title        | string      | No       | Title of the conversation                   |
| participants | string[]    | No       | List of participants                        |
| ...baseProps | any         | No       | Standard base props                         |

## Output Format Examples
### Markdown
```markdown
### Team Sync
**Participants:** Alice, Bob
- Alice: Hello!
- AI: Hi Alice!
```
### HTML
```html
<div class="conversation">
  <h3>Team Sync</h3>
  <span>Participants: Alice, Bob</span>
  <div>Alice: Hello!</div>
  <div>AI: Hi Alice!</div>
</div>
```
### JSON
```json
{
  "title": "Team Sync",
  "participants": ["Alice", "Bob"],
  "messages": [
    { "role": "human", "text": "Hello!" },
    { "role": "ai", "text": "Hi Alice!" }
  ]
}
```
### YAML
```yaml
title: Team Sync
participants:
  - Alice
  - Bob
messages:
  - role: human
    text: Hello!
  - role: ai
    text: Hi Alice!
```
### XML
```xml
<Conversation title="Team Sync">
  <Participants>
    <Participant>Alice</Participant>
    <Participant>Bob</Participant>
  </Participants>
  <HumanMessage>Hello!</HumanMessage>
  <AiMessage>Hi Alice!</AiMessage>
</Conversation>
```
### Text
Team Sync (Participants: Alice, Bob): Alice: Hello! AI: Hi Alice!

## Practical Examples
- Chat log: `<Conversation participants={["User", "Bot"]}><HumanMessage text="Hi" /><AiMessage text="Hello!" /></Conversation>`
- Meeting transcript: `<Conversation title="Weekly Standup" participants={teamMembers} />`
- Dynamic: `<Conversation title="{convTitle}" participants={participantList} />`

## Template Variable Support
```jsx
<Conversation title="{convTitle}" participants={participantList} />
```

## Best Practices
- List all participants for clarity
- Structure messages for readability
- Use titles for context

## Common Patterns
- Chat applications
- Meeting documentation
- Interview records

## Integration
- Use with `HumanMessage`, `AiMessage`, `SystemMessage`, `MessageContext`

## Related Components
- [MessageContext](./MessageContext.md)
- [HumanMessage](./HumanMessage.md)
- [AiMessage](./AiMessage.md)
- [SystemMessage](./SystemMessage.md)
