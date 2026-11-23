# Pact Consumer Driven Contract Testing

## Description
Defines and verifies consumer-driven API contracts between microservices using Pact. Use when catching breaking API changes between frontend and backend teams before deployment.

## Purpose
End-to-end testing of 50 microservices is slow and flaky. Pact allows API consumers to write unit tests generating a contract JSON, which the provider service verifies independently in CI.

## When to Use
- When executing pact consumer driven contract testing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Pact, Consumer-Driven Contracts) cannot be provisioned.

## Supported Technologies
- Pact
- Consumer-Driven Contracts
- Microservices
- API Contract Testing

## Example Use Cases
### Frontend and Backend Independent Deployment
Allowing backend teams to deploy APIs confidently knowing no consumer contracts are broken.

### Multi-Team Microservice Architecture Coordination
Managing 100+ microservice API contracts without requiring costly shared staging environments.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Pact) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.pact.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
