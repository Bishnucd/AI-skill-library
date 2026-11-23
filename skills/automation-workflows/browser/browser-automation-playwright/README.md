# browser-automation-playwright

## What it does

Writes Playwright tests and automations that use accessible locators, deterministic waits, and
full state cleanup. Captures screenshots, console errors, and failed requests on failure, and
diagnoses flaky tests instead of retrying them.

## Why it exists

Browser suites rot quickly: CSS selectors break on refactors, `waitForTimeout` masks races,
and tests leave records behind that break the next run. The result is a suite everyone
retries until it goes green, which means it no longer detects anything. The rules here target
those three causes directly.

## When to use

- End-to-end verification of a user journey.
- Reproducing a UI-only bug with evidence.
- Automating a repetitive browser task with no API.

## When not to use

- Load or performance testing.
- Scraping sites whose terms prohibit it.
- Anything you would need to bypass a CAPTCHA or authentication control to reach.
- Flows that have a stable API — call the API instead.

## Requirements

- Node.js and `@playwright/test`, with browsers installed.
- A non-production environment with test data.
- Permission to automate the target site.

## How to use

1. Name the journey and its success condition in user-visible terms.
2. The agent writes the spec with role-based locators and network-aware waits.
3. It adds a cleanup fixture and failure artefacts.
4. Run with retries at 0 to surface real flakes.
5. Fix any flake at its cause; the notes file records what was found.

## Example

```
Use browser-automation-playwright to cover checkout on http://localhost:3000.
```

Result: four specs, a cleanup fixture that removes the created order, trace-on-retry, and a
note that the confirmation assertion was racing the cart request.

## Limitations

- Cannot reach flows behind MFA or bot protection; those are marked manual.
- Visual assertions are limited to screenshots unless a visual-diff tool is added.
- Real-device browser behaviour (iOS Safari, Android Chrome) can differ from emulation.
- Does not test accessibility conformance; that needs a dedicated audit.

## Source and attribution

Originally authored for Community List. Locator priority follows Playwright's documented
best-practice guidance; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
