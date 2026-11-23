# Snapcraft Snap Packaging

## Description
Authors snapcraft.yaml manifests to package confined Snap packages for Ubuntu and Linux distributions. Use when publishing desktop applications to the Canonical Snap Store.

## Purpose
Snaps provide containerized desktop applications with atomic background updates, automatic dependency bundling, and strict AppArmor security confinement across dozens of Linux distributions.

## When to Use
- When executing snapcraft snap packaging in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Snapcraft, AppArmor) cannot be provisioned.

## Supported Technologies
- Snapcraft
- AppArmor
- Ubuntu
- Linux

## Example Use Cases
### Ubuntu Software Center Publication
Making desktop applications installable via single-click in Ubuntu Software Center.

### Automatic Silent Updates
Ensuring Linux users always run current application versions without manual update checks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Snapcraft) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://snapcraft.io/docs/snapcraft-overview
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
