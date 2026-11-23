# Browser Screenshot Visual Diff

## Description
Captures full-page screenshots and detects pixel-level visual regressions across responsive viewport breakpoints. Use when validating UI layouts against unintended visual regressions.

## Purpose
Visual regression testing catches CSS layout breaks, font clipping, and responsive alignment errors that unit tests miss. Comparing rendered DOM snapshots against baseline images detects changes.

## When to Use
- When executing browser screenshot visual diff in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, pixelmatch) cannot be provisioned.

## Supported Technologies
- Playwright
- pixelmatch
- Node.js
- PNG

## Example Use Cases
### Design System Migration
Verifying that updating global CSS styles does not distort existing production views.

### Multi-Browser Parity Testing
Ensuring web layouts render identically across Chromium, Firefox, and WebKit.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/test-snapshots
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
