# Playwright Page Object Model Pom Architecture

## Description
Structures maintainable end-to-end test suites using the Page Object Model (POM) pattern in Playwright and TypeScript. Use when eliminating brittle test locators and code duplication.

## Purpose
Embedding raw CSS selectors directly in test files makes suites brittle to UI redesigns. POM encapsulates page UI elements and user interactions into dedicated, reusable TypeScript classes.

## When to Use
- When executing playwright page object model pom architecture in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, TypeScript) cannot be provisioned.

## Supported Technologies
- Playwright
- TypeScript
- Page Object Model (POM)
- E2E Testing

## Example Use Cases
### E-Commerce Multi-Step Checkout Suite
Automating multi-step cart, shipping, and payment flows with zero locator duplication across tests.

### Enterprise SaaS Admin Console Tests
Maintaining 200+ admin configuration tests resilient to underlying Tailwind CSS redesigns.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/pom
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
