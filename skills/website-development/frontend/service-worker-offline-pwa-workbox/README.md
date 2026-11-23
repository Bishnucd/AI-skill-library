# Service Worker Offline Pwa Workbox

## Description
Configures offline Progressive Web App (PWA) asset caching and background sync with Google Workbox. Use when building offline-first web applications that load instantly.

## Purpose
Workbox simplifies service worker routing and caching strategies (StaleWhileRevalidate, CacheFirst, NetworkFirst), enabling web apps to work reliably without internet connectivity.

## When to Use
- When executing service worker offline pwa workbox in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Google Workbox, Service Worker) cannot be provisioned.

## Supported Technologies
- Google Workbox
- Service Worker
- PWA
- Offline Caching

## Example Use Cases
### Offline-First Field Data Collection App
Allowing utility inspectors to fill out inspection forms offline, auto-syncing when WiFi reconnects.

### Instant-Load News PWA
Serving previously cached news articles immediately from local cache on subway commutes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Google Workbox) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.chrome.com/docs/workbox
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
