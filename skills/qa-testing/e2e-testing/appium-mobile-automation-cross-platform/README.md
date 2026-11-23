# Appium Mobile Automation Cross Platform

## Description
Automates native and hybrid iOS and Android mobile app workflows using Appium 2.x and WebDriverIO. Use when executing automated mobile regressions across physical devices and emulators.

## Purpose
Appium bridges standard W3C WebDriver protocols to native iOS XCUITest and Android UiAutomator2 drivers, enabling cross-platform mobile automated test execution with unified test scripts.

## When to Use
- When executing appium mobile automation cross platform in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Appium 2.x, WebDriverIO) cannot be provisioned.

## Supported Technologies
- Appium 2.x
- WebDriverIO
- iOS / Android Automation
- Mobile QA

## Example Use Cases
### Mobile Banking Biometric Login Automation
Simulating biometric Touch ID and Face ID authentication pass/fail scenarios on iOS simulators.

### Cross-Platform React Native App Smoke Tests
Running identical checkout regression suites simultaneously across iPhone and Pixel devices.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Appium 2.x) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://appium.io/docs/en/latest/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
