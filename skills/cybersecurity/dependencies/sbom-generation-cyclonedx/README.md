# Sbom Generation Cyclonedx

## Description
Generates standardized Software Bill of Materials (SBOM) in CycloneDX JSON format from project dependency graphs. Use when providing software transparency and complying with supply chain security standards.

## Purpose
Executive orders and enterprise clients require machine-readable SBOMs. Generating CycloneDX reports provides a complete bill of direct and transitive dependencies with cryptographic hashes.

## When to Use
- When executing sbom generation cyclonedx in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (CycloneDX CLI, Node.js / Python / Go) cannot be provisioned.

## Supported Technologies
- CycloneDX CLI
- Node.js / Python / Go
- JSON
- SPDX

## Example Use Cases
### Supply Chain Compliance
Publishing official SBOMs alongside application releases for enterprise procurement.

### Vulnerability Impact Tracking
Instantly querying whether a newly disclosed CVE affects any released build artifact.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (CycloneDX CLI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://cyclonedx.org/specification/overview/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
