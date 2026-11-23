# Django Migration Squashing Optimization

## Description
Squashes bloated Django migration histories into clean baseline migration files using squashmigrations. Use when speeding up test suite execution and simplifying migration trees.

## Purpose
Years of agile development create hundreds of Django migration files that slow down test suite setups. Squashing compiles old migration chains into a single optimized baseline file.

## When to Use
- When executing django migration squashing optimization in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Django ORM, Python) cannot be provisioned.

## Supported Technologies
- Django ORM
- Python
- Migration Squashing
- Performance

## Example Use Cases
### CI Test Suite Speedup
Reducing CI database setup time from 4 minutes to 15 seconds by squashing 300 old migrations.

### Legacy Monolith Migration Cleanup
Consolidating five years of legacy schema migrations into a clean initial state.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Django ORM) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.djangoproject.com/en/stable/topics/migrations/#squashing-migrations
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
