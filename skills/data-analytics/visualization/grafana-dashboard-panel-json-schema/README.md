# Grafana Dashboard Panel Json Schema

## Description
Authors declarative Grafana dashboard panel JSON models with PromQL queries and alert thresholds. Use when provisioning reproducible monitoring dashboards via GitOps.

## Purpose
Grafana dashboards can be declared as version-controlled JSON schemas, specifying time series graph panels, Prometheus queries, gauge thresholds, and variable templating.

## When to Use
- When executing grafana dashboard panel json schema in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Grafana, PromQL / Flux) cannot be provisioned.

## Supported Technologies
- Grafana
- PromQL / Flux
- JSON Model
- Infrastructure as Code

## Example Use Cases
### Kubernetes Cluster SRE Overview
Deploying standardized node CPU, memory, and pod restart rate dashboard panels.

### E-Commerce Checkout Rate Monitoring
Graphing payment gateway error rates with warning thresholds and Slack webhooks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Grafana) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/view-dashboard-json-model/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
