# Service Worker Cache Inspection

## Description
Inspects and clears Progressive Web App (PWA) Service Workers and CacheStorage caches in headless browsers. Use when testing offline PWA functionality and cache invalidation policies.

## Purpose
Progressive Web Apps cache assets aggressively. Inspecting Service Worker registration status and CacheStorage entries ensures users receive updated assets upon deployment.

## When to Use
- When executing service worker cache inspection in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Service Workers, CacheStorage) cannot be provisioned.

## Supported Technologies
- Service Workers
- CacheStorage
- Playwright
- PWA

## Example Use Cases
### PWA Offline Mode Auditing
Verifying that web apps continue functioning when mobile devices lose cell reception.

### Cache Invalidation Verification
Confirming that new production deployments trigger service worker updates.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Service Workers) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
