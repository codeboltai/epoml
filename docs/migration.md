# Migration Guide

This guide helps you migrate between different versions of EPOML and understand breaking changes.

## Version 2.0.0 Migration

### Overview

Version 2.0.0 introduces significant architectural improvements and breaking changes to provide a cleaner, more maintainable codebase.

### Breaking Changes

#### 1. Namespace Removal

**Before (v1.x):**
```typescript
import { Epoml } from 'epoml';

const element = Epoml.createElement('div', {}, 'content');
```

**After (v2.0.0):**
```typescript
import { createElement } from 'epoml';

const element = createElement('div', {}, 'content');
```

**Migration Steps:**
1. Replace all `Epoml.createElement` calls with direct `createElement` imports
2. Update JSX factory configuration in tsconfig.json:
   ```json
   {
     "compilerOptions": {
       "jsxFactory": "createElement"  // Changed from "Epoml.createElement"
     }
   }
   ```

#### 2. Module Structure Changes

**Before (v1.x):**
```typescript
import { epomlparse, Component } from 'epoml/core';
import { Header, Bold } from 'epoml/components';
```

**After (v2.0.0):**
```typescript
import { epomlparse, Component, Header, Bold } from 'epoml';
```

**Migration Steps:**
1. Update all imports to use the main package entry point
2. Remove any `/core` or `/components` path imports

#### 3. Component Type Location

**Before (v1.x):**
```typescript
import { Component } from 'epoml/core';
```

**After (v2.0.0):**
```typescript
import { Component } from 'epoml';
```

#### 4. File Structure Cleanup

The following files have been removed and their functionality consolidated:
- `src/epoml.ts` - Functionality moved to main exports
- `src/core/index.ts` - Re-exports removed, import directly from main package

### New Features in v2.0.0

#### Enhanced Modular Architecture

The codebase now follows a cleaner modular structure:
- Core functionality in `src/core/`
- Components in `src/components/`
- Clear separation of concerns

#### Improved TypeScript Support

Better type definitions and interfaces:
```typescript
import { 
  epomlparse, 
  createElement, 
  type Component, 
  type TemplateVariables 
} from 'epoml';
```

### Step-by-Step Migration

#### Step 1: Update Dependencies

```bash
npm update epoml
# or
yarn upgrade epoml
```

#### Step 2: Update Imports

Find and replace in your codebase:

```bash
# Replace namespace usage
find . -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/Epoml\.createElement/createElement/g'

# Update imports
find . -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/import.*{.*}.*from.*["\x27]epoml\/core["\x27]/import { epomlparse, Component } from "epoml"/g'
find . -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/import.*{.*}.*from.*["\x27]epoml\/components["\x27]/import { Header, Bold, Code, Audio, FileTree, CaptionedParagraph, Inline } from "epoml"/g'
```

#### Step 3: Update TypeScript Configuration

Update your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "createElement",
    "jsxFragmentFactory": "Fragment"
  }
}
```

#### Step 4: Update Custom Components

**Before:**
```typescript
import { Epoml, Component } from 'epoml';

function MyComponent(props: any): Component {
  return Epoml.createElement('div', {}, props.children);
}
```

**After:**
```typescript
import { createElement, type Component } from 'epoml';

function MyComponent(props: any): Component {
  return createElement('div', {}, props.children);
}
```

#### Step 5: Test Your Application

Run your test suite to ensure everything works correctly:

```bash
npm test
# or
yarn test
```

### Common Migration Issues

#### Issue 1: JSX Factory Not Found

**Error:**
```
Cannot find name 'Epoml' or 'createElement'.
```

**Solution:**
1. Ensure `createElement` is imported in files using JSX
2. Update `tsconfig.json` with correct `jsxFactory`

#### Issue 2: Module Not Found

**Error:**
```
Module 'epoml/core' not found.
```

**Solution:**
Update imports to use the main package:
```typescript
// Change this
import { epomlparse } from 'epoml/core';

// To this
import { epomlparse } from 'epoml';
```

#### Issue 3: Type Errors

**Error:**
```
Cannot find type 'Component'.
```

**Solution:**
Import types explicitly:
```typescript
import { type Component, type TemplateVariables } from 'epoml';
```

### Compatibility Shim (Temporary)

If you need time to migrate gradually, create a compatibility shim:

```typescript
// compat.ts
import { createElement as _createElement } from 'epoml';

export const Epoml = {
  createElement: _createElement
};

// Re-export everything else
export * from 'epoml';
```

Then update your imports temporarily:
```typescript
import { Epoml, epomlparse } from './compat';
```

### Testing Migration

Create a test to ensure your migration is successful:

```typescript
import { epomlparse, createElement, Fragment } from 'epoml';

async function testMigration() {
  // Test direct createElement usage
  const element = createElement('div', {}, 'Hello World');
  console.log('createElement works:', element);
  
  // Test JSX compilation
  const template = `<div>Hello, {name}!</div>`;
  const result = await epomlparse(template, { name: 'World' });
  console.log('JSX works:', result);
  
  // Test Fragment
  const fragment = createElement(Fragment, {}, 'Fragment content');
  console.log('Fragment works:', fragment);
  
  console.log('Migration successful!');
}

testMigration().catch(console.error);
```

### Version Comparison

| Feature | v1.x | v2.0.0 |
|---------|------|--------|
| Namespace | `Epoml.createElement` | `createElement` |
| Imports | Multiple paths | Single entry point |
| JSX Factory | `Epoml.createElement` | `createElement` |
| Type Imports | Mixed locations | Centralized exports |
| File Structure | Wrapper files | Direct core access |

### Rollback Plan

If you encounter issues and need to rollback:

1. **Revert package version:**
   ```bash
   npm install epoml@1.x.x
   ```

2. **Revert code changes:**
   ```bash
   git revert <migration-commit>
   ```

3. **Restore configuration:**
   - Revert `tsconfig.json` changes
   - Restore import statements

### Future Considerations

- v2.0.0 is the foundation for future enhancements
- The new architecture enables better tree-shaking
- Cleaner module boundaries improve maintainability
- Type safety improvements reduce runtime errors

### Getting Help

If you encounter issues during migration:

1. Check the [troubleshooting section](#common-migration-issues)
2. Review the [examples](./examples/) for updated patterns
3. Create an issue on [GitHub](https://github.com/your-username/epoml/issues)
4. Check the [discussions](https://github.com/your-username/epoml/discussions) for community help

### Post-Migration Checklist

- [ ] All imports updated to use main package entry
- [ ] `tsconfig.json` updated with new JSX factory
- [ ] Custom components updated to use direct imports
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] Application runs correctly
- [ ] Documentation updated
- [ ] Team members informed of changes

The migration to v2.0.0 provides a solid foundation for future development with cleaner architecture, better type safety, and improved developer experience.