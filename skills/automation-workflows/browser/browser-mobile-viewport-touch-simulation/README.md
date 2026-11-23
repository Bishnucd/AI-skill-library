# Browser Mobile Viewport Touch Simulation

## Description
Emulates mobile screen viewports, device pixel ratios, and touch events in Chromium. Use when testing mobile web layouts, responsive menus, and pinch-to-zoom interactions.

## Purpose
Desktop mouse clicks do not trigger touchstart and touchend handlers. Configuring mobile device profiles (e.g. iPhone 14) emulates high-DPI viewports and real multi-touch gestures.

## When to Use
- When executing browser mobile viewport touch simulation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, Touch Emulation) cannot be provisioned.

## Supported Technologies
- Playwright
- Touch Emulation
- Mobile Viewports
- Node.js

## Example Use Cases
### Mobile Hamburger Menu Testing
Verifying mobile drawer navigation opens and traps focus properly on smartphones.

### Swipeable Carousel Interaction
Testing mobile touch swipes on image carousels and product galleries.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/emulation#devices
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
