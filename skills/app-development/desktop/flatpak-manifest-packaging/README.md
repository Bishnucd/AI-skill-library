# Flatpak Manifest Packaging

## Description
Constructs sandboxed Flatpak application manifests with runtime permissions and Flathub distribution recipes. Use when packaging desktop Linux applications for universal distribution.

## Purpose
Linux fragmentation makes packaging difficult. Flatpak creates isolated sandbox runtimes that run identically across Ubuntu, Fedora, Arch, and SteamOS with explicit permission portals.

## When to Use
- When executing flatpak manifest packaging in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Flatpak, Flathub) cannot be provisioned.

## Supported Technologies
- Flatpak
- Flathub
- OSTree
- Linux

## Example Use Cases
### Universal Linux Distribution
Publishing desktop apps to Flathub accessible to all Linux distributions.

### SteamOS Gaming Handheld Deployment
Packaging productivity and gaming utilities for seamless Steam Deck execution.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Flatpak) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.flatpak.org/en/latest/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
