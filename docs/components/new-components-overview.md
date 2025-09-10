# New Components Overview

EPOML has been significantly expanded with many new components. Here's a comprehensive overview of all the newly added components and their primary use cases.

## Document Management Components

### Document
**Purpose**: Create complete document structures with metadata and proper formatting.
```jsx
<Document title="API Guide" author="Dev Team" version="1.0.0">
  <Header level={2}>Getting Started</Header>
  <p>Welcome to our API documentation...</p>
</Document>
```
**Best for**: Technical documentation, reports, manuals, academic papers

## Data Presentation Components

### Table
**Purpose**: Display structured data in tabular format with headers, rows, and styling options.
```jsx
<Table 
  headers={["Name", "Status", "Progress"]}
  rows={[
    ["Task 1", "Complete", "100%"],
    ["Task 2", "In Progress", "75%"]
  ]}
  striped={true}
/>
```
**Best for**: Data tables, comparison charts, financial reports, dashboards

### Image
**Purpose**: Display images with captions, sizing, and positioning control.
```jsx
<Image 
  src="./diagram.png" 
  alt="System Architecture" 
  caption="Figure 1: Overall system design"
  width="600"
/>
```
**Best for**: Documentation screenshots, diagrams, product images, tutorials

## Project Management Components

### Task
**Purpose**: Represent tasks with status tracking, priorities, and assignee information.
```jsx
<Task 
  title="Implement authentication"
  status="in-progress"
  priority="high"
  assignee="Alice"
  dueDate="2024-02-15"
/>
```
**Best for**: Project planning, sprint reviews, bug tracking, milestone management

### Question
**Purpose**: Create structured questions with multiple formats and answer tracking.
```jsx
<Question 
  text="What is the primary benefit of EPOML?"
  type="multiple-choice"
  options={["Speed", "Flexibility", "Type Safety", "All of the above"]}
  answer="All of the above"
  difficulty="medium"
/>
```
**Best for**: Quizzes, assessments, FAQs, decision trees, surveys

## Content Organization Components

### Role
**Purpose**: Define roles with permissions, responsibilities, and status.
```jsx
<Role 
  name="Senior Developer"
  description="Leads technical architecture decisions"
  responsibilities={["Code review", "Mentoring", "Architecture design"]}
  permissions={["Deploy", "Admin access", "Security settings"]}
/>
```
**Best for**: Team documentation, access control specs, organizational charts

### Hint
**Purpose**: Provide contextual hints, tips, and guidance information.
```jsx
<Hint 
  type="tip"
  title="Pro Tip"
  dismissible={true}
>
  Use keyboard shortcuts to improve your productivity!
</Hint>
```
**Best for**: User guides, tutorials, contextual help, best practices

### Introducer
**Purpose**: Set context and introduce topics or sections.
```jsx
<Introducer 
  speaker="instructor"
  context="tutorial"
  tone="friendly"
>
  Welcome to this comprehensive guide on EPOML components!
</Introducer>
```
**Best for**: Course materials, presentations, guided tutorials

## Instructional Components

### StepwiseInstructions
**Purpose**: Create step-by-step procedural guides.
```jsx
<StepwiseInstructions 
  title="Setup Process"
  steps={[
    { title: "Install", description: "Run npm install", code: "npm install epoml" },
    { title: "Configure", description: "Set up your config file" },
    { title: "Test", description: "Run your first template" }
  ]}
/>
```
**Best for**: Installation guides, tutorials, recipes, procedures

## Example and Reference Components

### ExampleInput
**Purpose**: Show example input data or parameters.
```jsx
<ExampleInput 
  title="API Request"
  language="json"
  content='{"username": "alice", "action": "login"}'
  description="Sample login request payload"
/>
```

### ExampleOutput
**Purpose**: Display expected output or results.
```jsx
<ExampleOutput 
  title="API Response"
  language="json"
  content='{"success": true, "token": "abc123"}'
  description="Successful login response"
/>
```

