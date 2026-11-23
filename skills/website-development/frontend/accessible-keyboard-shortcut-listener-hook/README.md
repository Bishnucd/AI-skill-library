# Accessible Keyboard Shortcut Listener Hook

## Description
Implements global keyboard shortcut listeners (Cmd+K command palettes) with input element exclusion. Use when building productivity keyboard shortcuts without interfering with text inputs.

## Purpose
Global keyboard listeners often trigger accidentally when users type inside form inputs. A custom shortcut hook checks target elements (ignoring input, textarea) and supports modifier key chords.

## When to Use
- When executing accessible keyboard shortcut listener hook in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Keyboard Shortcuts, React Hooks) cannot be provisioned.

## Supported Technologies
- Keyboard Shortcuts
- React Hooks
- Command Palette (Cmd+K)
- Accessibility

## Example Use Cases
### Universal Cmd+K Command Palette Trigger
Allowing power users to launch universal navigation search from anywhere in the application.

### Keyboard-Driven Data Entry Shortcuts
Enabling Ctrl+S saving and Esc canceling without losing focus inside active table cells.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Keyboard Shortcuts) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
