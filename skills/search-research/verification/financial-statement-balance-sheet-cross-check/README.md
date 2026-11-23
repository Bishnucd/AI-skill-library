# Financial Statement Balance Sheet Cross Check

## Description
Cross-checks income statements, balance sheets, and cash flow reconciliations for accounting inconsistencies and anomalies. Use when auditing financial statements for fraudulent accounting.

## Purpose
Financial manipulation leaves mathematical inconsistencies between statements. Cross-checking net income on income statement against operating cash flows exposes aggressive revenue recognition.

## When to Use
- When executing financial statement balance sheet cross check in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Financial Statement Analysis, Balance Sheet Reconciliation) cannot be provisioned.

## Supported Technologies
- Financial Statement Analysis
- Balance Sheet Reconciliation
- Forensic Accounting
- Audit

## Example Use Cases
### Investment Short Seller Fraud Detection
Exposing that a public company reported growing net income while operating cash flow collapsed to negative.

### Startup M&A Financial Book Due Diligence
Discovering unrecorded liabilities and capitalized operational expenses during pre-acquisition audit.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Financial Statement Analysis) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Financial_statement_analysis
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
