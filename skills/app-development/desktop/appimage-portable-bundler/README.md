# Appimage Portable Bundler

## Description
Packages standalone, dependency-bundled portable AppImage binaries for Linux distributions using appimagetool. Use when distributing single-file executable Linux desktop software.

## Purpose
AppImage bundles an application and all its system libraries into a single executable file that users can run by double-clicking, requiring zero root installation or package manager intervention.

## When to Use
- When executing appimage portable bundler in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (AppImage, appimagetool) cannot be provisioned.

## Supported Technologies
- AppImage
- appimagetool
- Bash
- Linux

## Example Use Cases
### Zero-Install Linux Software
Distributing portable utilities that run immediately without package manager dependencies.

### Portable Developer Tools
Sharing self-contained command-line and GUI developer utilities across varied Linux servers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (AppImage) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://appimage.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
