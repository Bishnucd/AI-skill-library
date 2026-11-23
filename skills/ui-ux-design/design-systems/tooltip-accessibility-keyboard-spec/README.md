# Tooltip Accessibility Keyboard Spec

## Description
Designs accessible tooltips that support keyboard focus, dismiss on Escape, and avoid covering target elements. Use when providing contextual helper tooltips in web applications.

## Purpose
Tooltips that only show on mouse hover fail keyboard and mobile users. WAI-ARIA tooltips trigger on both :hover and :focus, dismiss on Escape, and do not vanish when the pointer moves onto the tooltip.

## When to Use
- When executing tooltip accessibility keyboard spec in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Tooltip Pattern, WAI-ARIA APG) cannot be provisioned.

## Supported Technologies
- Tooltip Pattern
- WAI-ARIA APG
- Keyboard Accessibility
- Popper / Floating UI

## Example Use Cases
### Icon-Only Action Button Tooltips
Providing keyboard-accessible text labels when hovering or tabbing to icon-only toolbar buttons.

### Form Input Information Help Tooltip
Displaying contextual explanation popups without obstructing surrounding form input fields.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Tooltip Pattern) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
