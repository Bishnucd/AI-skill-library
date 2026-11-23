# K6 Stress Load Testing Scenarios

## Description
Simulates high-concurrency peak load, ramp-up, and soak tests using Grafana k6 in JavaScript. Use when validating system throughput limits and auto-scaling behavior under stress.

## Purpose
k6 is a developer-centric load testing tool written in Go that runs ES6 JavaScript test scripts, generating high-volume concurrent traffic with low CPU and memory footprint.

## When to Use
- When executing k6 stress load testing scenarios in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (k6, Grafana k6) cannot be provisioned.

## Supported Technologies
- k6
- Grafana k6
- Load Testing
- Performance Engineering

## Example Use Cases
### Kubernetes Horizontal Pod Autoscaler Validation
Ramping traffic from 100 to 5,000 VUs to verify that Kubernetes HPA scales pods before response latency degrades.

### 24-Hour Soak Testing for Memory Leaks
Running steady moderate load for 24 hours to verify memory and connection pools stay flat.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (k6) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://k6.io/docs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
