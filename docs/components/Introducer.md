# Introducer Component

## Overview
The `Introducer` component is designed to provide clear introductions and context setting for speakers, roles, or sections in documentation, presentations, or conversations. It supports tone customization and professional context management.

## Usage Example
```jsx
<Introducer name="Alice" role="Moderator" text="Welcome to the session!" tone="enthusiastic" purpose="Kickoff" />
```

## Props
| Prop         | Type     | Required | Description                                                                                 |
|--------------|----------|----------|---------------------------------------------------------------------------------------------|
| name         | string   | No       | Name of the introducer (speaker, author, etc.)                                              |
| role         | string   | No       | Role or title of the introducer                                                             |
| text         | string   | Yes      | Main introduction text                                                                     |
| purpose      | string   | No       | Purpose or context for the introduction                                                     |
| tone         | string   | No       | Tone of introduction: 'formal', 'casual', 'professional', 'friendly', 'enthusiastic'        |
| ...baseProps | any      | No       | Standard base props                                                                         |

## Output Format Examples
### Markdown
```markdown
👋 **Alice (Moderator)**
Welcome to the session!
Purpose: Kickoff
Tone: Enthusiastic 😃
```
### HTML
```html
<div class="introducer">
  <strong>👋 Alice (Moderator)</strong><br/>
  Welcome to the session!<br/>
  <em>Purpose: Kickoff</em><br/>
  <span>Tone: Enthusiastic 😃</span>
</div>
```
### JSON
```json
{
  "name": "Alice",
  "role": "Moderator",
  "text": "Welcome to the session!",
  "purpose": "Kickoff",
  "tone": "enthusiastic"
}
```
### YAML
```yaml
name: Alice
role: Moderator
text: Welcome to the session!
purpose: Kickoff
tone: enthusiastic
```
### XML
```xml
<Introducer name="Alice" role="Moderator" purpose="Kickoff" tone="enthusiastic">
  Welcome to the session!
</Introducer>
```
### Text
👋 Alice (Moderator): Welcome to the session! [Purpose: Kickoff] [Tone: Enthusiastic 😃]

## Practical Examples
- Basic: `<Introducer text="Hello!" />`
- With context: `<Introducer name="Dr. Smith" role="Presenter" text="Let's begin our review." purpose="Annual Meeting" tone="formal" />`
- Casual: `<Introducer name="Sam" text="Hey folks!" tone="casual" />`
- Professional: `<Introducer name="Jane" role="Lead" text="Welcome to the quarterly update." tone="professional" />`

## Template Variable Support
You can use template variables in props:
```jsx
<Introducer name="{speakerName}" role="{role}" text="{introText}" tone="{tone}" />
```

## Best Practices
- Choose tone to match audience and context
- Use `purpose` for clarity in meetings or presentations
- Set `role` for professional introductions

## Common Patterns
- Presentations: Introduce speakers with role and purpose
- Documentation: Set context for sections
- Meetings: Welcome participants and clarify agenda

## Related Components
- [Role](./Role.md)
- [Conversation](./Conversation.md)
- [MessageContext](./MessageContext.md)
