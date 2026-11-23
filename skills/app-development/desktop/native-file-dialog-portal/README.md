# Native File Dialog Portal

## Description
Integrates native OS file pickers, folder dialogs, and save prompts via XDG Desktop Portals and native APIs. Use when providing native, sandboxed file selection in desktop applications.

## Purpose
Sandboxed applications cannot directly read arbitrary host filesystems. Invoking native desktop portals renders familiar OS file dialogs while safely granting access only to chosen files.

## When to Use
- When executing native file dialog portal in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (XDG Desktop Portal, Win32 IFileDialog) cannot be provisioned.

## Supported Technologies
- XDG Desktop Portal
- Win32 IFileDialog
- macOS NSOpenPanel
- Rust / C++

## Example Use Cases
### Sandboxed File Import/Export
Allowing users to save exports to their desktop without granting the app broad file permissions.

### Native OS User Experience
Ensuring file selection windows match system dark mode and OS navigation favorites.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (XDG Desktop Portal) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://flatpak.github.io/xdg-desktop-portal/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
