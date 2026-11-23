# Json Ld Structured Data Validator

## Description
Validates and injects Schema.org JSON-LD structured data into HTML documents for Google Rich Results. Use when optimizing web document metadata for search engine indexing.

## Purpose
Search engines rely on JSON-LD script tags to display rich snippets (breadcrumbs, reviews, FAQs). Validating schemas against Schema.org models ensures eligibility for enhanced search placement.

## When to Use
- When executing json ld structured data validator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (JSON-LD, Schema.org) cannot be provisioned.

## Supported Technologies
- JSON-LD
- Schema.org
- Search Console API
- JSON

## Example Use Cases
### Product Rich Snippet Optimization
Enabling star ratings, pricing, and stock availability directly on Google search results.

### Technical Article Metadata
Tagging developer guides with author, publish date, and step-by-step HowTo schemas.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (JSON-LD) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://schema.org/docs/documents.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
