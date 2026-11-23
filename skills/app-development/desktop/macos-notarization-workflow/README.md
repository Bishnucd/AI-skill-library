# Macos Notarization Workflow

## Description
Automates Apple Developer code signing, hardened runtime configuration, and notarytool submission for macOS apps. Use when preparing macOS desktop applications for Gatekeeper compliance.

## Purpose
macOS Gatekeeper blocks non-notarized applications. Developers must sign binaries with a Developer ID certificate, enable the hardened runtime, and submit artifacts to Apple Notary Service.

## When to Use
- When executing macos notarization workflow in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (macOS, xcrun notarytool) cannot be provisioned.

## Supported Technologies
- macOS
- xcrun notarytool
- codesign
- Apple Developer CLI

## Example Use Cases
### Gatekeeper Pass Verification
Ensuring macOS desktop apps launch cleanly without security warning popups.

### Automated Mac Release Pipeline
Integrating Apple notarization steps into headless GitHub Actions runners.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (macOS) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
