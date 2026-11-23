# Chaos Engineering Litmus Fault Injection

## Description
Executes automated chaos engineering experiments (pod kill, network latency, CPU hogging) using LitmusChaos. Use when validating high-availability and fault resilience in Kubernetes.

## Purpose
Untested failovers fail during real outages. Chaos engineering deliberately injects failures (killing random pods, adding 500ms network packet latency) to prove systems survive unexpected degradation.

## When to Use
- When executing chaos engineering litmus fault injection in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (LitmusChaos, Chaos Engineering) cannot be provisioned.

## Supported Technologies
- LitmusChaos
- Chaos Engineering
- Kubernetes
- Cloud Resilience

## Example Use Cases
### Automated Disaster Recovery Validation
Proving that killing any single microservice node causes zero user-facing errors.

### GameDay Simulation Drills
Training engineering teams on incident response by simulating real-world infrastructure failures.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (LitmusChaos) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://litmuschaos.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
