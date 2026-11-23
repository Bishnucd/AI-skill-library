# Wiremock Api Stubbing Service Virtualization

## Description
Stubs external HTTP APIs and injects network fault scenarios using WireMock service virtualization. Use when testing frontends and microservices in isolation from third-party down times.

## Purpose
Relying on external sandbox APIs causes test flakiness due to rate limits and downtime. WireMock runs standalone mock servers matching HTTP paths, headers, and payloads with dynamic templating.

## When to Use
- When executing wiremock api stubbing service virtualization in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (WireMock, Service Virtualization) cannot be provisioned.

## Supported Technologies
- WireMock
- Service Virtualization
- API Mocking
- Fault Injection

## Example Use Cases
### Payment Gateway Timeout Resilience Testing
Simulating payment processor 30-second socket timeouts to verify application retry and rollback logic.

### Third-Party Webhook Receipt Simulation
Triggering simulated incoming third-party billing webhooks into local microservice endpoints.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (WireMock) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://wiremock.org/docs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
