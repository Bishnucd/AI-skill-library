# Axe Playwright Automated Accessibility Scanner

## Description
Automates WCAG 2.2 Level AA accessibility audits during Playwright end-to-end browser tests using axe-core. Use when preventing color contrast, ARIA, and focus trap accessibility regressions.

## Purpose
Accessibility compliance cannot rely purely on manual audits. axe-core scans live rendered DOM nodes during Playwright tests, detecting missing alt tags, poor color contrast, and invalid ARIA roles.

## When to Use
- When executing axe playwright automated accessibility scanner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (@axe-core/playwright, Axe-Core) cannot be provisioned.

## Supported Technologies
- @axe-core/playwright
- Axe-Core
- WCAG 2.2 AA
- Accessibility Testing

## Example Use Cases
### Government Section 508 Legal Compliance Gate
Ensuring every pull request meets federal accessibility standards before deployment.

### Design System Accessibility Enforcement
Preventing frontend engineers from merging modal dialogs that lack proper keyboard focus traps.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (@axe-core/playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
