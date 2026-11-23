# K6 Api Load Performance Testing

## Description
Authors scalable, scriptable HTTP load testing scenarios with virtual users and latency thresholds using Grafana k6. Use when verifying API performance, capacity limits, and breaking points under load.

## Purpose
Untested APIs collapse during production marketing campaigns. k6 runs high-performance Go-based load simulations executing scriptable virtual user journeys with strict threshold assertions.

## When to Use
- When executing k6 api load performance testing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Grafana k6, JavaScript) cannot be provisioned.

## Supported Technologies
- Grafana k6
- JavaScript
- Load Testing
- Prometheus / Grafana

## Example Use Cases
### Pre-Black Friday Capacity Verification
Testing whether e-commerce checkout APIs sustain 10,000 concurrent shopping carts.

### Microservice SLA Verification
Verifying that internal gRPC and REST endpoints satisfy sub-50ms latency SLAs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Grafana k6) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://k6.io/docs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
