# Artillery Api Load Benchmarking Pipeline

## Description
Benchmarks API throughput, latency percentiles (p95/p99), and error rate thresholds using Artillery CLI in CI/CD. Use when verifying that production deployments satisfy performance SLAs.

## Purpose
Artillery is a modern, cloud-native load testing toolkit that simulates thousands of concurrent virtual users executing multi-step HTTP, WebSocket, and GraphQL scenarios with YAML specs.

## When to Use
- When executing artillery api load benchmarking pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Artillery, Load Testing) cannot be provisioned.

## Supported Technologies
- Artillery
- Load Testing
- Latency Benchmarking
- CI/CD Performance Gate

## Example Use Cases
### Black Friday Peak Traffic Readiness Audit
Simulating 10,000 concurrent shopping cart checkout requests to identify database connection pool limits.

### GraphQL API Query Performance Regression Gate
Catching unindexed N+1 database queries before code merges into master branch.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Artillery) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.artillery.io/docs
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
