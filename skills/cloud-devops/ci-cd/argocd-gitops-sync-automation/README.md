# Argocd Gitops Sync Automation

## Description
Manages Kubernetes cluster application state declaratively using ArgoCD GitOps synchronizations. Use when automating zero-drift continuous deployment to Kubernetes.

## Purpose
GitOps treats Git repositories as the single source of truth for infrastructure. ArgoCD continuously monitors Kubernetes clusters and reconciles live states with git-declared manifests.

## When to Use
- When executing argocd gitops sync automation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ArgoCD, Kubernetes) cannot be provisioned.

## Supported Technologies
- ArgoCD
- Kubernetes
- GitOps
- Kustomize

## Example Use Cases
### Declarative Kubernetes Delivery
Deploying microservice updates automatically whenever PRs merge into main branches.

### Configuration Drift Remediation
Automatically reverting manual kubectl edits that deviate from version-controlled git files.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ArgoCD) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://argo-cd.readthedocs.io/en/stable/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
