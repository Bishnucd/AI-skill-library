# Accessible Modal Dialog Focus Trap

## Description
Specifies accessible modal dialog behaviors with keyboard focus traps (Tab/Shift-Tab) and Escape dismissal. Use when implementing accessible overlay components conforming to WAI-ARIA.

## Purpose
Inaccessible modals let keyboard focus escape behind the overlay into the inactive page. WAI-ARIA modal patterns require trapping focus within the dialog and restoring focus to the trigger on close.

## When to Use
- When executing accessible modal dialog focus trap in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Modal Dialog, Focus Trap) cannot be provisioned.

## Supported Technologies
- Modal Dialog
- Focus Trap
- WAI-ARIA Pattern
- Keyboard Navigation

## Example Use Cases
### Critical Action Confirmation Dialog
Implementing an accessible "Delete Project" confirmation modal with complete keyboard focus trapping.

### Accessible Cookie Consent Banner
Ensuring keyboard users can navigate cookie preference dialogs without getting lost behind overlays.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Modal Dialog) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
