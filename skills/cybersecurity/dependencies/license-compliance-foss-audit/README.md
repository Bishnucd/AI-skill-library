# License Compliance Foss Audit

## Description
Audits open-source software licenses across application dependencies to prevent viral copyleft GPL contamination. Use when verifying intellectual property and legal license compliance.

## Purpose
Accidental inclusion of AGPL or strong copyleft libraries can legally obligate commercial software to open its source code. Automated audits flag incompatible or non-permissive licenses.

## When to Use
- When executing license compliance foss audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (license-checker, Python / Node.js) cannot be provisioned.

## Supported Technologies
- license-checker
- Python / Node.js
- SPDX
- JSON

## Example Use Cases
### Commercial IP Protection
Ensuring proprietary enterprise software contains only permissive open-source licenses.

### M&A Due Diligence Audit
Producing clean third-party license reports for corporate acquisitions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (license-checker) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://spdx.org/licenses/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
