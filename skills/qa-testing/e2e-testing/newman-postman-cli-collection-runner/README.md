# Newman Postman Cli Collection Runner

## Description
Executes automated Postman API collections and assertion test scripts from the command line using Newman. Use when running Postman API integration suites in CI/CD pipelines.

## Purpose
Newman allows teams to run Postman collections in headless CI environments, passing dynamic environment files, checking pm.expect assertions, and exporting JUnit XML test reports.

## When to Use
- When executing newman postman cli collection runner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Newman, Postman Collections) cannot be provisioned.

## Supported Technologies
- Newman
- Postman Collections
- CLI Runner
- API Automation

## Example Use Cases
### API Gateway Nightly Regression Pipeline
Executing 400 Postman API integration tests against staging API gateway every night.

### Partner B2B API Contract Validation
Verifying that partner API endpoints adhere to documented Postman collection response formats.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Newman) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://learning.postman.com/docs/collections/using-newman-cli/command-line-integration-with-newman/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
