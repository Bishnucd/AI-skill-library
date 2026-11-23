# Testcafe Browser Runner Zero Webdriver

## Description
Executes automated end-to-end web browser tests without WebDriver binaries using TestCafe. Use when configuring fast, zero-dependency browser testing in lightweight CI environments.

## Purpose
TestCafe communicates directly with browser windows via URL rewriting and client-side proxies, eliminating the need to install or maintain browser-specific WebDriver or ChromeDriver binaries.

## When to Use
- When executing testcafe browser runner zero webdriver in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (TestCafe, Node.js / TypeScript) cannot be provisioned.

## Supported Technologies
- TestCafe
- Node.js / TypeScript
- Zero-WebDriver
- Browser Automation

## Example Use Cases
### Zero-Config CI/CD Web Testing
Running full browser regressions inside minimal Alpine Linux Docker containers without Selenium drivers.

### Cross-Device Mobile Web Testing
Executing tests across local desktop browsers and remote mobile phone browsers via QR code connection.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (TestCafe) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://testcafe.io/documentation/402635/getting-started
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
