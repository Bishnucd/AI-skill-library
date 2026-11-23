# Global Shortcut Keyboard Listener

## Description
Registers and handles system-wide global keyboard accelerators that work even when the app is unfocused. Use when building desktop productivity tools, screenshot utilities, and hotkey launchers.

## Purpose
Launcher and utility apps must respond to global hotkeys (e.g. Cmd+Shift+Space) regardless of which application currently holds user focus, requiring low-level OS hook registrations.

## When to Use
- When executing global shortcut keyboard listener in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Global Shortcuts API, X11 / Wayland / Win32 / Cocoa) cannot be provisioned.

## Supported Technologies
- Global Shortcuts API
- X11 / Wayland / Win32 / Cocoa
- Node.js / Rust

## Example Use Cases
### Spotlight-Style Quick Search Launcher
Summoning a floating search palette instantly from anywhere in the operating system.

### Screen Capture Hotkey
Triggering area crop screenshots globally without switching application focus.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Global Shortcuts API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.electronjs.org/docs/latest/api/global-shortcut
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
