# Kaniko Rootless Container Build

## Description
Builds and pushes Docker container images inside Kubernetes clusters without requiring root daemon privileges using Kaniko. Use when building secure container images in CI/CD.

## Purpose
Mounting /var/run/docker.sock inside CI containers creates severe root container breakout vulnerabilities. Kaniko executes Dockerfile instructions in userspace within standard Kubernetes pods.

## When to Use
- When executing kaniko rootless container build in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Google Kaniko, Kubernetes) cannot be provisioned.

## Supported Technologies
- Google Kaniko
- Kubernetes
- Dockerfiles
- Container Registries

## Example Use Cases
### Rootless In-Cluster CI Builds
Building Docker images safely inside multi-tenant Kubernetes clusters.

### Layer Cache Acceleration
Caching remote Dockerfile build layers to reduce container build times by 70%.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Google Kaniko) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/GoogleContainerTools/kaniko
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
