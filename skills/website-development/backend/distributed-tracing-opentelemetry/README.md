# Distributed Tracing Opentelemetry

## Description
Instruments distributed microservices with OpenTelemetry SDK to trace requests across service boundaries. Use when monitoring distributed transaction latency and pinpointing bottlenecks.

## Purpose
Tracking requests across microservices is impossible without distributed tracing. OpenTelemetry propagates W3C traceparent headers across HTTP and gRPC calls, assembling complete waterfall spans.

## When to Use
- When executing distributed tracing opentelemetry in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OpenTelemetry (OTel), W3C Trace Context) cannot be provisioned.

## Supported Technologies
- OpenTelemetry (OTel)
- W3C Trace Context
- Jaeger
- Node.js / Python

## Example Use Cases
### Distributed Latency Debugging
Pinpointing which microservice in an 8-service call chain caused a 2-second delay.

### End-to-End Transaction Tracing
Visualizing entire checkout execution flows from frontend click to payment gateway response.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OpenTelemetry (OTel)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://opentelemetry.io/docs/concepts/signals/traces/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
