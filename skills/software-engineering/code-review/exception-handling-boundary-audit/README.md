# Exception Handling Boundary Audit

## Description
Audits exception handling boundaries to eliminate silent catch blocks and unhandled promise rejections. Use when ensuring system observability and fault tolerance.

## Purpose
Empty catch blocks ("pokemon exception handling") swallow errors, leaving systems in corrupt states with zero log traces. Proper exception auditing ensures errors are logged, metric-tracked, or re-thrown.

## When to Use
- When executing exception handling boundary audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Exception Handling, Error Boundaries) cannot be provisioned.

## Supported Technologies
- Exception Handling
- Error Boundaries
- Observability
- Clean Code

## Example Use Cases
### Silent Failure Production Bug Remediation
Discovering an empty catch block that quietly hid failed database transaction commits for weeks.

### Async Node.js Process Crash Prevention
Adding unhandledRejection process listeners to log diagnostic stack traces before graceful pod restart.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Exception Handling) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Exception_handling
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
