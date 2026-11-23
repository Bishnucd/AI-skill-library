# Wcag 22 Contrast Auditing Color Tokens

## Description
Audits color tokens against WCAG 2.2 AA (4.5:1) and AAA (7:1) contrast ratios across light and dark modes. Use when guaranteeing accessible contrast for text and interactive controls.

## Purpose
Poor contrast makes text illegible for users with visual impairments. Automated contrast auditing calculates relative luminance ratios, ensuring body text achieves >= 4.5:1 and UI borders >= 3.0:1.

## When to Use
- When executing wcag 22 contrast auditing color tokens in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Color Contrast Math, WCAG 2.2 AA/AAA) cannot be provisioned.

## Supported Technologies
- Color Contrast Math
- WCAG 2.2 AA/AAA
- APCA
- Color Tokens

## Example Use Cases
### Design System Color Palette Accessible Certification
Verifying that all 30 semantic text colors meet WCAG AA contrast against their assigned surface backgrounds.

### Dark Mode Contrast Audit
Adjusting muted grey text tokens in dark mode to prevent contrast from dropping below accessible limits.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Color Contrast Math) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.w3.org/TR/WCAG22/#contrast-minimum
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
