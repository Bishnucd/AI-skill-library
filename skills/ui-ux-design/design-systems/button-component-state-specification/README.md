# Button Component State Specification

## Description
Specifies complete button component lifecycle states (default, hover, focus-visible, active, disabled, loading). Use when designing robust, accessible interactive components.

## Purpose
Incomplete component specifications lead to missing focus rings and jarring hover states. Specifying colors, borders, typography, and accessibility attributes for all 6 states ensures polish.

## When to Use
- When executing button component state specification in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Button States, Focus Visible) cannot be provisioned.

## Supported Technologies
- Button States
- Focus Visible
- Accessibility (ARIA)
- Component Specification

## Example Use Cases
### Enterprise Design System Core Button Spec
Documenting complete behavioral states for primary, secondary, outline, and destructive button variants.

### Keyboard Accessibility Navigation Polish
Ensuring visible focus indicators appear on Tab navigation while remaining hidden on mouse clicks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Button States) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.w3.org/WAI/ARIA/apg/patterns/button/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
