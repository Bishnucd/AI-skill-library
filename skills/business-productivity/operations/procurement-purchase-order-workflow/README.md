# Procurement Purchase Order Workflow

## Description
Structures Purchase Requisition (PR) to Purchase Order (PO) approval matrices and three-way matching. Use when managing corporate procurement spend and accounts payable validation.

## Purpose
Unchecked spending drains corporate cash flow. A formal procurement workflow requires purchase requisitions with tiered managerial approvals, formal PO issuance, and three-way matching before invoice payment.

## When to Use
- When executing procurement purchase order workflow in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (CIPS Framework, Three-Way Matching) cannot be provisioned.

## Supported Technologies
- CIPS Framework
- Three-Way Matching
- Procurement
- Markdown

## Example Use Cases
### Corporate Spend Control
Ensuring all software and hardware purchases receive financial department sign-off before purchase.

### Invoice Payment Authorization
Preventing invoice fraud by refusing payment on invoices lacking valid matching POs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (CIPS Framework) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.cips.org/knowledge/procurement-topics-and-tools/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
