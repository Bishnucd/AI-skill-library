# Nginx Ingress Controller Cert Manager

## Description
Configures ingress-nginx with cert-manager for automatic Let's Encrypt TLS certificate generation and renewal. Use when provisioning HTTPS endpoints for Kubernetes microservices.

## Purpose
Manually renewing TLS certificates causes catastrophic production outages. cert-manager automates ACME HTTP-01 and DNS-01 challenges, obtaining and rotating Let's Encrypt certificates automatically.

## When to Use
- When executing nginx ingress controller cert manager in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ingress-nginx, cert-manager) cannot be provisioned.

## Supported Technologies
- ingress-nginx
- cert-manager
- Let's Encrypt ACME
- Kubernetes

## Example Use Cases
### Zero-Maintenance HTTPS Routing
Automatically issuing valid SSL certificates for all newly deployed microservice domains.

### Wildcard Domain Certificate Renewal
Managing wildcard *.example.com TLS certificates via automated Cloudflare DNS challenges.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ingress-nginx) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://cert-manager.io/docs/usage/ingress/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
