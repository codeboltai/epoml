# Turborepo starter
# EPOML Monorepo

EPOML (Enhanced Prompt Orchestration Markup Language) is a JSX-based template engine for orchestrating prompts and rendering to plain text. This monorepo contains the core EPOML library and examples.

## Packages

- **`epoml`**: The main EPOML library package (published to npm)
- **`@epoml/example`**: Examples and demos (private)

## Quick Start

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run examples
cd packages/example
pnpm run example:basic
```

## Development

### Building

```bash
# Build all packages
pnpm build

# Build specific package
pnpm build --filter=epoml
```

### Running Examples

```bash
# Basic example
pnpm --filter=@epoml/example run example:basic

# Template variables demo
pnpm --filter=@epoml/example run example:demo

# Custom component example
pnpm --filter=@epoml/example run dev
```

## Publishing

We use [Changesets](https://github.com/changesets/changesets) for version management and publishing. See [PUBLISHING.md](./PUBLISHING.md) for detailed instructions.

```bash
# Create a changeset for your changes
pnpm changeset

# Release to npm (automated via GitHub Actions)
pnpm release
```

## Package Details

### EPOML Core Library

The main library is published to npm as `epoml`. It provides:

- JSX-based template syntax for prompt orchestration
- Multiple output formats (markdown, html, json, yaml, xml, text)
- Enhanced template variables support with `{variableName}` syntax
- 20+ built-in components with comprehensive template variable support
- Custom component registration for reusable prompt patterns
- Robust TypeScript compilation with 0 errors
- File tree generation for context injection
- Audio/multimedia support for rich prompts
- Shared utility functions for text processing and escaping

### Recent Improvements ✨

- **Fixed all TypeScript compilation errors**: Resolved 192+ syntax errors across components
- **Enhanced template variable support**: Added `{variableName}` processing to all major components
- **New component documentation**: Complete docs for ExampleInput, ExampleOutput, ExampleSet, Object, and OutputFormat
- **Shared utilities module**: Centralized text processing, escaping, and validation functions
- **Improved inline rendering**: Better support for compact display modes
- **Updated TypeScript target**: Upgraded to ES2018 with downlevel iteration support

### Examples Package

The examples package contains:

- Basic usage examples
- Template variable demonstrations
- Custom component examples
- Test files for functionality verification

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
