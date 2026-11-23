# responsive-audit

## What it does

Sweeps a page across eight standard viewport widths plus 200% zoom, and reports concrete
responsive defects: horizontal overflow, undersized tap targets, text clipping, unsafe
viewport units, and layout shift. Each finding carries a reproduction width, the measured
value, a cause, and a minimal fix.

## Why it exists

Responsive bugs are usually found by accident on one device, then patched with a media
query that breaks something else. A fixed test matrix plus scripted measurement finds the
whole class of problems in one pass, and forces each finding to be reproducible instead of
anecdotal.

## When to use

- Before shipping any page or component that will be viewed on a phone.
- When a user reports "it looks broken on my phone" and you need specifics.
- When reviewing a shared layout component.

## When not to use

- A single known CSS bug with an obvious cause.
- Native mobile apps (use `store-release-readiness` instead).
- Performance-only work — use a Core Web Vitals skill.

## Requirements

- A running page, or screenshots at the test widths.
- Browser devtools, or Playwright/Puppeteer for scripted measurement.
- Permission to inspect the page.

## How to use

1. Provide the URL and the widths that matter (defaults to the standard matrix).
2. The agent runs the overflow and tap-target scripts and shows raw findings.
3. It groups findings into defects and assigns P0–P3.
4. It applies one fix at a time and re-runs the check.
5. It returns the summary, defect list, and anything it could not reproduce.

## Example

```
Use responsive-audit on http://localhost:3000/pricing at 320–1920.
```

Result: one P0 (drawer cannot be closed below 360px), three P1s including a pricing grid
that overflows at 320px, and the exact CSS change that fixes each.

## Limitations

- Emulation is not a real device: iOS Safari viewport behaviour and Android font boosting
  can differ. Findings are marked "emulated" unless confirmed on hardware.
- Cannot audit pages behind authentication without access.
- Does not test screen readers or keyboard order — that is an accessibility audit, not a
  responsive one.
- Layout-shift values depend on network conditions; treat CLS numbers as indicative.

## Source and attribution

Originally authored for Community List. The 44×44 tap-target guidance follows the WCAG 2.2
"Target Size (Minimum)" success criterion; the width matrix reflects common device logical
widths. No third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
