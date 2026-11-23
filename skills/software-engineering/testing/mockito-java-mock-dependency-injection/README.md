# Mockito Java Mock Dependency Injection

## Description
Mocks external dependencies and verifies method invocations in Java test suites using Mockito. Use when isolating unit tests from external databases, networks, and services.

## Purpose
Unit tests must test single classes in isolation. Mockito creates mock instances of interfaces and classes, stubbing method returns with when().thenReturn() and verifying calls with verify().

## When to Use
- When executing mockito java mock dependency injection in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Mockito, Java) cannot be provisioned.

## Supported Technologies
- Mockito
- Java
- Mocking / Stubbing
- JUnit 5

## Example Use Cases
### Spring Boot Service Unit Testing
Testing business logic in isolation without starting a heavy Spring ApplicationContext or database.

### Payment Processing Failure Verification
Verifying that an alert email is sent when the payment gateway throws a PaymentException.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Mockito) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://site.mockito.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
