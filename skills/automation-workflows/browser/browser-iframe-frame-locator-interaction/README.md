# Browser Iframe Frame Locator Interaction

## Description
Traverses and interacts with cross-origin embedded iframes using Playwright frameLocator selectors. Use when automating interactions inside Stripe checkout sheets, reCAPTCHAs, and payment forms.

## Purpose
Embedded payment forms and third-party widgets live inside isolated iframes that normal CSS selectors cannot reach. frameLocator pierces iframe boundaries with auto-waiting and retry safety.

## When to Use
- When executing browser iframe frame locator interaction in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, FrameLocator) cannot be provisioned.

## Supported Technologies
- Playwright
- FrameLocator
- DOM
- TypeScript

## Example Use Cases
### Stripe Payment Element Testing
Automating credit card number entry inside hosted Stripe payment iframes.

### Third-Party Widget Automation
Testing customer interactions inside embedded support chat widgets and survey popups.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/frames
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
