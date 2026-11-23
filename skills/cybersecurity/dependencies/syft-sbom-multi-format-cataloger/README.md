# Syft Sbom Multi Format Cataloger

## Description
Generates detailed Software Bill of Materials (SBOM) across container images and filesystems using Anchore Syft. Use when cataloging packages, licenses, and file digests.

## Purpose
Syft inspects container layers and language package manifests (npm, pip, cargo, go), cataloging deep nested dependencies into standard SPDX or CycloneDX JSON documents in seconds.

## When to Use
- When executing syft sbom multi format cataloger in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Anchore Syft, SPDX / CycloneDX) cannot be provisioned.

## Supported Technologies
- Anchore Syft
- SPDX / CycloneDX
- Container Images
- CLI

## Example Use Cases
### Release Artifact Provenance
Attaching comprehensive machine-readable SBOMs to every container image published.

### Rapid Vulnerability Triage
Searching offline SBOM files to instantly discover which deployed containers contain an affected library.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Anchore Syft) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/anchore/syft
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
