# Wcag Accessibility Contrast Auditing

## Description
Audits color contrast ratios, focus visible states, and semantic ARIA attributes per WCAG 2.2 AA standards. Use when verifying web application accessibility compliance.

## Purpose
Inaccessible websites alienate users with disabilities and invite legal risk. Auditing contrast ratios (4.5:1 text, 3:1 graphical elements), keyboard focus indicators, and screen reader labels ensures compliance.

## When to Use
- When executing wcag accessibility contrast auditing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (WCAG 2.2, axe-core) cannot be provisioned.

## Supported Technologies
- WCAG 2.2
- axe-core
- Color Contrast Analyser
- HTML/ARIA

## Example Use Cases
### Accessibility Compliance Audit
Preparing enterprise SaaS platforms for Section 508 and European Accessibility Act audits.

### Design System Token Hardening
Verifying all color palette pairings satisfy contrast rules across dark and light modes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (WCAG 2.2) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.w3.org/WAI/WCAG22/quickref/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
