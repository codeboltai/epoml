# Question Component

## Overview
The `Question` component enables creation of interactive questions for quizzes, assessments, and surveys. It supports multiple formats and difficulty levels.

## Usage Example
```jsx
<Question text="What is the capital of France?" type="multiple-choice" options={["Paris", "London", "Berlin"]} answer="Paris" difficulty="easy" category="Geography" />
```

## Props
| Prop        | Type     | Required | Description                                                                 |
|-------------|----------|----------|-----------------------------------------------------------------------------|
| text        | string   | Yes      | The question text                                                           |
| type        | string   | No       | Question type: 'multiple-choice', 'single-choice', 'open-ended', 'true-false', 'rating' |
| options     | string[] | No       | List of options for choice-based questions                                  |
| answer      | string   | No       | Correct answer                                                              |
| explanation | string   | No       | Explanation for the answer                                                  |
| difficulty  | string   | No       | Difficulty: 'easy', 'medium', 'hard'                                        |
| category    | string   | No       | Category or topic                                                           |
| ...baseProps| any      | No       | Standard base props                                                         |

## Output Format Examples
### Markdown
```markdown
🟢 **Question (Easy):** What is the capital of France?
- Paris
- London
- Berlin
**Answer:** Paris
```
### HTML
```html
<div class="question">
  <strong>🟢 Question (Easy):</strong> What is the capital of France?<br/>
  <ul>
    <li>Paris</li>
    <li>London</li>
    <li>Berlin</li>
  </ul>
  <span>Answer: Paris</span>
</div>
```
### JSON
```json
{
  "text": "What is the capital of France?",
  "type": "multiple-choice",
  "options": ["Paris", "London", "Berlin"],
  "answer": "Paris",
  "difficulty": "easy",
  "category": "Geography"
}
```
### YAML
```yaml
text: What is the capital of France?
type: multiple-choice
options:
  - Paris
  - London
  - Berlin
answer: Paris
difficulty: easy
category: Geography
```
### XML
```xml
<Question type="multiple-choice" difficulty="easy" category="Geography">
  <Text>What is the capital of France?</Text>
  <Options>
    <Option>Paris</Option>
    <Option>London</Option>
    <Option>Berlin</Option>
  </Options>
  <Answer>Paris</Answer>
</Question>
```
### Text
🟢 Question (Easy): What is the capital of France? Options: Paris, London, Berlin. Answer: Paris

## Practical Examples
- Multiple choice: `<Question text="2+2=?" type="multiple-choice" options={["3","4","5"]} answer="4" />`
- True/False: `<Question text="The sky is blue." type="true-false" answer="True" />`
- Open-ended: `<Question text="Describe your experience." type="open-ended" />`

## Template Variable Support
```jsx
<Question text="{questionText}" options={questionOptions} answer="{correctAnswer}" />
```

## Best Practices
- Match question type to context
- Use difficulty for adaptive assessments
- Provide explanations for learning

## Common Patterns
- Quizzes and exams
- Surveys and feedback forms
- Interactive tutorials

## Related Components
- [StepwiseInstructions](./StepwiseInstructions.md)
- [ExampleSet](./ExampleSet.md)
- [Task](./Task.md)
