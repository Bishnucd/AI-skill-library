# Vault Agent Sidecar Secret Injector

## Description
Injects dynamic database credentials and secrets into Kubernetes pods using HashiCorp Vault Agent sidecars. Use when eliminating hardcoded static secrets in cloud applications.

## Purpose
Hardcoded secrets in environment variables leak into crash logs and child processes. Vault Agent sidecars authenticate via Kubernetes ServiceAccounts and write ephemeral dynamic secrets to in-memory ramdisks.

## When to Use
- When executing vault agent sidecar secret injector in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (HashiCorp Vault, Kubernetes Mutating Webhook) cannot be provisioned.

## Supported Technologies
- HashiCorp Vault
- Kubernetes Mutating Webhook
- Vault Agent
- Security

## Example Use Cases
### Dynamic Ephemeral DB Credentials
Generating 1-hour database user credentials that rotate automatically for application pods.

### Zero Static Cloud Secrets
Eliminating long-lived API keys from Kubernetes Secret manifests entirely.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (HashiCorp Vault) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.hashicorp.com/vault/docs/platform/k8s/injector
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
