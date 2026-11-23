# Electron Forge Maker Pipeline

## Description
Configures comprehensive desktop installers (.deb, .rpm, .dmg, Squirrel.Windows) using Electron Forge makers. Use when automating multi-format desktop installer packaging.

## Purpose
Electron Forge provides a unified CLI and configuration toolchain to compile, package, and generate native platform installers across Linux, macOS, and Windows.

## When to Use
- When executing electron forge maker pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Electron Forge, Node.js) cannot be provisioned.

## Supported Technologies
- Electron Forge
- Node.js
- Squirrel / WiX / Deb
- TypeScript

## Example Use Cases
### Multi-OS Distribution Packaging
Generating native Windows .exe and macOS .dmg installers from a single build pipeline.

### Linux Distro Compatibility
Creating both Debian .deb and RedHat .rpm packages for Linux desktop users.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Electron Forge) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.electronforge.io/config/makers
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
