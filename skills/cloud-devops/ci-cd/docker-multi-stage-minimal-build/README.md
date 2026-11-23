# Docker Multi Stage Minimal Build

## Description
Constructs hardened, minimal multi-stage Dockerfiles utilizing distroless or alpine base layers. Use when minimizing container attack surface and optimizing deployment image size.

## Purpose
Multi-stage Docker builds separate build toolchains from runtime containers, creating tiny production images without compilers, package managers, or debugging utilities.

## When to Use
- When executing docker multi stage minimal build in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Docker, Distroless) cannot be provisioned.

## Supported Technologies
- Docker
- Distroless
- Alpine Linux
- BuildKit

## Example Use Cases
### Production Container Hardening
Eliminating CVEs from container images by removing shell and package managers.

### Image Size Optimization
Reducing 1GB Node.js build images down to 80MB production runtimes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Docker) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.docker.com/build/building/multi-stage/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
