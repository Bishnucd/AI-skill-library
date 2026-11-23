# System Tray Status Notifier

## Description
Manages system tray / menu bar status icons, dynamic context menus, and background minimize behavior. Use when building background utility applications that live in the OS tray.

## Purpose
Background utilities (sync clients, VPNs, chat apps) require unobtrusive system tray icons with dynamic status badges, right-click context menus, and single-click window toggling.

## When to Use
- When executing system tray status notifier in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Electron / Tauri, System Tray API) cannot be provisioned.

## Supported Technologies
- Electron / Tauri
- System Tray API
- Desktop Menus
- TypeScript

## Example Use Cases
### Cloud Sync Status Indicator
Displaying spinning sync icons and storage quota stats in the operating system menu bar.

### Quick-Access Utility Launcher
Allowing users to trigger quick actions without keeping large main windows open.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Electron / Tauri) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.electronjs.org/docs/latest/api/tray
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
