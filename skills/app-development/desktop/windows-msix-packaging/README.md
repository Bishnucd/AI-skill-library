# Windows Msix Packaging

## Description
Packages desktop executables into clean, sandboxed Windows MSIX packages ready for enterprise distribution. Use when packaging Windows applications for Microsoft Store or enterprise IT rollout.

## Purpose
MSIX provides safe, uninstall-clean packaging with differential updates, enterprise certificate signing, and containerized file system isolation for Windows applications.

## When to Use
- When executing windows msix packaging in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Windows 10/11, MSIX Packaging Tool) cannot be provisioned.

## Supported Technologies
- Windows 10/11
- MSIX Packaging Tool
- SignTool
- PowerShell

## Example Use Cases
### Microsoft Store Submission
Preparing desktop software for publication in the Microsoft Store.

### Enterprise MDM Deployment
Deploying signed MSIX applications across corporate Windows fleets via Intune.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Windows 10/11) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://learn.microsoft.com/en-us/windows/msix/overview
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
