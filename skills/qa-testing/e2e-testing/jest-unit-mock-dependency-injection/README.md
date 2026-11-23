# Jest Unit Mock Dependency Injection

## Description
Authors fast, isolated unit test suites using Jest with mock implementations and dependency injection. Use when writing reliable unit tests for business logic without touching external services.

## Purpose
Unit tests that call external databases or APIs are slow and flaky. Jest function mocks, module spies, and dependency injection isolate pure domain logic for sub-second test execution.

## When to Use
- When executing jest unit mock dependency injection in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Jest, TypeScript) cannot be provisioned.

## Supported Technologies
- Jest
- TypeScript
- Node.js
- Dependency Injection

## Example Use Cases
### Core Business Logic Testing
Testing pricing and discount calculation algorithms across dozens of permutations.

### Error Boundary Simulation
Simulating external payment gateway timeouts to verify retry and rollback logic.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Jest) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://jestjs.io/docs/mock-functions
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
