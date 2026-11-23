# Refactoring Long Parameter List Smell

## Description
Refactors bloated function parameter lists into Parameter Objects and Builder patterns to improve testability. Use when eliminating code smells in legacy codebases.

## Purpose
Functions with 6+ parameters are hard to read, prone to argument order bugs, and painful to mock in tests. Bundling related arguments into cohesive parameter objects simplifies signatures.

## When to Use
- When executing refactoring long parameter list smell in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Refactoring, Parameter Objects) cannot be provisioned.

## Supported Technologies
- Refactoring
- Parameter Objects
- Builder Pattern
- Clean Code

## Example Use Cases
### Legacy User Creation Service Refactor
Refactoring createUser(name, email, age, role, org, tier, status) into createUser(CreateUserOptions).

### Complex Search Query Filter Encapsulation
Bundling 12 query parameters into a SearchFilterCriteria object to allow flexible filter extension.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Refactoring) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://refactoring.guru/smells/long-parameter-list
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
