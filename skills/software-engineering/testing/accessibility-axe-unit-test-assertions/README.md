# Accessibility Axe Unit Test Assertions

## Description
Asserts WCAG accessibility compliance on isolated React/Vue components in JSDOM using jest-axe. Use when catching accessibility violations early during component unit testing.

## Purpose
Catching accessibility issues in E2E tests is slow. jest-axe brings axe-core rules directly into Jest/Vitest unit tests, asserting that rendered component HTML has zero accessibility violations.

## When to Use
- When executing accessibility axe unit test assertions in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (jest-axe, Axe-Core) cannot be provisioned.

## Supported Technologies
- jest-axe
- Axe-Core
- Unit Testing
- Accessibility

## Example Use Cases
### Design System Button Component A11y Test
Verifying that icon-only buttons throw accessibility test errors if they lack an explicit aria-label.

### Custom Form Dropdown Accessibility Unit Test
Ensuring custom select dropdowns implement correct ARIA combobox and listbox role relationships.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (jest-axe) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/nickcolley/jest-axe
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
