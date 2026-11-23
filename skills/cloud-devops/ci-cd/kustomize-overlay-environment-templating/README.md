# Kustomize Overlay Environment Templating

## Description
Customizes environment-specific Kubernetes manifests using Kustomize overlays without complex Helm templating. Use when managing distinct dev, staging, and prod Kubernetes configs.

## Purpose
Kustomize enables declarative manifest inheritance. A shared "base" defines core deployments and services, while "overlays" apply patches for replica counts, ingress hosts, and environment variables.

## When to Use
- When executing kustomize overlay environment templating in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Kustomize, Kubernetes) cannot be provisioned.

## Supported Technologies
- Kustomize
- Kubernetes
- YAML
- GitOps

## Example Use Cases
### Multi-Environment Cluster Configs
Deploying identical application pods with differing CPU limits across dev and prod.

### Clean Manifest Maintenance
Eliminating duplicate YAML files by maintaining a single shared base manifest.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Kustomize) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://kustomize.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
