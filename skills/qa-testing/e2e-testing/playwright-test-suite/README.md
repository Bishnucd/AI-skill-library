# Playwright Test Suite

## Description
Comprehensive guide and skill for designing, implementing, and maintaining automated end-to-end browser test suites with Microsoft Playwright.

## Purpose
Enables QA engineers and software agents to build flake-free, fast, and maintainable browser automation suites that validate critical user journeys in modern web applications.

## When to Use
- Writing automated acceptance and regression tests for modern Single Page Applications (React, Vue, Svelte, Angular, Next.js).
- Testing complex browser workflows involving file uploads, multiple tabs, clipboard access, or geolocation.
- Running cross-browser compatibility tests in CI pipelines.

## When NOT to Use
- Pure unit testing of business logic functions or utility calculations (use Vitest or Jest).
- Backend API contract testing that does not involve UI rendering.

## Supported Technologies
- Playwright Test Runner (TypeScript, JavaScript, Python)
- Browsers: Chromium, Firefox, WebKit, Mobile Viewports

## Dependencies
- Node.js 18+ with `@playwright/test` installed and browser binaries downloaded (`npx playwright install --with-deps`).

## Example Use Cases
### Use Case 1: Complete User Checkout Journey
Testing user registration, adding an item to the shopping bag, applying a promotional coupon, and reaching the order confirmation summary.

### Use Case 2: Multi-Factor Authentication Redirection
Validating that unauthenticated requests redirect to `/login` and return back to the deep-linked dashboard URL following verification.

## Usage Instructions
1. Initialize test runner with `npx init playwright@latest`.
2. Model target pages with Page Object classes.
3. Write test specifications using `getByRole` locators and web-first assertions.
4. Execute tests locally with `npx playwright test --ui` and configure CI reporters.

## Limitations
- E2E tests are compute-heavy and slower than unit tests; should sit atop a robust unit and integration testing pyramid.

## Source and Attribution
- **Original Source:** Microsoft Playwright Official Documentation and Engineering Best Practices
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
