# Sec Edgar 10k Financial Filing Extraction

## Description
Extracts Item 1A (Risk Factors), MD&A, and consolidated financials from SEC EDGAR 10-K/10-Q corporate filings. Use when performing deep competitive financial analysis and regulatory risk audits.

## Purpose
SEC EDGAR filings provide audited corporate disclosures. Systematically extracting Item 1 (Business), Item 1A (Risk Factors), and Item 7 (MD&A) reveals hidden competitive risks and financial trajectories.

## When to Use
- When executing sec edgar 10k financial filing extraction in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SEC EDGAR, 10-K / 10-Q Filings) cannot be provisioned.

## Supported Technologies
- SEC EDGAR
- 10-K / 10-Q Filings
- Financial Analysis
- Python / sec-edgar-downloader

## Example Use Cases
### Competitor Cyber Risk Exposure Audit
Analyzing SEC 10-K Item 1A disclosures to identify competitor exposure to semiconductor supply chain risks.

### Pre-Acquisition Financial Due Diligence
Reviewing 5 years of historical 10-K filings to verify organic revenue growth vs debt-funded acquisitions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SEC EDGAR) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.sec.gov/edgar/searchedgar/companysearch
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
