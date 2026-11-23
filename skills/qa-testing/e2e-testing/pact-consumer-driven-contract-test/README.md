# Pact Consumer Driven Contract Test

## Description
Implements consumer-driven contract testing between microservices using Pact to prevent breaking API changes. Use when testing distributed service integrations without fragile end-to-end environments.

## Purpose
End-to-end integration environments are slow and brittle. Consumer-driven contracts allow API consumers to publish expected request/response contracts that provider services verify in CI.

## When to Use
- When executing pact consumer driven contract test in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Pact, Node.js / Python / Java) cannot be provisioned.

## Supported Technologies
- Pact
- Node.js / Python / Java
- JSON Contracts
- Pact Broker

## Example Use Cases
### Microservice Deployment Independence
Deploying frontend and backend microservices independently with 100% confidence.

### Breaking Change Prevention
Detecting when a backend engineer modifies a response field that breaks mobile apps.

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
