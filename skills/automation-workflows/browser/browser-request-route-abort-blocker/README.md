# Browser Request Route Abort Blocker

## Description
Blocks heavy third-party assets (images, fonts, analytics, ads) using route interception to accelerate page loads. Use when scraping text data quickly with minimal bandwidth consumption.

## Purpose
Loading heavy video files, third-party trackers, and web fonts slows down web scraping by 5-10x. Aborting image and media requests at the network layer slashes scraping time and data transfer costs.

## When to Use
- When executing browser request route abort blocker in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, page.route()) cannot be provisioned.

## Supported Technologies
- Playwright
- page.route()
- Network Optimization
- Node.js

## Example Use Cases
### High-Speed Web Scraping
Increasing data extraction speed by 400% by discarding images and decorative media.

### Bandwidth-Constrained Scraping
Minimizing data consumption when running scrapers on cloud proxies with per-GB pricing.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/network#abort-requests
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
