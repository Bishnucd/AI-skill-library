# Architectural Boundary Enforcement

## Description
Enforces modular architectural layer boundaries and prevents illegal dependency imports in codebases. Use when maintaining clean architecture, hexagonal boundaries, or monorepo module isolation.

## Purpose
Codebases degrade as developers accidentally import database entities into UI components or bypass domain layers. Automated architectural linters reject prohibited cross-module import paths.

## When to Use
- When executing architectural boundary enforcement in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ESLint, Dependency-Cruiser) cannot be provisioned.

## Supported Technologies
- ESLint
- Dependency-Cruiser
- ArchUnit
- TypeScript / Java

## Example Use Cases
### Hexagonal Architecture Enforcement
Preventing infrastructure database libraries from leaking into core domain entities.

### Monorepo Package Encapsulation
Ensuring internal private packages cannot be imported outside their designated boundary.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ESLint) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://eslint.org/docs/latest/rules/no-restricted-imports
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
