# FileTree Component

The FileTree component displays directory structures as ASCII tree diagrams, making it perfect for documentation and file system visualization.

## Usage

```jsx
<!-- Display current directory -->
<FileTree />

<!-- Display specific directory -->
<FileTree directory="./src" />

<!-- Control depth -->
<FileTree directory="./project" depth={2} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `directory` | `string` | `process.cwd()` | Path to the directory to display |
| `depth` | `number` | `1` | Maximum depth to traverse |

## Output

The FileTree component always renders as plain text with ASCII art tree structure:

```text
├── src/
│   ├── components/
│   │   ├── Header.ts
│   │   ├── Bold.ts
│   │   └── Code.ts
│   ├── core/
│   │   ├── createElement.ts
│   │   ├── renderer.ts
│   │   └── Fragment.ts
│   ├── index.ts
│   └── types.ts
├── docs/
│   ├── README.md
│   └── getting-started.md
├── package.json
└── README.md
```

## Examples

### Basic Directory Tree
```jsx
<Header level={3}>Project Structure</Header>
<FileTree directory="./" depth={2} />
```

### With Variables
```jsx
<Header level={3}>{projectName} Structure</Header>
<FileTree directory={projectPath} depth={maxDepth} />
```

**Usage:**
```typescript
const template = `
  <Header level={3}>{projectName} Structure</Header>
  <FileTree directory={projectPath} depth={maxDepth} />
`;

const result = await epomlparse(template, {
  projectName: "My App",
  projectPath: "./my-app",
  maxDepth: 3
});
```

### Documentation Context
```jsx
<div>
  <Header level={2}>Project Overview</Header>
  <p>This project follows a standard structure:</p>
  
  <FileTree directory="./src" depth={2} />
  
  <p>Key directories:</p>
  <ul>
    <li><Bold>src/components/</Bold> - Reusable UI components</li>
    <li><Bold>src/core/</Bold> - Core functionality</li>
    <li><Bold>docs/</Bold> - Documentation files</li>
  </ul>
</div>
```

### Multiple Directory Views
```jsx
<div>
  <Header level={3}>Source Code Structure</Header>
  <FileTree directory="./src" depth={3} />
  
  <Header level={3}>Documentation Structure</Header>
  <FileTree directory="./docs" depth={2} />
  
  <Header level={3}>Configuration Files</Header>
  <FileTree directory="./" depth={1} />
</div>
```

### Conditional Display
```jsx
{showSourceTree && (
  <div>
    <Header level={3}>Source Files</Header>
    <FileTree directory="./src" depth={2} />
  </div>
)}

{showFullTree && (
  <div>
    <Header level={3}>Complete Project</Header>
    <FileTree directory="./" depth={3} />
  </div>
)}
```

## Tree Structure Legend

The FileTree component uses standard ASCII art characters:

- `├──` - File or directory (has siblings below)
- `└──` - Last file or directory in a level
- `│   ` - Vertical line continuing to show hierarchy
- `    ` - Empty space for completed branches

Example breakdown:
```text
project/
├── file1.txt          # File with siblings below
│   
├── folder1/           # Directory with siblings below
│   ├── subfolder/     # Subdirectory with siblings
│   └── file2.txt      # Last item in folder1
│   
└── file3.txt          # Last item in project
```

## Best Practices

1. **Depth Control**: Use appropriate depth to avoid overwhelming output
2. **Path Validation**: Ensure directory paths exist and are accessible
3. **Documentation**: Use FileTree in documentation to show project structure
4. **Context**: Provide context around the tree display
5. **Performance**: Be mindful of very large directory structures
6. **Permissions**: Ensure read permissions for target directories

## Common Patterns

### API Documentation
```jsx
<Header level={2}>API Structure</Header>
<p>Our API follows RESTful conventions:</p>

<FileTree directory="./api" depth={3} />

<p>Each endpoint is organized by resource type with clear separation of concerns.</p>
```

### Tutorial Steps
```jsx
<Header level={3}>Step 1: Create Project Structure</Header>
<p>First, create the following directory structure:</p>

<FileTree directory="./tutorial-project" depth={2} />

<p>You can create this structure manually or use the provided scaffold command.</p>
```

### Comparison Documentation
```jsx
<Header level={3}>Before Refactoring</Header>
<FileTree directory="./old-structure" depth={2} />

<Header level={3}>After Refactoring</Header>
<FileTree directory="./new-structure" depth={2} />
```

### Package Documentation
```jsx
<Header level={2}>Package Contents</Header>
<p>When you install this package, you'll get the following structure:</p>

<FileTree directory="./node_modules/package-name" depth={2} />
```

## Error Handling

The FileTree component will handle common errors gracefully:

- **Directory not found**: Shows error message instead of tree
- **Permission denied**: Shows access error
- **Invalid depth**: Uses default depth value
- **Empty directory**: Shows empty tree structure

```jsx
<!-- This will show an error if directory doesn't exist -->
<FileTree directory="./non-existent-path" />

<!-- Safe usage with error context -->
{directoryExists && <FileTree directory={dynamicPath} />}
```

## Integration Examples

### With Code Examples
```jsx
<div>
  <Header level={3}>Project Structure</Header>
  <FileTree directory="./src" depth={2} />
  
  <Header level={3}>Main Entry Point</Header>
  <Code inline={false} lang="typescript">
    // src/index.ts
    export * from './components';
    export * from './core';
  </Code>
</div>
```

### In Installation Guides
```jsx
<div>
  <Header level={2}>Installation</Header>
  <p>After running the installation command, your project structure should look like this:</p>
  
  <FileTree directory="./" depth={2} />
  
  <p>If you don't see this structure, try running:</p>
  <Code inline={false} lang="bash">npm install --save epoml</Code>
</div>
```

### Architecture Documentation
```jsx
<div>
  <Header level={2}>Architecture Overview</Header>
  <p>The application follows a layered architecture:</p>
  
  <FileTree directory="./src" depth={3} />
  
  <ul>
    <li><Bold>controllers/</Bold> - Handle HTTP requests and responses</li>
    <li><Bold>services/</Bold> - Business logic and data processing</li>
    <li><Bold>models/</Bold> - Data structures and database schemas</li>
    <li><Bold>utils/</Bold> - Shared utility functions</li>
  </ul>
</div>
```

## Limitations

1. **Read Permissions**: Requires read access to target directories
2. **Large Directories**: Very large directories may impact performance
3. **Cross-Platform**: Path handling works across platforms but display is ASCII only
4. **Real-time**: Shows directory state at render time, not live updates
5. **Text Output**: Always renders as plain text regardless of syntax

## Related Components

- **[Header](./Header.md)** - For section titles above file trees
- **[Code](./Code.md)** - For showing file contents alongside structure
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For describing directory purposes