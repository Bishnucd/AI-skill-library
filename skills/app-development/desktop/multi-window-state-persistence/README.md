# Multi Window State Persistence

## Description
Saves and restores multi-window coordinates, maximization states, and monitor bounds across application restarts. Use when providing polished window position memory in desktop applications.

## Purpose
Desktop apps that reopen in wrong positions or offscreen on disconnected secondary monitors frustrate users. Validating saved bounds against currently active display screens ensures safe recovery.

## When to Use
- When executing multi window state persistence in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Window State Management, JSON) cannot be provisioned.

## Supported Technologies
- Window State Management
- JSON
- Electron / Tauri
- Display API

## Example Use Cases
### Multi-Monitor Setup Recovery
Preserving exact user window placement across complex multi-monitor desk setups.

### Disconnect Safety Fallback
Preventing windows from opening invisible offscreen when users disconnect laptop external monitors.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Window State Management) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/mawie81/electron-window-state
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
