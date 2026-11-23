# Wix Toolset Msi Installer

## Description
Authors WiX XML source files to compile enterprise Windows MSI installers with custom actions and registry keys. Use when creating enterprise-grade Windows installation packages.

## Purpose
Enterprise IT departments mandate MSI packages for silent deployment via Active Directory or Intune. WiX Toolset compiles declarative XML markup into Windows Installer databases.

## When to Use
- When executing wix toolset msi installer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (WiX Toolset v4, Windows Installer (MSI)) cannot be provisioned.

## Supported Technologies
- WiX Toolset v4
- Windows Installer (MSI)
- XML
- PowerShell

## Example Use Cases
### Enterprise Silent Rollout
Equipping corporate system administrators with standard silent MSI packages.

### Clean Uninstallation Verification
Ensuring all registry keys and files are removed cleanly upon program removal.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (WiX Toolset v4) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://wixtoolset.org/docs/intro/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
