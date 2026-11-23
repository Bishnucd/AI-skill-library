# Container Image Trivy Scanner

## Description
Scans container base images and application layers for known CVE vulnerabilities and misconfigurations using Trivy. Use when securing container build pipelines in CI/CD.

## Purpose
Container images often inherit hundreds of OS-level vulnerabilities from base layers. Trivy scans operating system packages and language dependencies, failing builds that breach severity thresholds.

## When to Use
- When executing container image trivy scanner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Trivy, Docker) cannot be provisioned.

## Supported Technologies
- Trivy
- Docker
- SARIF
- GitHub Actions

## Example Use Cases
### Container Release Gate
Automating security quality gates before pushing images to production registries.

### Daily Base Image Auditing
Scanning existing production container registries for newly discovered zero-day CVEs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Trivy) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://aquasecurity.github.io/trivy/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
