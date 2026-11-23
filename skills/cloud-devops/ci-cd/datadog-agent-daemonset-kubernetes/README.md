# Datadog Agent Daemonset Kubernetes

## Description
Deploys and configures the Datadog Agent as a Kubernetes DaemonSet with auto-discovery and log collection. Use when collecting cluster metrics, traces, and container logs.

## Purpose
Monitoring containerized Kubernetes workloads requires running a node agent DaemonSet that automatically discovers new pods, extracts stdout/stderr logs, and captures host hardware metrics.

## When to Use
- When executing datadog agent daemonset kubernetes in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Datadog Agent, Kubernetes DaemonSet) cannot be provisioned.

## Supported Technologies
- Datadog Agent
- Kubernetes DaemonSet
- Helm
- APM Tracing

## Example Use Cases
### Full-Stack Observability
Unifying container CPU/memory metrics, application logs, and APM traces in Datadog.

### Cluster Resource Optimization
Identifying underutilized Kubernetes nodes and right-sizing pod resource requests.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Datadog Agent) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.datadoghq.com/containers/kubernetes/installation/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
