# StepwiseInstructions Component

## Overview
The `StepwiseInstructions` component provides step-by-step guides for tutorials, procedures, and workflows. It supports numbered and bulleted lists.

## Usage Example
```jsx
<StepwiseInstructions title="Install EPOML" description="Follow these steps to install." steps={["Download package", "Run installer", "Verify installation"]} numbered={true} />
```

## Props
| Prop        | Type      | Required | Description                                 |
|-------------|-----------|----------|---------------------------------------------|
| title       | string    | No       | Title of the instruction set                 |
| description | string    | No       | Description or context                       |
| steps       | string[]  | Yes      | Array of steps                               |
| numbered    | boolean   | No       | Numbered (true) or bulleted (false) list     |
| ...baseProps| any       | No       | Standard base props                          |

## Output Format Examples
### Markdown
```markdown
### Install EPOML
Follow these steps to install.
1. Download package
2. Run installer
3. Verify installation
```
### HTML
```html
<div class="stepwise-instructions">
  <h3>Install EPOML</h3>
  <p>Follow these steps to install.</p>
  <ol>
    <li>Download package</li>
    <li>Run installer</li>
    <li>Verify installation</li>
  </ol>
</div>
```
### JSON
```json
{
  "title": "Install EPOML",
  "description": "Follow these steps to install.",
  "steps": ["Download package", "Run installer", "Verify installation"],
  "numbered": true
}
```
### YAML
```yaml
title: Install EPOML
description: Follow these steps to install.
steps:
  - Download package
  - Run installer
  - Verify installation
numbered: true
```
### XML
```xml
<StepwiseInstructions title="Install EPOML" numbered="true">
  <Description>Follow these steps to install.</Description>
  <Steps>
    <Step>Download package</Step>
    <Step>Run installer</Step>
    <Step>Verify installation</Step>
  </Steps>
</StepwiseInstructions>
```
### Text
Install EPOML: Follow these steps to install. 1. Download package 2. Run installer 3. Verify installation

## Practical Examples
- Installation guide: `<StepwiseInstructions steps={["Step 1", "Step 2"]} numbered={true} />`
- Bulleted list: `<StepwiseInstructions steps={["First", "Second"]} numbered={false} />`
- Dynamic: `<StepwiseInstructions steps={stepsArray} />`

## Template Variable Support
```jsx
<StepwiseInstructions title="{guideTitle}" steps={stepList} />
```

## Best Practices
- Use clear, concise steps
- Number steps for ordered procedures
- Provide context in `description`

## Common Patterns
- Tutorials
- Onboarding guides
- Troubleshooting procedures

## Related Components
- [Question](./Question.md)
- [Task](./Task.md)
- [Loop](./Loop.md)
