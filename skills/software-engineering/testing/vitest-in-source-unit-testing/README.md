# Vitest In Source Unit Testing

## Description
Runs lightning-fast unit tests and co-located in-source component tests using Vitest and Vite. Use when building modern TypeScript libraries and frontend applications.

## Purpose
Vitest shares Vite transformation pipelines and HMR, executing TypeScript tests in milliseconds. In-source testing embeds unit tests directly inside implementation files, stripped during build.

## When to Use
- When executing vitest in source unit testing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Vitest, Vite) cannot be provisioned.

## Supported Technologies
- Vitest
- Vite
- In-Source Testing
- TypeScript

## Example Use Cases
### Utility Function In-Source Testing
Co-locating date formatting helper functions with their unit tests in the same file for instant feedback.

### Modern TypeScript Library Development
Developing npm packages with sub-second watch-mode re-execution on every code edit.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Vitest) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://vitest.dev/guide/in-source.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
