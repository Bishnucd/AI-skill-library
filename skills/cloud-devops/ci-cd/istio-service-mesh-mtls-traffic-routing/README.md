# Istio Service Mesh Mtls Traffic Routing

## Description
Configures Istio service mesh mutual TLS (mTLS), canary traffic splitting, and fault injection. Use when securing and managing inter-service communication in Kubernetes.

## Purpose
Istio deploys Envoy sidecar proxies alongside application pods, providing automatic mutual TLS cryptographic encryption, fine-grained traffic routing, and distributed tracing without application code changes.

## When to Use
- When executing istio service mesh mtls traffic routing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Istio, Envoy Proxy) cannot be provisioned.

## Supported Technologies
- Istio
- Envoy Proxy
- mTLS
- Kubernetes

## Example Use Cases
### Zero-Trust Internal Network Encryption
Guaranteeing all microservice communication is encrypted with rotating certificates.

### Canary Release Traffic Shifting
Routing 5% of live user traffic to new microservice versions before full rollout.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Istio) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://istio.io/latest/docs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
