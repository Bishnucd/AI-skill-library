# Web Scraping Infinite Scroll Drainer

## Description
Automates scroll-down interactions and dynamic DOM hydration to scrape infinite scroll feeds reliably. Use when extracting data from social feeds, product catalogs, and image galleries.

## Purpose
Infinite scroll pages load data dynamically upon window scroll events. A robust drainer scrolls smoothly, monitors network and DOM mutation stabilization, and handles bottom-of-feed triggers.

## When to Use
- When executing web scraping infinite scroll drainer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright, DOM MutationObserver) cannot be provisioned.

## Supported Technologies
- Playwright
- DOM MutationObserver
- Node.js
- JavaScript

## Example Use Cases
### Social Media Feed Scraping
Harvesting public discussions and hashtags from dynamically loading social platforms.

### Marketplace Catalog Extraction
Extracting product pricing and specifications from infinite-scrolling e-commerce stores.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/evaluating
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
