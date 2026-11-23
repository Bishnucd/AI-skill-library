# Vector Timber Observability Log Shipper

## Description
Constructs high-performance log and metric transformation topologies using Datadog Vector. Use when routing, parsing, and filtering terabytes of telemetry data with minimal CPU overhead.

## Purpose
Vector is an ultra-fast, memory-efficient observability pipeline written in Rust. It ingests logs and metrics from diverse sources, transforms them using VRL, and sinks them to target backends.

## When to Use
- When executing vector timber observability log shipper in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Vector (Timber), Rust) cannot be provisioned.

## Supported Technologies
- Vector (Timber)
- Rust
- VRL (Vector Remap Language)
- Telemetry Ingestion

## Example Use Cases
### Kubernetes Pod Log PII Redaction
Stripping customer credit card numbers and passwords from container logs before sending to S3.

### Log Cost Reduction Pre-Filtering
Dropping 60% of repetitive health-check log lines before shipping to expensive indexing SaaS.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Vector (Timber)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://vector.dev/docs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
