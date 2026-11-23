# Percy Visual Regression Snapshot Testing

## Description
Captures DOM snapshots across responsive viewports and detects pixel differences using Percy visual testing. Use when catching unintended CSS layout breaks and visual styling regressions.

## Purpose
Unit tests miss broken CSS layouts. Percy captures the raw DOM and asset state during test runs, rendering identical pages in the cloud across multiple browsers and viewports to highlight pixel changes.

## When to Use
- When executing percy visual regression snapshot testing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Percy (BrowserStack), Visual Regression) cannot be provisioned.

## Supported Technologies
- Percy (BrowserStack)
- Visual Regression
- DOM Snapshotting
- CSS Auditing

## Example Use Cases
### Design System Component Visual Integrity
Preventing global CSS utility updates from accidentally breaking button padding across 40 pages.

### Marketing Landing Page Responsive Redesign
Catching overlapping typography and broken flexbox wraps on mobile viewports automatically.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Percy (BrowserStack)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.percy.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
