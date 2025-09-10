# EPOML Examples

This package contains comprehensive examples and tests for the EPOML library. It demonstrates various features and use cases of the EPOML template engine.

## Available Examples

### 1. Custom Component Example (`src/index.ts`)
Demonstrates how to create and register custom components with EPOML.

**Run:**
```bash
npm run dev
```

### 2. Basic Example Usage (`src/example-usage.ts`)
Shows basic template parsing with variable substitution and FileTree component usage.

**Run:**
```bash
npm run example:basic
```

### 3. Template Variables Demo (`src/demo-variables.ts`)
Comprehensive demonstration of template variable features including:
- Basic text substitution
- FileTree with variable directory paths
- Multiple variables in complex templates

**Run:**
```bash
npm run example:demo
```

### 4. Template Variables Test Suite (`src/test-variables.ts`)
Complete test suite for template variable functionality including:
- Simple variable substitution tests
- FileTree component tests
- Multiple variable tests
- Error handling tests
- Complex template tests

**Run:**
```bash
npm run example:test
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run any example:
```bash
# Custom component example
pnpm run dev

# Basic usage example
pnpm run example:basic

# Template variables demo
pnpm run example:demo

# Template variables test suite
pnpm run example:test
```

## Building

```bash
pnpm run build
```

This will compile TypeScript files to the `dist/` directory.

## Available Scripts

- `pnpm run dev` - Run the custom component example
- `pnpm run build` - Compile TypeScript to JavaScript
- `pnpm start` - Run the compiled JavaScript
- `pnpm run example:basic` - Run basic usage example
- `pnpm run example:demo` - Run template variables demo
- `pnpm run example:test` - Run template variables test suite