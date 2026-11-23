# Kubernetes Helm Chart Templating

## Description
Authors production-grade Kubernetes Helm charts with configurable values, resource limits, and health probes. Use when packaging cloud-native microservices for Kubernetes deployment.

## Purpose
Helm packages Kubernetes manifests into parameterized templates. Production charts require liveness/readiness probes, pod disruption budgets, resource requests/limits, and horizontal autoscaling.

## When to Use
- When executing kubernetes helm chart templating in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Kubernetes, Helm v3) cannot be provisioned.

## Supported Technologies
- Kubernetes
- Helm v3
- YAML
- kubeval

## Example Use Cases
### Microservice Packaging
Publishing reusable Helm charts across multiple staging and production clusters.

### GitOps Helm Releases
Managing dynamic environment configurations with ArgoCD or Flux.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Kubernetes) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://helm.sh/docs/chart_template_guide/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
