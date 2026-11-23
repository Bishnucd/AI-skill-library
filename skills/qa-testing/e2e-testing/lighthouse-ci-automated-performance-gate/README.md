# Lighthouse Ci Automated Performance Gate

## Description
Enforces Core Web Vitals, performance budgets, and PWA scores in CI/CD using Lighthouse CI (LHCI). Use when preventing performance regressions from degrading search engine rankings.

## Purpose
Lighthouse CI runs headless browser audits on every pull request, measuring Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and JavaScript bundle budgets against strict thresholds.

## When to Use
- When executing lighthouse ci automated performance gate in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Lighthouse CI, Core Web Vitals) cannot be provisioned.

## Supported Technologies
- Lighthouse CI
- Core Web Vitals
- Performance Budgets
- CI/CD Automation

## Example Use Cases
### SEO Core Web Vitals Protection Gate
Preventing developers from adding bloated JavaScript trackers that degrade Google SEO ranking metrics.

### E-Commerce Mobile Page Load Speed Optimization
Enforcing that product detail pages maintain sub-2-second LCP on simulated slow 4G mobile connections.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Lighthouse CI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/GoogleChrome/lighthouse-ci
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
