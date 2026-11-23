# Playwright Har Network Interception

## Description
Captures, analyzes, and mocks HTTP network requests and responses in Playwright using HAR files. Use when debugging network waterfalls or simulating backend API responses.

## Purpose
Automated browser tests often fail due to flaky third-party APIs. Playwright HAR recording captures live network traffic and replays it offline for fast, deterministic test runs.

## When to Use
- When executing playwright har network interception in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, HAR (HTTP Archive)) cannot be provisioned.

## Supported Technologies
- Playwright
- HAR (HTTP Archive)
- TypeScript
- Node.js

## Example Use Cases
### Offline Test Suite Execution
Running hundreds of end-to-end browser tests without internet access using mocked HAR files.

### API Failure Simulation
Modifying HAR responses to simulate 500 server crashes and gateway timeouts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/network
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
