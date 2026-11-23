# Xml Xpath Schema Validation Lxml

## Description
Validates XML feeds against XSD schemas and queries deep nodes using XPath 2.0 via lxml. Use when processing structured government filings, invoices, and industry XML standards.

## Purpose
Industry interchange formats (UBL, XBRL, HL7) mandate strict XML. The high-performance C-based lxml library validates documents against official XSD schemas and executes fast XPath queries.

## When to Use
- When executing xml xpath schema validation lxml in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (lxml, XPath 2.0) cannot be provisioned.

## Supported Technologies
- lxml
- XPath 2.0
- XSD (XML Schema)
- Python

## Example Use Cases
### Electronic Invoicing (UBL/PEPPOL)
Validating B2B electronic invoices against European standard XML schemas.

### Financial XBRL SEC Filing Extraction
Querying specific GAAP balance sheet items from published SEC corporate 10-K XML filings.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (lxml) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://lxml.de/validation.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
