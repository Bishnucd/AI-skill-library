# Stride Per Component Threat Modeling

## Description
Decomposes software architecture into Data Flow Diagrams (DFDs) and applies STRIDE threat modeling per element. Use when identifying threats early in the system design phase.

## Purpose
STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) analyzes each data flow, process, and data store across architectural trust boundaries.

## When to Use
- When executing stride per component threat modeling in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (STRIDE Threat Modeling, Data Flow Diagrams (DFD)) cannot be provisioned.

## Supported Technologies
- STRIDE Threat Modeling
- Data Flow Diagrams (DFD)
- Architecture Review
- Markdown

## Example Use Cases
### Architecture Pre-Implementation Review
Catching fundamental security design flaws before engineers write production code.

### Medical Device Software Clearance
Fulfilling FDA threat modeling documentation requirements for connected medical software.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (STRIDE Threat Modeling) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
