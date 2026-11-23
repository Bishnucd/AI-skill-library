# Grafana Tempo Distributed Tracing Backend

## Description
Deploys and configures high-volume, object-storage-backed distributed tracing using Grafana Tempo and OpenTelemetry. Use when storing billions of trace spans cost-effectively.

## Purpose
Storing trace spans in Elasticsearch or Cassandra is prohibitively expensive at scale. Grafana Tempo stores complete distributed traces directly in cloud object storage (S3), reducing storage costs by 90%.

## When to Use
- When executing grafana tempo distributed tracing backend in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Grafana Tempo, OpenTelemetry Collector) cannot be provisioned.

## Supported Technologies
- Grafana Tempo
- OpenTelemetry Collector
- AWS S3 / GCS
- Grafana

## Example Use Cases
### Cost-Effective Trace Storage
Retaining 100% of production trace spans for 30 days without expensive database clusters.

### Log-to-Trace Correlation
Clicking a single error line in Grafana Loki to instantly open the corresponding Tempo trace span.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Grafana Tempo) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://grafana.com/docs/tempo/latest/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
