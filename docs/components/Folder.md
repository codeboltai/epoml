# Folder Component

The Folder component represents directory structures and file system folders with support for displaying names, paths, and nested content across multiple output formats.

## Usage

```jsx
<Folder name="Documents" path="/home/user/Documents">
  Folder contents here
</Folder>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `'Folder'` | Display name of the folder |
| `path` | `string` | - | Full path to the folder |
| `syntax` | `Syntax` | `'markdown'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |
| `writerOptions` | `object` | - | Custom formatting options |
| `whiteSpace` | `WhitespaceHandling` | `'filter'` | Whitespace handling |

## Output Formats

### Markdown (Default)
```jsx
<Folder name="src" path="/project/src">
  Main source code directory
</Folder>
```

**Output:**
```markdown
📁 **src** (`/project/src`)

Main source code directory

```

### HTML
```jsx
<Folder syntax="html" name="assets" path="/project/assets">
  Static assets and resources
</Folder>
```

**Output:**
```html
<div class="folder">
  <h3>📁 assets</h3>
  <p><em>Path: /project/assets</em></p>
  <div class="folder-content">Static assets and resources</div>
</div>
```

### Plain Text
```jsx
<Folder syntax="text" name="docs" path="/project/docs">
  Documentation files
</Folder>
```

**Output:**
```text
📁 docs (/project/docs)
-----
Documentation files

```

### Structured Formats (JSON, YAML, XML)
```jsx
<Folder syntax="json" name="config" path="/project/config">
  Configuration files
</Folder>
```

**Output:**
```json
{
  "type": "folder",
  "name": "config",
  "path": "/project/config",
  "content": "Configuration files"
}
```

## Examples

### Basic Folder
```jsx
<Folder name="Downloads">
  User download directory
</Folder>
```

### Folder with Path
```jsx
<Folder name="node_modules" path="/project/node_modules">
  Third-party packages and dependencies
</Folder>
```

### Project Structure
```jsx
<div>
  <Header level={2}>Project Structure</Header>
  
  <Folder name="src" path="/my-app/src">
    <List>
      <ListItem>components/ - React components</ListItem>
      <ListItem>pages/ - Application pages</ListItem>
      <ListItem>utils/ - Utility functions</ListItem>
      <ListItem>styles/ - CSS and styling files</ListItem>
    </List>
  </Folder>
  
  <Folder name="public" path="/my-app/public">
    Static files served directly by the web server
  </Folder>
  
  <Folder name="tests" path="/my-app/tests">
    Test files and testing utilities
  </Folder>
</div>
```

### With Variables
```jsx
<Folder name={folderName} path={folderPath}>
  {folderDescription}
</Folder>
```

## Best Practices

1. **Descriptive Names**: Use clear, descriptive folder names
2. **Accurate Paths**: Provide accurate file system paths when relevant
3. **Meaningful Content**: Include helpful descriptions of folder contents
4. **Consistent Structure**: Maintain consistent folder documentation patterns
5. **Appropriate Detail**: Include the right level of detail for the context

## Common Patterns

### Directory Documentation
```jsx
<div>
  <Header level={2}>Project Directory Structure</Header>
  
  <Folder name="frontend" path="/project/frontend">
    <Paragraph>
      Contains all frontend-related code including React components, 
      styles, and client-side utilities.
    </Paragraph>
    
    <List>
      <ListItem><Bold>src/</Bold> - Source code</ListItem>
      <ListItem><Bold>public/</Bold> - Static assets</ListItem>
      <ListItem><Bold>build/</Bold> - Compiled output</ListItem>
    </List>
  </Folder>
  
  <Folder name="backend" path="/project/backend">
    <Paragraph>
      Server-side code including API endpoints, database models, 
      and business logic.
    </Paragraph>
    
    <List>
      <ListItem><Bold>api/</Bold> - REST API endpoints</ListItem>
      <ListItem><Bold>models/</Bold> - Database models</ListItem>
      <ListItem><Bold>middleware/</Bold> - Express middleware</ListItem>
    </List>
  </Folder>
</div>
```

### File System Navigation
```jsx
<div>
  <Header level={3}>Current Directory: /home/user</Header>
  
  <Folder name="Documents" path="/home/user/Documents">
    Personal documents and files
  </Folder>
  
  <Folder name="Pictures" path="/home/user/Pictures">
    Photo collection and image files
  </Folder>
  
  <Folder name="Projects" path="/home/user/Projects">
    Development projects and code repositories
  </Folder>
  
  <Folder name="Downloads" path="/home/user/Downloads">
    Downloaded files and temporary storage
  </Folder>
</div>
```

### Configuration Directories
```jsx
<div>
  <Header level={3}>Configuration Structure</Header>
  
  <Folder name="config" path="/app/config">
    <Paragraph>Application configuration files</Paragraph>
    
    <List>
      <ListItem>database.json - Database connection settings</ListItem>
      <ListItem>server.json - Server configuration</ListItem>
      <ListItem>logging.json - Logging configuration</ListItem>
    </List>
  </Folder>
  
  <Folder name="env" path="/app/env">
    <Paragraph>Environment-specific configurations</Paragraph>
    
    <List>
      <ListItem>.env.development - Development environment</ListItem>
      <ListItem>.env.production - Production environment</ListItem>
      <ListItem>.env.test - Testing environment</ListItem>
    </List>
  </Folder>
</div>
```

