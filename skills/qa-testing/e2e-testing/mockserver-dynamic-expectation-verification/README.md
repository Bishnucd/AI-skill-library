# Mockserver Dynamic Expectation Verification

## Description
Verifies outbound microservice HTTP/HTTPS requests and simulates dynamic callbacks using MockServer. Use when asserting that internal services make correct outbound webhook and API calls.

## Purpose
Standard mock servers only return responses. MockServer records all incoming HTTP requests, allowing tests to verify exact outbound headers, payloads, and request frequencies made by tested services.

## When to Use
- When executing mockserver dynamic expectation verification in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (MockServer, Expectation Verification) cannot be provisioned.

## Supported Technologies
- MockServer
- Expectation Verification
- Service Mocking
- Integration Testing

## Example Use Cases
### Outbound Webhook Delivery Verification
Asserting that an order fulfillment microservice triggered the customer webhook with valid signature headers.

### Idempotency Retry Call Verification
Confirming that an application retried a failed HTTP request exactly 3 times with exponential backoff delays.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (MockServer) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.mock-server.com/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
