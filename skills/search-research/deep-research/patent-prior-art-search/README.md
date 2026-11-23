# Patent Prior Art Search

## Description
Executes patent classification searches across USPTO, EPO, and Google Patents using CPC and IPC taxonomies. Use when evaluating patentability, freedom-to-operate, or prior art validity.

## Purpose
Navigating patent literature requires structured queries combining Cooperative Patent Classification (CPC) codes with keyword synonyms and boolean operators to unearth obscure technical disclosures.

## When to Use
- When executing patent prior art search in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Cooperative Patent Classification (CPC), Google Patents) cannot be provisioned.

## Supported Technologies
- Cooperative Patent Classification (CPC)
- Google Patents
- Boolean Search
- Markdown

## Example Use Cases
### Patent Application Prep
Validating novel technical mechanisms prior to drafting provisional patent claims.

### Freedom-to-Operate Review
Checking whether a proposed software algorithm infringes active competitor patents.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Cooperative Patent Classification (CPC)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.uspto.gov/patents/search
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
