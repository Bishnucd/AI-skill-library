# Prometheus Metrics Exporter Setup

## Description
Instruments applications and infrastructure services to expose Prometheus metrics with standard labels. Use when adding real-time telemetry and alerting to distributed services.

## Purpose
Reliable observability relies on RED metrics (Rate, Errors, Duration). Exposing /metrics endpoints with uniform labels enables real-time Grafana dashboards and Prometheus alerts.

## When to Use
- When executing prometheus metrics exporter setup in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Prometheus, Grafana) cannot be provisioned.

## Supported Technologies
- Prometheus
- Grafana
- PromQL
- OpenTelemetry

## Example Use Cases
### Service Health Monitoring
Visualizing service error rates and p99 latency in real-time Grafana dashboards.

### Automated Incident Alerting
Paging on-call engineers when API error rates breach SLA thresholds.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Prometheus) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://prometheus.io/docs/practices/instrumentation/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
