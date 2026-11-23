# Docusaurus Docs As Code Pipeline

## Description
Builds modern developer documentation portals with search, versioning, and MDX using Docusaurus. Use when deploying version-controlled docs-as-code platforms for engineering teams.

## Purpose
Docusaurus is an open-source documentation framework built on React. It supports versioned documentation releases, internationalization, Algolia search integration, and interactive MDX components.

## When to Use
- When executing docusaurus docs as code pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Docusaurus, React / MDX) cannot be provisioned.

## Supported Technologies
- Docusaurus
- React / MDX
- Docs-as-Code
- Static Site Generator

## Example Use Cases
### Enterprise Software Documentation Portal
Deploying versioned documentation for software releases (v1.0, v2.0) with unified search.

### Open-Source Project Developer Guides
Publishing interactive guides with copyable code snippets, tabs for npm/yarn/pnpm, and dark mode.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Docusaurus) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docusaurus.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
