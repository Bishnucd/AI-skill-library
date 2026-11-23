# Court Docket Pacer Legal Record Verification

## Description
Retrieves and verifies federal court filings, dockets, and judicial orders directly from PACER and CourtListener. Use when confirming litigation status, settlements, and civil rulings.

## Purpose
Journalistic accounts of lawsuits frequently misstate legal rulings. Querying PACER and CourtListener APIs retrieves the original filed complaint, docket entries, and official judicial opinions.

## When to Use
- When executing court docket pacer legal record verification in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (CourtListener API, PACER) cannot be provisioned.

## Supported Technologies
- CourtListener API
- PACER
- Federal Court Dockets
- Legal Verification

## Example Use Cases
### Competitor Patent Litigation Status Verification
Verifying whether a competitor claimed patent injunction was actually granted or denied by federal judge.

### Corporate Class Action Settlement Audit
Confirming exact financial settlement terms and class member eligibility from official court docket filings.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (CourtListener API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.courtlistener.com/api/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
