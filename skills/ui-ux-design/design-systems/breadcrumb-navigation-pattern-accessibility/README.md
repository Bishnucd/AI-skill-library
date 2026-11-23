# Breadcrumb Navigation Pattern Accessibility

## Description
Specifies accessible breadcrumb navigation hierarchies with Schema.org BreadcrumbList metadata. Use when structuring secondary navigation and boosting SEO search snippets.

## Purpose
Breadcrumbs help users understand their location in a site hierarchy. An accessible breadcrumb uses a <nav aria-label="Breadcrumb"> element, ordered lists, and aria-current="page" on the active item.

## When to Use
- When executing breadcrumb navigation pattern accessibility in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Breadcrumbs, WAI-ARIA Pattern) cannot be provisioned.

## Supported Technologies
- Breadcrumbs
- WAI-ARIA Pattern
- Schema.org JSON-LD
- Information Architecture

## Example Use Cases
### E-Commerce Deep Category Breadcrumbs
Displaying Home > Electronics > Audio > Headphones navigation with rich Google search result snippet previews.

### Documentation Deep Page Navigation
Helping developers orient themselves inside multi-level technical documentation hierarchies.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Breadcrumbs) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
