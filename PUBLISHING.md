# Publishing Guide

This guide explains how to use Changesets to manage versions and publish the EPOML library to npm.

## Overview

We use [Changesets](https://github.com/changesets/changesets) to manage versioning and publishing. Only the `epoml` package is published to npm - the `example` and `types` packages are marked as private.

## Development Workflow

### 1. Making Changes

When you make changes to the codebase that should trigger a release:

```bash
# After making your changes, create a changeset
pnpm changeset
```

This will prompt you to:
- Select which packages have changed
- Choose the type of change (major, minor, patch)
- Write a summary of the changes

### 2. Changeset Types

- **Major (breaking change)**: API changes that break existing code
- **Minor (feature)**: New features that don't break existing code  
- **Patch (fix)**: Bug fixes and small improvements

### 3. Commit Changes

```bash
git add .
git commit -m "feat: add new component functionality"
git push
```

## Release Process

### Automated Release (Recommended)

The release process is automated via GitHub Actions:

1. **Create changesets** for your changes (see above)
2. **Push to main branch** - this triggers the release workflow
3. **GitHub Actions will**:
   - Build all packages
   - Create a release PR if there are pending changesets
   - Or publish to npm if the release PR is merged

### Manual Release

If you need to release manually:

```bash
# Build the packages
pnpm build

# Update versions based on changesets
pnpm version-packages

# Publish to npm (after building)
pnpm release
```

## npm Publishing Setup

To publish to npm, you need:

1. **npm account** with access to publish the `epoml` package
2. **NPM_TOKEN** environment variable set in GitHub Actions secrets
3. **Two-factor authentication** configured on your npm account

### Setting up NPM_TOKEN

1. Go to [npm access tokens](https://www.npmjs.com/settings/tokens)
2. Create a new **Automation** token
3. Add it as `NPM_TOKEN` in your GitHub repository secrets

## Package Configuration

### Published Package: `epoml`
- **Name**: `epoml`
- **Visibility**: Public on npm
- **Includes**: Compiled TypeScript, README, MIGRATION guide

### Private Packages: `@epoml/example`
- **Purpose**: Examples and demos
- **Visibility**: Private (not published)
- **Ignored**: In Changeset configuration

## Commands Reference

```bash
# Create a new changeset
pnpm changeset

# Preview version changes
pnpm changeset status

# Update package versions
pnpm version-packages

# Build and publish
pnpm release

# Build all packages
pnpm build

# Run examples
cd packages/example && pnpm run example:basic
```

## Example Changeset

When you run `pnpm changeset`, you might create a changeset like:

```markdown
---
"epoml": minor
---

Add new audio component with base64 support

This adds support for audio files in templates with both file path and base64 data options.
```

## Release Notes

Release notes are automatically generated from changeset summaries and published to:
- GitHub Releases
- npm package page
- CHANGELOG.md file

## Troubleshooting

### Release not working?
- Check that you have pending changesets: `pnpm changeset status`
- Ensure packages build successfully: `pnpm build`
- Verify npm token has correct permissions

### Version not bumping?
- Make sure you've committed your changesets
- Check that the package isn't marked as private
- Verify the changeset mentions the correct package name