### Build Output Structure
```jsx
<div>
  <Header level={3}>Build Output</Header>
  
  <Folder name="dist" path="/project/dist">
    <Paragraph>
      Compiled and optimized files ready for deployment
    </Paragraph>
    
    <Code language="text">
      dist/
      ├── index.html
      ├── assets/
      │   ├── css/
      │   ├── js/
      │   └── images/
      └── static/
    </Code>
  </Folder>
</div>
```

### Package Structure
```jsx
<div>
  <Header level={3}>NPM Package Structure</Header>
  
  <Folder name="lib" path="/package/lib">
    Compiled JavaScript output for distribution
  </Folder>
  
  <Folder name="src" path="/package/src">
    <Paragraph>Source TypeScript files</Paragraph>
    
    <List>
      <ListItem>index.ts - Main entry point</ListItem>
      <ListItem>components/ - Component implementations</ListItem>
      <ListItem>types/ - Type definitions</ListItem>
      <ListItem>utils/ - Utility functions</ListItem>
    </List>
  </Folder>
  
  <Folder name="docs" path="/package/docs">
    Documentation and examples
  </Folder>
</div>
```

## Integration Examples

### With FileTree Component
```jsx
<div>
  <Header level={2}>Project Overview</Header>
  
  <Folder name="my-project" path="/workspace/my-project">
    <Paragraph>A full-stack web application built with modern technologies.</Paragraph>
    
    <FileTree>
      my-project/
      ├── frontend/
      │   ├── src/
      │   ├── public/
      │   └── package.json
      ├── backend/
      │   ├── api/
      │   ├── models/
      │   └── package.json
      └── README.md
    </FileTree>
  </Folder>
</div>
```

### Documentation Sections
```jsx
<Document title="Setup Guide">
  <Header level={1}>Installation</Header>
  
  <Folder name="project-root" path="/path/to/project">
    <Paragraph>
      After cloning the repository, your project structure should look like this:
    </Paragraph>
    
    <List>
      <ListItem><Bold>src/</Bold> - Application source code</ListItem>
      <ListItem><Bold>tests/</Bold> - Test files</ListItem>
      <ListItem><Bold>docs/</Bold> - Documentation</ListItem>
      <ListItem><Bold>scripts/</Bold> - Build and deployment scripts</ListItem>
    </List>
    
    <Paragraph>
      Navigate to this directory and run <Code language="bash">npm install</Code> 
      to install dependencies.
    </Paragraph>
  </Folder>
</Document>
```

### System Administration
```jsx
<div>
  <Header level={2}>System Directories</Header>
  
  <Folder name="var" path="/var">
    <Paragraph>Variable data files</Paragraph>
    
    <List>
      <ListItem><Bold>log/</Bold> - System and application logs</ListItem>
      <ListItem><Bold>www/</Bold> - Web server content</ListItem>
      <ListItem><Bold>tmp/</Bold> - Temporary files</ListItem>
    </List>
  </Folder>
  
  <Folder name="etc" path="/etc">
    <Paragraph>System configuration files</Paragraph>
    
    <List>
      <ListItem><Bold>nginx/</Bold> - Nginx configuration</ListItem>
      <ListItem><Bold>ssl/</Bold> - SSL certificates</ListItem>
      <ListItem><Bold>systemd/</Bold> - Service definitions</ListItem>
    </List>
  </Folder>
</div>
```

## Advanced Usage

### Dynamic Folder Information
```jsx
<Folder 
  name={directoryInfo.name} 
  path={directoryInfo.fullPath}
>
  {directoryInfo.description}
  
  <Paragraph>
    Contains {directoryInfo.fileCount} files and {directoryInfo.subdirCount} subdirectories.
  </Paragraph>
</Folder>
```

### Conditional Path Display
```jsx
<Folder 
  name={folderName}
  path={showFullPaths ? fullPath : undefined}
>
  {folderDescription}
</Folder>
```

### Custom Styling
```jsx
<Folder 
  name="important-config"
  path="/etc/myapp"
  className="system-folder"
  speaker="admin"
>
  Critical system configuration files - handle with care!
</Folder>
```

### Template Variables
```jsx
<Folder name="{folderName}" path="{basePath}/{folderName}">
  {folderDescription}
</Folder>
```

### Nested Folder Structure
```jsx
<Folder name="parent" path="/root/parent">
  <Paragraph>Parent directory containing:</Paragraph>
  
  <Folder name="child1" path="/root/parent/child1">
    First subdirectory
  </Folder>
  
  <Folder name="child2" path="/root/parent/child2">
    Second subdirectory
  </Folder>
</Folder>
```

## Accessibility Considerations

1. **Screen Readers**: Folder emoji and structure are announced appropriately
2. **Visual Hierarchy**: Use consistent visual patterns for folder structures
3. **Navigation**: Consider how folder information aids navigation
4. **Context**: Provide sufficient context for folder purposes

## Use Cases

### Development Documentation
- Project structure explanation
- Build output documentation
- Configuration directory mapping
- Package organization

### System Administration
- Directory structure documentation
- Configuration file organization
- Log file locations
- System path references

### User Documentation
- File organization guidance
- Backup directory explanation
- Application data locations
- Installation directory structure

## Related Components

- **[FileTree](./FileTree.md)** - For hierarchical directory structure visualization
- **[Code](./Code.md)** - For displaying file contents or directory listings
- **[List](./List.md)** - For listing folder contents
- **[Document](./Document.md)** - For comprehensive folder documentation
- **[Header](./Header.md)** - For section titles in directory documentation
