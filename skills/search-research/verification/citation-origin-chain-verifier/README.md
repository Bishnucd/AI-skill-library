# Citation Origin Chain Verifier

## Description
Audits bibliographic citations to verify link integrity, DOI persistence, and quote accuracy in referenced literature. Use when validating academic citations and technical documentation references.

## Purpose
Citations frequently suffer from link rot, circular quoting, and misattributed findings. Verifying DOI resolution and locating exact page numbers guarantees reference integrity.

## When to Use
- When executing citation origin chain verifier in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (DOI API, Crossref API) cannot be provisioned.

## Supported Technologies
- DOI API
- Crossref API
- URL Health Checking
- Python

## Example Use Cases
### Scientific Paper Submission Prep
Ensuring all bibliography entries resolve to valid DOIs prior to journal review.

### Legal Brief Citation Auditing
Verifying case law citations and court reporter volume/page accuracy.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (DOI API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.doi.org/the-identifier/what-is-a-doi/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
