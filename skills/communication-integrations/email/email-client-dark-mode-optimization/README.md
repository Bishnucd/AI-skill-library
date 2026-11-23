# Email Client Dark Mode Optimization

## Description
Implements CSS prefers-color-scheme media queries and meta tags for Apple Mail and Outlook dark modes. Use when preventing washed-out logos and illegible text in dark mode email clients.

## Purpose
Email clients invert background and text colors automatically, turning dark logos invisible on black backgrounds. Explicit dark mode CSS tags and translucent logo strokes ensure perfect readability.

## When to Use
- When executing email client dark mode optimization in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (prefers-color-scheme, HTML Email) cannot be provisioned.

## Supported Technologies
- prefers-color-scheme
- HTML Email
- CSS
- Dark Mode

## Example Use Cases
### Dark Mode Brand Consistency
Preventing corporate logos and charts from turning invisible when users view emails in dark mode.

### High-Contrast Text Readability
Guaranteeing that contrast ratios remain accessible regardless of client color inversion.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (prefers-color-scheme) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.litmus.com/blog/the-ultimate-guide-to-dark-mode-for-email-marketers
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
