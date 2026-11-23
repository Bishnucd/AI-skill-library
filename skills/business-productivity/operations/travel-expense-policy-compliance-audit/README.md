# Travel Expense Policy Compliance Audit

## Description
Audits corporate employee expense reports against corporate travel policies and IRS per-diem limits. Use when detecting non-compliant expense submissions and expense report fraud.

## Purpose
Manual expense auditing is slow and inconsistent. Automated validation rules check receipts against hotel nightly rate caps, airfare class policies, and meal per-diem limits.

## When to Use
- When executing travel expense policy compliance audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GSA Per Diem Rates, Expense Auditing) cannot be provisioned.

## Supported Technologies
- GSA Per Diem Rates
- Expense Auditing
- Python / Spreadsheets
- Rules Engine

## Example Use Cases
### Corporate Expense Triage
Automatically approving 90% of compliant employee expense reports in minutes.

### Travel Budget Overrun Prevention
Preventing bookings that exceed corporate hotel and flight tier thresholds.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GSA Per Diem Rates) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.gsa.gov/travel/plan-book/per-diem-rates
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
