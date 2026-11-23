# Headless Browser Pdf Reporting

## Description
Generates pixel-perfect PDF reports from HTML templates using headless Chromium print-to-PDF APIs. Use when generating automated invoices, certificates, and multi-page documents.

## Purpose
Headless Chromium renders complete modern CSS (Grid, Flexbox, Web Fonts) before printing to PDF, providing far superior layout rendering compared to legacy PDF libraries.

## When to Use
- When executing headless browser pdf reporting in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Playwright / Puppeteer, CSS Paged Media) cannot be provisioned.

## Supported Technologies
- Playwright / Puppeteer
- CSS Paged Media
- Chromium
- PDF

## Example Use Cases
### Automated Invoice Generation
Compiling customer purchase orders into styled, branded PDF invoice documents.

### Executive Analytics PDF Export
Printing complex web dashboard analytics charts into clean multi-page executive PDFs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Playwright / Puppeteer) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://playwright.dev/docs/api/class-page#page-pdf
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