### ExampleSet
**Purpose**: Group related input/output examples together.
```jsx
<ExampleSet 
  title="Authentication Examples"
  examples={[
    { input: loginRequest, output: loginResponse },
    { input: logoutRequest, output: logoutResponse }
  ]}
/>
```
**Best for**: API documentation, code examples, before/after comparisons

## Data Structure Components

### Object
**Purpose**: Display structured object data with proper formatting.
```jsx
<Object 
  data={{
    name: "John Doe",
    age: 30,
    preferences: { theme: "dark", language: "en" }
  }}
  expandLevel={2}
  showTypes={true}
/>
```
**Best for**: Configuration examples, data structure documentation, debugging output

### OutputFormat
**Purpose**: Control and demonstrate different output formatting options.
```jsx
<OutputFormat 
  format="json"
  data={sampleData}
  showFormatting={true}
  highlighted={true}
/>
```
**Best for**: Format comparisons, output examples, API response documentation

## Usage Patterns

### Documentation Generation
Perfect for creating comprehensive technical documentation:
```jsx
<Document title="API Reference" author="Dev Team">
  <Header level={2}>Endpoints</Header>
  
  <Table 
    headers={["Method", "Endpoint", "Description"]}
    rows={apiEndpoints}
  />
  
  <ExampleSet title="Authentication Examples">
    <ExampleInput title="Login Request" content={loginExample} />
    <ExampleOutput title="Login Response" content={responseExample} />
  </ExampleSet>
</Document>
```

### Project Management
Ideal for sprint planning and project tracking:
```jsx
<Document title="Sprint 15 Review">
  <Task 
    title="User Authentication"
    status="completed"
    priority="high"
    assignee="Security Team"
  />
  
  <Table 
    headers={["Metric", "Target", "Actual"]}
    rows={sprintMetrics}
  />
</Document>
```

### Educational Content
Great for tutorials and learning materials:
```jsx
<Document title="EPOML Tutorial">
  <Introducer context="tutorial">
    Let's learn how to use EPOML components effectively.
  </Introducer>
  
  <StepwiseInstructions 
    title="Getting Started"
    steps={tutorialSteps}
  />
  
  <Question 
    text="Which component is best for displaying tabular data?"
    type="single-choice"
    options={["Table", "Image", "Task", "Document"]}
    answer="Table"
  />
</Document>
```

## Migration from Previous Version

If you're upgrading from a previous version, you'll need to:

1. **Update imports** to include new components:
```typescript
import { 
  Document, Table, Task, Question, Image, Role, Hint,
  StepwiseInstructions, ExampleInput, ExampleOutput 
} from 'epoml';
```

2. **Register new components** if using the registry system:
```typescript
// New components are automatically available after import
```

3. **Update templates** to take advantage of new functionality:
```jsx
// Old approach
<div>
  <h2>Tasks</h2>
  <p>Task 1: Complete - Alice</p>
  <p>Task 2: In Progress - Bob</p>
</div>

// New approach with Task component
<div>
  <Header level={2}>Tasks</Header>
  <Task title="Task 1" status="completed" assignee="Alice" />
  <Task title="Task 2" status="in-progress" assignee="Bob" />
</div>
```

## Component Categories Summary

| Category | Components | Primary Use Cases |
|----------|------------|-------------------|
| **Document Structure** | Document | Full documents, reports, manuals |
| **Data Display** | Table, Image, Object | Tables, charts, media, structured data |
| **Project Management** | Task, Role | Sprint planning, team organization |
| **Interactive Content** | Question, Hint | Assessments, user guidance |
| **Educational** | Introducer, StepwiseInstructions | Tutorials, courses, guides |
| **Examples** | ExampleInput, ExampleOutput, ExampleSet | Code samples, API docs |
| **Formatting** | OutputFormat | Format demonstrations, comparisons |

These new components significantly expand EPOML's capabilities, making it suitable for a much wider range of documentation and content generation use cases. Each component follows EPOML's core principles of multi-format output support, TypeScript safety, and flexible customization.