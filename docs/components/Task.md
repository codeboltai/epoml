# Task Component

The Task component creates structured task representations with status tracking, priorities, and assignee information across multiple output formats.

## Usage

```jsx
<Task 
  title="Implement user authentication"
  description="Add JWT-based authentication to the API"
  status="in-progress"
  priority="high"
  assignee="Alice Johnson"
  dueDate="2024-02-15"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique task identifier |
| `title` | `string` | - | Task title |
| `description` | `string` | - | Detailed task description |
| `status` | `'pending' \| 'in-progress' \| 'completed' \| 'cancelled'` | `'pending'` | Current task status |
| `priority` | `'low' \| 'medium' \| 'high' \| 'critical'` | `'medium'` | Task priority level |
| `assignee` | `string` | - | Person assigned to the task |
| `dueDate` | `string` | - | Task due date |
| `blocked` | `boolean` | `false` | Whether the task is blocked |
| `syntax` | `Syntax` | `'text'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |

## Status Options

- `'pending'` ⏳ - Task not yet started
- `'in-progress'` 🔄 - Task currently being worked on
- `'completed'` ✅ - Task finished successfully
- `'cancelled'` ❌ - Task cancelled or abandoned

## Priority Levels

- `'low'` 🔽 - Low priority task
- `'medium'` 🔸 - Medium priority task (default)
- `'high'` 🔺 - High priority task
- `'critical'` 🔴 - Critical priority task

## Output Formats

### Markdown
```jsx
<Task 
  syntax="markdown"
  title="Fix login bug"
  description="Users cannot login with special characters in password"
  status="in-progress"
  priority="critical"
  assignee="Bob Smith"
  dueDate="2024-01-20"
  blocked={false}
/>
```

**Output:**
```markdown
## 🔄 🔴 Fix login bug

**Description:** Users cannot login with special characters in password

**Status:** in-progress
**Priority:** critical
**Assignee:** Bob Smith
**Due Date:** 2024-01-20
```

### HTML
```jsx
<Task 
  syntax="html"
  id="TASK-123"
  title="Update documentation"
  status="completed"
  priority="medium"
  assignee="Carol Davis"
/>
```

**Output:**
```html
<div class="task">
  <h2>✅ 🔸 Update documentation <small>(TASK-123)</small></h2>
  <ul>
    <li><strong>Status:</strong> completed</li>
    <li><strong>Priority:</strong> medium</li>
    <li><strong>Assignee:</strong> Carol Davis</li>
  </ul>
</div>
```

### JSON
```jsx
<Task 
  syntax="json"
  id="TASK-456"
  title="Database migration"
  description="Migrate from MySQL to PostgreSQL"
  status="pending"
  priority="high"
  assignee="Dev Team"
  dueDate="2024-03-01"
  blocked={true}
/>
```

**Output:**
```json
{
  "id": "TASK-456",
  "title": "Database migration",
  "description": "Migrate from MySQL to PostgreSQL",
  "status": "pending",
  "priority": "high",
  "assignee": "Dev Team",
  "dueDate": "2024-03-01",
  "blocked": true
}
```

### Text (Default)
```jsx
<Task 
  title="Code review"
  status="in-progress"
  priority="medium"
  assignee="Alice"
/>
```

**Output:**
```text
⏳ 🔸 Code review
=================

Status: in-progress
Priority: medium
Assignee: Alice
```

## Examples

### Sprint Planning
```jsx
<div>
  <Header level={2}>Sprint 15 Tasks</Header>
  
  <Task 
    id="SPRINT-15-01"
    title="User Profile Enhancement"
    description="Add avatar upload and bio editing capabilities"
    status="in-progress"
    priority="high"
    assignee="Frontend Team"
    dueDate="2024-02-10"
  />
  
  <Task 
    id="SPRINT-15-02"
    title="API Rate Limiting"
    description="Implement rate limiting middleware for public API endpoints"
    status="pending"
    priority="medium"
    assignee="Backend Team"
    dueDate="2024-02-12"
  />
  
  <Task 
    id="SPRINT-15-03"
    title="Performance Testing"
    description="Conduct load testing on the new search functionality"
    status="completed"
    priority="high"
    assignee="QA Team"
    dueDate="2024-02-08"
  />
</div>
```

### Bug Tracking
```jsx
<Task 
  id="BUG-789"
  title="Memory leak in data processing"
  description="Application crashes after processing large datasets. Memory usage grows continuously without being released."
  status="in-progress"
  priority="critical"
  assignee="Senior Developer"
  dueDate="2024-01-25"
  blocked={false}
>
  <Header level={4}>Steps to Reproduce</Header>
  <ol>
    <li>Upload dataset larger than 100MB</li>
    <li>Start processing</li>
    <li>Monitor memory usage</li>
    <li>Observe continuous growth</li>
  </ol>
  
  <Header level={4}>Proposed Solution</Header>
  <p>Implement proper garbage collection and streaming processing</p>
</Task>
```

