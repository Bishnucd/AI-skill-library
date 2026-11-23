# Endpoint Reference Doc

## Description
Standardized template and writing instructions for creating production developer portal documentation for HTTP REST API endpoints.

## Purpose
Enables technical writers, developers, and autonomous agents to produce consistent, readable, and developer-tested API endpoint reference pages.

## When to Use
- Writing developer documentation for newly created API endpoints.
- Updating developer portals (Stripe-style, Mintlify, GitBook, Docusaurus) to match OpenAPI specs.
- Establishing standard documentation templates across engineering teams.

## When NOT to Use
- Writing high-level architectural overviews or conceptual guides (use system architecture docs).
- Writing SDK library code documentation (use docstrings / TSDoc).

## Supported Technologies
- Documentation engines: Mintlify, Docusaurus, ReadMe, Redoc, Stoplight, Markdown

## Dependencies
- Verified API endpoint specification or working prototype.

## Example Use Cases
### Use Case 1: Payment Intent Creation Endpoint
Documenting `POST /v1/payment_intents` with currency formatting requirements, customer ID lookups, webhooks lifecycle, and error code enumerations.

### Use Case 2: Batch Export API
Documenting an asynchronous report generation endpoint with polling headers and presigned download URL responses.

## Usage Instructions
1. Outline HTTP verb, URL path, and authentication prerequisites.
2. Structure query/body parameter tables with data types and validations.
3. Provide working cURL, Python, and TypeScript code snippets.
4. Show realistic success and error JSON response samples.

## Limitations
- Static documentation must be kept synchronized with code changes, ideally via automated CI checks against OpenAPI schemas.

## Source and Attribution
- **Original Source:** Google Developer Documentation Style Guide & Stripe API Reference Design
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
