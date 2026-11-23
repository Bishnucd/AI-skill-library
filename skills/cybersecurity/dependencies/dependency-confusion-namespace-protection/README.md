# Dependency Confusion Namespace Protection

## Description
Configures internal private package scope registrations and npmrc/pip config boundaries to prevent dependency confusion. Use when securing enterprise packages from public namespace squatting.

## Purpose
Public package registries allow attackers to publish public packages matching internal private package names. Scope prefixes (@company/) and strict registry routing prevent package hijacking.

## When to Use
- When executing dependency confusion namespace protection in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Scoped Packages, npmrc / pip.conf) cannot be provisioned.

## Supported Technologies
- Scoped Packages
- npmrc / pip.conf
- Artifactory / Nexus
- Supply Chain

## Example Use Cases
### Enterprise Package Spoofing Defense
Preventing build servers from downloading malicious public packages with internal names.

### Secure Private Artifact Routing
Guiding enterprise developers on clean scoped package installation rules.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Scoped Packages) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://medium.com/@alex.birsan/dependency-confusion-4a5d60fec610
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