### Feature Development
```jsx
<Task 
  id="FEAT-456"
  title="Dark Mode Implementation"
  description="Add dark mode support throughout the application with user preference persistence"
  status="pending"
  priority="medium"
  assignee="UI/UX Team"
  dueDate="2024-03-15"
>
  <Header level={4}>Acceptance Criteria</Header>
  <ul>
    <li>Toggle between light and dark themes</li>
    <li>Persist user preference in localStorage</li>
    <li>Update all components for dark mode</li>
    <li>Add system preference detection</li>
  </ul>
  
  <Header level={4}>Dependencies</Header>
  <p>Requires completion of CSS variable refactoring (TASK-445)</p>
</Task>
```

### Project Milestones
```jsx
<div>
  <Header level={2}>Q1 2024 Milestones</Header>
  
  <Task 
    title="Beta Release"
    description="Deploy beta version to staging environment"
    status="completed"
    priority="critical"
    assignee="DevOps Team"
    dueDate="2024-01-15"
  />
  
  <Task 
    title="User Testing"
    description="Conduct user acceptance testing with 50 beta users"
    status="in-progress"
    priority="high"
    assignee="Product Team"
    dueDate="2024-02-01"
  />
  
  <Task 
    title="Production Deployment"
    description="Deploy version 2.0 to production environment"
    status="pending"
    priority="critical"
    assignee="Release Team"
    dueDate="2024-03-01"
  />
</div>
```

### Blocked Tasks Management
```jsx
<Task 
  id="BLOCKED-001"
  title="Third-party Integration"
  description="Integrate with external payment processor API"
  status="pending"
  priority="high"
  assignee="Integration Team"
  dueDate="2024-02-20"
  blocked={true}
>
  <Header level={4}>Blocking Issues</Header>
  <ul>
    <li>Waiting for API access credentials from vendor</li>
    <li>Legal approval for data sharing agreement pending</li>
    <li>Security review of integration architecture required</li>
  </ul>
  
  <Header level={4}>Next Actions</Header>
  <p>Follow up with vendor contact and legal team by EOD</p>
</Task>
```

### With Variables
```jsx
const taskTemplate = `
  <Task 
    id={task.id}
    title={task.title}
    description={task.description}
    status={task.status}
    priority={task.priority}
    assignee={task.assignee}
    dueDate={task.dueDate}
    blocked={task.blocked}
  >
    {task.details && \`
      <Header level={4}>Additional Details</Header>
      <p>{task.details}</p>
    \`}
  </Task>
`;

const taskData = {
  id: "TASK-789",
  title: "Optimize database queries",
  description: "Improve performance of user dashboard queries",
  status: "in-progress",
  priority: "high",
  assignee: "Database Team",
  dueDate: "2024-02-05",
  blocked: false,
  details: "Focus on the most frequently accessed queries first"
};
```

## Best Practices

1. **Clear Titles**: Use descriptive, action-oriented task titles
2. **Detailed Descriptions**: Provide enough context for assignees
3. **Realistic Due Dates**: Set achievable deadlines
4. **Priority Management**: Use priority levels consistently across projects
5. **Status Updates**: Keep status current and accurate
6. **Blocked Task Handling**: Document blocking issues clearly

## Common Patterns

### Task Lists
```jsx
<div>
  <Header level={2}>Today's Tasks</Header>
  {todaysTasks.map(task => (
    <Task 
      key={task.id}
      id={task.id}
      title={task.title}
      status={task.status}
      priority={task.priority}
      assignee={task.assignee}
      dueDate={task.dueDate}
    />
  ))}
</div>
```

### Status-based Filtering
```jsx
<div>
  <Header level={3}>In Progress Tasks</Header>
  {tasks
    .filter(task => task.status === 'in-progress')
    .map(task => (
      <Task {...task} key={task.id} />
    ))
  }
</div>
```

### Priority-based Sorting
```jsx
const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
const sortedTasks = tasks.sort((a, b) => 
  priorityOrder[a.priority] - priorityOrder[b.priority]
);
```

### Team Assignment Views
```jsx
<div>
  <Header level={2}>Tasks by Team</Header>
  {teams.map(team => (
    <div key={team.name}>
      <Header level={3}>{team.name}</Header>
      {tasks
        .filter(task => task.assignee === team.name)
        .map(task => <Task {...task} key={task.id} />)
      }
    </div>
  ))}
</div>
```

## Integration Examples

### With Other Components
```jsx
<Document title="Sprint Review" author="Scrum Master">
  <Header level={2}>Completed Tasks</Header>
  
  <Task 
    title="User Authentication"
    status="completed"
    priority="high"
    assignee="Security Team"
  />
  
  <Header level={2}>Performance Metrics</Header>
  
  <Table 
    headers={["Metric", "Value"]}
    rows={[
      ["Completed Tasks", "12"],
      ["In Progress", "5"],
      ["Blocked", "2"]
    ]}
  />
</Document>
```

## Related Components

- **[Document](./Document.md)** - For including tasks in project documents
- **[Table](./Table.md)** - For task summary tables
- **[Question](./Question.md)** - For task-related questions and decisions
- **[Header](./Header.md)** - For organizing task sections