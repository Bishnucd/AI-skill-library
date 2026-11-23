# Playwright Tracing Debug Inspector

## Description
Records comprehensive execution traces with DOM snapshots, console logs, and action filmstrips in Playwright. Use when diagnosing intermittent or flaky test failures in CI.

## Purpose
Flaky test failures on headless CI servers are difficult to debug without visual context. Playwright tracing records live DOM snapshots, mouse clicks, and console logs into a viewable zip archive.

## When to Use
- When executing playwright tracing debug inspector in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright Trace Viewer, ZIP Archive) cannot be provisioned.

## Supported Technologies
- Playwright Trace Viewer
- ZIP Archive
- Chromium
- Node.js

## Example Use Cases
### Flaky CI Test Root Cause Analysis
Reviewing the exact visual filmstrip and console errors when a test intermittently fails.

### Action Timing Profiling
Measuring exact element attachment and hydration delays during page loading.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright Trace Viewer) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/trace-viewer
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
