# MCPToolFunction Component

## × should render basic MCP tool function (5 ms)
**Input:**
```jsx
<MCPToolFunction name="testFunction" />
```

**Error:**
```
ReferenceError: MCPToolFunction is not defined
```

## × should render MCP tool function with name and function signature (1 ms)
**Input:**
```jsx
<MCPToolFunction name="testFunction" signature="testFunction(param: string)" />
```

**Error:**
```
ReferenceError: MCPToolFunction is not defined
```

## × should render MCP tool function with details (1 ms)
**Input:**
```jsx
<MCPToolFunction name="testFunction" description="Test function" parameters={[{name: "param", type: "string"}]} />
```

**Error:**
```
ReferenceError: MCPToolFunction is not defined
```

## × should render MCP tool function with html syntax (2 ms)
**Input:**
```jsx
<MCPToolFunction name="testFunction" syntax="html" />
```

**Error:**
```
ReferenceError: MCPToolFunction is not defined
```

## × should render MCP tool function with json syntax (1 ms)
**Input:**
```jsx
<MCPToolFunction name="testFunction" syntax="json" />
```

**Error:**
```
ReferenceError: MCPToolFunction is not defined
```
