# Dom Mutation Observer Waiting Strategy

## Description
Awaits dynamic DOM changes and attribute modifications using MutationObserver rather than brittle fixed timeouts. Use when testing complex single-page apps with asynchronous animations.

## Purpose
Using fixed sleep delays (sleep(5000)) causes slow, flaky tests. Injecting MutationObserver promises awaits exact DOM subtree mutations or attribute changes with millisecond precision.

## When to Use
- When executing dom mutation observer waiting strategy in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (DOM MutationObserver, Playwright / Puppeteer) cannot be provisioned.

## Supported Technologies
- DOM MutationObserver
- Playwright / Puppeteer
- JavaScript
- Promises

## Example Use Cases
### Eliminating Test Flakiness
Replacing arbitrary 5-second sleep delays with deterministic DOM change event listeners.

### Async Component Hydration
Waiting for client-side JavaScript components to hydrate before triggering interactions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (DOM MutationObserver) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
