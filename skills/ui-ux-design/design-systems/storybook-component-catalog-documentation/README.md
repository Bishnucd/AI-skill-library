# Storybook Component Catalog Documentation

## Description
Documents UI component variants, states, and accessibility props with Storybook and MDX. Use when maintaining interactive component catalogs for engineering and design teams.

## Purpose
Storybook provides an isolated sandbox to develop, test, and document UI components outside of application business logic, rendering every visual state (hover, disabled, loading) interactively.

## When to Use
- When executing storybook component catalog documentation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Storybook, React / Vue) cannot be provisioned.

## Supported Technologies
- Storybook
- React / Vue
- Component Driven Development (CDD)
- MDX

## Example Use Cases
### Design System Living Documentation
Publishing an interactive component library where designers and developers can test component behavior.

### Component Visual Isolation Development
Developing complex data table components with edge-case data scenarios without starting backend servers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Storybook) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://storybook.js.org/docs
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
