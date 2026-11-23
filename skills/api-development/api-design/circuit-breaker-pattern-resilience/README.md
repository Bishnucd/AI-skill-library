# Circuit Breaker Pattern Resilience

## Description
Implements the circuit breaker pattern with closed, open, and half-open states to prevent cascading failures. Use when wrapping external microservice and third-party API dependencies.

## Purpose
When downstream services slow down or crash, upstream callers exhaust threads waiting for timeouts. Circuit breakers trip automatically to fail fast, shielding the system until health returns.

## When to Use
- When executing circuit breaker pattern resilience in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Resilience4j / Opossum, Node.js / Java) cannot be provisioned.

## Supported Technologies
- Resilience4j / Opossum
- Node.js / Java
- Distributed Systems

## Example Use Cases
### Third-Party SaaS Outage Shielding
Preventing checkout failures from freezing when an external tax calculation API is slow.

### Cascading Microservice Crash Defense
Halting traffic to overloaded database clusters to allow them to recover.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Resilience4j / Opossum) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://martinfowler.com/bliki/CircuitBreaker.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
