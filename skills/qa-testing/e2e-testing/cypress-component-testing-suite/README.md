# Cypress Component Testing Suite

## Description
Implements isolated frontend UI component tests in real browser environments using Cypress Component Testing. Use when validating complex UI components without launching full backend stacks.

## Purpose
Unit tests with jsdom lack real CSS layout rendering. Cypress Component Testing mounts individual components inside real browser viewports, verifying styling, interactions, and events in isolation.

## When to Use
- When executing cypress component testing suite in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Cypress, React / Vue) cannot be provisioned.

## Supported Technologies
- Cypress
- React / Vue
- TypeScript
- Vite / Webpack

## Example Use Cases
### Design System Component Verification
Testing isolated modal, dropdown, and data-table components across edge-case states.

### Rapid UI Development
Developing complex interactive UI widgets with hot-reloading browser component feedback.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Cypress) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.cypress.io/guides/component-testing/overview
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
