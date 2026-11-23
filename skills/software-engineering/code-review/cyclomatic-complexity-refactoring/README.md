# Cyclomatic Complexity Refactoring

## Description
Measures cyclomatic complexity and refactors deeply nested conditionals into clean polymorphism or strategy patterns. Use when simplifying complex, unmaintainable legacy code during code review.

## Purpose
Functions with high cyclomatic complexity (> 10) are bug-prone and difficult to test. Refactoring deeply nested if/else trees into early returns, lookup tables, or Strategy patterns improves clarity.

## When to Use
- When executing cyclomatic complexity refactoring in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SonarQube, ESLint / Radon) cannot be provisioned.

## Supported Technologies
- SonarQube
- ESLint / Radon
- Clean Code
- Refactoring Patterns

## Example Use Cases
### Legacy Code Modernization
Untangling 500-line monolithic handler functions into modular, single-responsibility units.

### Testability Improvement
Reducing required unit test permutations by flattening branching logic.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SonarQube) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.sonarsource.com/resources/cognitive-complexity/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
