# EPOML Documentation

Welcome to the Enhanced Prompt Orchestration Markup Language (EPOML) documentation!

EPOML is a JSX-based template engine designed for orchestrating prompts and rendering to plain text. It provides a powerful, component-based approach to building dynamic text templates with support for multiple output formats.

## Quick Start

```bash
npm install epoml
```

```typescript
import { epomlparse } from 'epoml';

const template = `<p>Hello, {name}!</p>`;
const result = await epomlparse(template, { name: "World" });
console.log(result); // "Hello, World!"
```

## Documentation Structure

- **[Getting Started](./getting-started.md)** - Installation, basic usage, and your first templates
- **[Core Concepts](./core-concepts.md)** - Understanding components, JSX syntax, and template variables
- **[API Reference](./api-reference.md)** - Complete API documentation for all functions and types
- **[Built-in Components](./components/)** - Documentation for all built-in components
- **[Custom Components](./custom-components.md)** - Creating and registering your own components
- **[Template Variables](./template-variables.md)** - Working with dynamic content and variable interpolation
- **[Output Formats](./output-formats.md)** - Supporting multiple output formats (markdown, HTML, JSON, etc.)
- **[Examples](./examples/)** - Practical examples and use cases
- **[Migration Guide](./migration.md)** - Upgrading from older versions

## Features

- 🎯 **JSX-based templates** - Familiar syntax for developers
- 📦 **Rich component library** - 20+ built-in components for common use cases
- 🔧 **Custom components** - Easy to create and register your own components
- 🔄 **Template variables** - Dynamic content with variable interpolation
- 📄 **Multiple output formats** - Markdown, HTML, JSON, YAML, XML, and plain text
- 🎨 **Flexible styling** - Support for CSS classes and custom formatting
- 🚀 **TypeScript support** - Full TypeScript definitions and type safety
- 📱 **Lightweight** - Minimal dependencies and fast rendering
- 📋 **Task management** - Built-in components for project and task tracking
- 🖼️ **Media support** - Audio and image components with multiple formats
- 📊 **Data visualization** - Tables, charts, and structured data components

## Community

- [GitHub Repository](https://github.com/your-username/epoml)
- [Issue Tracker](https://github.com/your-username/epoml/issues)
- [Discussions](https://github.com/your-username/epoml/discussions)

## License

EPOML is released under the MIT License. See the [LICENSE](../LICENSE) file for details.