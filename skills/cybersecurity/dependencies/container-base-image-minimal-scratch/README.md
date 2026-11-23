# Container Base Image Minimal Scratch

## Description
Builds ultra-minimal container images from scratch or distroless base layers for compiled Go and Rust binaries. Use when eliminating 100% of OS package vulnerabilities in containers.

## Purpose
Standard base images (Ubuntu, Debian) bundle hundreds of unnecessary utilities (bash, curl, apt) that accumulate CVEs. Compiling static binaries and placing them inside "scratch" yields zero CVEs.

## When to Use
- When executing container base image minimal scratch in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Docker scratch / distroless, Go / Rust) cannot be provisioned.

## Supported Technologies
- Docker scratch / distroless
- Go / Rust
- Static Linking
- Container Security

## Example Use Cases
### Zero-CVE Container Releases
Publishing production containers that return zero vulnerabilities on all security scanners.

### Minimal Container Footprint
Producing production container images under 15MB that boot in milliseconds.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Docker scratch / distroless) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/GoogleContainerTools/distroless
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
