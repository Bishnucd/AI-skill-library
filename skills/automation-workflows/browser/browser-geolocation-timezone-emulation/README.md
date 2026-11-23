# Browser Geolocation Timezone Emulation

## Description
Emulates device GPS coordinates, locale, timezone, and permissions in headless browser sessions. Use when testing localized web experiences and geofenced features.

## Purpose
Web applications deliver localized pricing, language, and content based on client coordinates. Headless emulation overrides device latitude, longitude, and timezone offsets deterministically.

## When to Use
- When executing browser geolocation timezone emulation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, Geolocation API) cannot be provisioned.

## Supported Technologies
- Playwright
- Geolocation API
- Timezone Emulation
- Node.js

## Example Use Cases
### Multi-Region E-commerce Verification
Testing that EU users see GDPR cookie banners and EUR currency pricing.

### Geofenced Content Delivery Testing
Verifying that regional media streaming sites restrict content based on simulated coordinates.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/emulation
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
