# Role Component

## Overview
The `Role` component defines roles with associated permissions and responsibilities, useful for team management, RBAC, and organizational documentation.

## Usage Example
```jsx
<Role name="Admin" description="Full access to all features." responsibilities={["Manage users", "Configure system"]} permissions={["read", "write", "delete"]} active={true} />
```

## Props
| Prop            | Type        | Required | Description                                         |
|-----------------|-------------|----------|-----------------------------------------------------|
| name            | string      | Yes      | Name of the role                                    |
| description     | string      | No       | Description of the role                             |
| responsibilities| string[]    | No       | List of responsibilities                            |
| permissions     | string[]    | No       | List of permissions                                 |
| active          | boolean     | No       | Is the role active? (default: true)                 |
| ...baseProps    | any         | No       | Standard base props                                 |

## Output Format Examples
### Markdown
```markdown
✅ **Admin**
Full access to all features.
Responsibilities:
- Manage users
- Configure system
Permissions:
- read
- write
- delete
```
### HTML
```html
<div class="role">
  <strong>✅ Admin</strong><br/>
  <span>Description: Full access to all features.</span><br/>
  <ul>
    <li>Manage users</li>
    <li>Configure system</li>
  </ul>
  <span>Permissions: read, write, delete</span>
</div>
```
### JSON
```json
{
  "name": "Admin",
  "description": "Full access to all features.",
  "responsibilities": ["Manage users", "Configure system"],
  "permissions": ["read", "write", "delete"],
  "active": true
}
```
### YAML
```yaml
name: Admin
description: Full access to all features.
responsibilities:
  - Manage users
  - Configure system
permissions:
  - read
  - write
  - delete
active: true
```
### XML
```xml
<Role name="Admin" active="true">
  <Description>Full access to all features.</Description>
  <Responsibilities>
    <Responsibility>Manage users</Responsibility>
    <Responsibility>Configure system</Responsibility>
  </Responsibilities>
  <Permissions>
    <Permission>read</Permission>
    <Permission>write</Permission>
    <Permission>delete</Permission>
  </Permissions>
</Role>
```
### Text
✅ Admin: Full access to all features. Responsibilities: Manage users, Configure system. Permissions: read, write, delete.

## Practical Examples
- Team role: `<Role name="Developer" responsibilities={["Write code"]} permissions={["read", "write"]} />`
- Inactive role: `<Role name="Guest" active={false} />`
- Dynamic: `<Role name="{roleName}" permissions={rolePermissions} />`

## Template Variable Support
```jsx
<Role name="{roleName}" description="{roleDescription}" />
```

## Best Practices
- Clearly define responsibilities and permissions
- Use `active` to manage role status
- Organize roles for clarity in documentation

## Common Patterns
- RBAC systems
- Team management
- Access control documentation

## Related Components
- [Introducer](./Introducer.md)
- [Task](./Task.md)
- [Conversation](./Conversation.md)
