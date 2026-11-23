# Naming Convention Clean Code Consistency

## Description
Enforces ubiquitous language, domain naming conventions, and cognitive readability in code reviews. Use when improving long-term maintainability and readability of enterprise codebases.

## Purpose
Poor naming creates cognitive friction and hides business bugs. Systematic naming audits ensure variable, function, and class names reflect ubiquitous domain language rather than implementation details.

## When to Use
- When executing naming convention clean code consistency in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Clean Code, Ubiquitous Language) cannot be provisioned.

## Supported Technologies
- Clean Code
- Ubiquitous Language
- Domain-Driven Design (DDD)
- Code Review

## Example Use Cases
### Enterprise Domain Model Standardization
Refactoring inconsistent terminology across microservices to align with the core corporate domain dictionary.

### Junior Developer Code Review Mentorship
Guiding developers to replace cryptic single-letter variables with descriptive, intention-revealing names.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Clean Code) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://martinfowler.com/bliki/UbiquitousLanguage.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
