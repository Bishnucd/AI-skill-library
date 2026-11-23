# Chaos Mesh Kubernetes Fault Injection Testing

## Description
Injects network latency, pod kills, and disk I/O errors into Kubernetes test clusters using Chaos Mesh. Use when verifying distributed application resiliency and auto-recovery in staging.

## Purpose
Distributed systems fail unpredictably in production. Chaos Mesh orchestrates fault injection experiments (PodChaos, NetworkChaos, IOChaos) to verify that systems fail over gracefully.

## When to Use
- When executing chaos mesh kubernetes fault injection testing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Chaos Mesh, Chaos Engineering) cannot be provisioned.

## Supported Technologies
- Chaos Mesh
- Chaos Engineering
- Kubernetes
- Fault Injection

## Example Use Cases
### Database Primary Replica Failover Verification
Killing database primary pods mid-transaction to verify standby replica promotion without data loss.

### Microservice Network Partition Resilience
Partitioning network communication between user service and auth service to test graceful degradation.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Chaos Mesh) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://chaos-mesh.org/docs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
