# Stealth Browser Fingerprint Mitigation

## Description
Configures Playwright and Puppeteer browser headers, navigator flags, and viewport states to avoid bot detection. Use when automating legitimate web workflows on sensitive platforms.

## Purpose
Standard automated browsers leak automation indicators (navigator.webdriver, headless user agents, missing WebGL vendor strings). Stealth configurations align browser fingerprints with real human browsers.

## When to Use
- When executing stealth browser fingerprint mitigation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, Puppeteer) cannot be provisioned.

## Supported Technologies
- Playwright
- Puppeteer
- JavaScript
- Node.js

## Example Use Cases
### Market Price Monitoring
Collecting competitive pricing data without triggering IP or fingerprint blocks.

### Automated Account Testing
Testing authentication user journeys on sites using aggressive bot heuristic checks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
