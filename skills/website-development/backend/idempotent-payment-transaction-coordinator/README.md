# Idempotent Payment Transaction Coordinator

## Description
Designs two-phase distributed transactions with idempotency keys and compensating sagas. Use when preventing duplicate charges and handling partial distributed failures.

## Purpose
Network retries can charge a customer twice. Idempotency middleware caches the initial response for a unique Idempotency-Key header, returning identical results on duplicate retries without re-charging.

## When to Use
- When executing idempotent payment transaction coordinator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Idempotency Keys, Saga Pattern) cannot be provisioned.

## Supported Technologies
- Idempotency Keys
- Saga Pattern
- Distributed Transactions
- Payment Processing

## Example Use Cases
### Duplicate Payment Charge Prevention
Ensuring that a customer double-clicking "Pay Now" or experiencing network drops is charged exactly once.

### Cross-Service Order Placement Saga
Coordinating inventory reservation, credit card charge, and shipping creation with compensating rollback sagas.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Idempotency Keys) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://stripe.com/docs/api/idempotent_requests
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
