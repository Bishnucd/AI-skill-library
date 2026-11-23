# Electron Auto Updater Pipeline

## Description
Configures secure, differential auto-update pipelines for Electron desktop applications using electron-updater. Use when implementing seamless background updates for desktop software.

## Purpose
Desktop applications require background update checks, cryptographic signature verification, differential binary downloads, and restart prompts to ensure users run secure, current versions.

## When to Use
- When executing electron auto updater pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Electron, electron-builder) cannot be provisioned.

## Supported Technologies
- Electron
- electron-builder
- electron-updater
- GitHub Releases / S3

## Example Use Cases
### Continuous Desktop Deployment
Deploying bug fixes automatically to desktop client installations.

### Differential Delta Updates
Minimizing bandwidth consumption by distributing binary diff patches.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Electron) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.electron.build/auto-update
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
