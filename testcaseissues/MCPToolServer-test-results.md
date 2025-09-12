# MCPToolServer Component

## × should render basic MCP tool server (5 ms)
**Input:**
```jsx
<MCPToolServer />
```

**Error:**
```
ReferenceError: MCPToolServer is not defined
```

## × should render MCP tool server with server names (3 ms)
**Input:**
```jsx
<MCPToolServer servers={["server1", "server2"]} />
```

**Error:**
```
ReferenceError: MCPToolServer is not defined
```

## × should render MCP tool server with tools (1 ms)
**Input:**
```jsx
<MCPToolServer tools={[{name: "tool1", description: "Test tool"}]} />
```

**Error:**
```
ReferenceError: MCPToolServer is not defined
```

## × should render MCP tool server with html syntax (1 ms)
**Input:**
```jsx
<MCPToolServer syntax="html" />
```

**Error:**
```
ReferenceError: MCPToolServer is not defined
```
