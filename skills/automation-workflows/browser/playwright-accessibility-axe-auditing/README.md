# Playwright Accessibility Axe Auditing

## Description
Executes automated accessibility (a11y) audits on rendered web views using axe-core and Playwright. Use when catching WCAG violations automatically during browser test runs.

## Purpose
Manual accessibility testing is slow. Injecting axe-core into Playwright pages analyzes the live rendered DOM tree, checking ARIA landmarks, contrast, and form labels in milliseconds.

## When to Use
- When executing playwright accessibility axe auditing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (@axe-core/playwright, Playwright) cannot be provisioned.

## Supported Technologies
- @axe-core/playwright
- Playwright
- WCAG 2.2
- TypeScript

## Example Use Cases
### Continuous A11y Testing in CI
Failing automated PR builds if new UI components introduce accessibility violations.

### Design System Component Audits
Scanning all design system documentation states for color contrast and label compliance.

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
