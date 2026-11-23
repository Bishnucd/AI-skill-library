# Windows Authenticode Dual Signing

## Description
Signs Windows executables and DLLs with SHA-256 Authenticode digital certificates using SignTool and timestamp servers. Use when eliminating Windows SmartScreen untrusted warnings.

## Purpose
Windows SmartScreen blocks unsigned binaries with severe warning screens. Signing executables with EV or standard code signing certificates and trusted RFC 3161 timestamps ensures trust.

## When to Use
- When executing windows authenticode dual signing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SignTool, Authenticode) cannot be provisioned.

## Supported Technologies
- SignTool
- Authenticode
- Hardware Security Module (HSM)
- Windows

## Example Use Cases
### Windows SmartScreen Trust Building
Preventing "Unknown Publisher" security warnings on downloaded Windows installers.

### Enterprise Antivirus Whitelisting
Ensuring corporate endpoint protection software recognizes software binaries as legitimate.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SignTool) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://learn.microsoft.com/en-us/windows-hardware/drivers/install/authenticode
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
