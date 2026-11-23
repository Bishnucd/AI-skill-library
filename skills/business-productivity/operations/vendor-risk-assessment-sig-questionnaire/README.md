# Vendor Risk Assessment Sig Questionnaire

## Description
Conducts vendor risk assessments using Standardized Information Gathering (SIG) questionnaires. Use when evaluating third-party SaaS security posture prior to procurement.

## Purpose
Third-party SaaS vendors represent a massive supply chain risk. Standardized Information Gathering (SIG) evaluates vendor encryption, access control, backup policies, and penetration test cadence.

## When to Use
- When executing vendor risk assessment sig questionnaire in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Shared Assessments SIG, Vendor Risk Management) cannot be provisioned.

## Supported Technologies
- Shared Assessments SIG
- Vendor Risk Management
- Spreadsheets
- Markdown

## Example Use Cases
### Procurement Security Review
Vetting cloud CRM vendors before allowing access to corporate customer data.

### Annual Vendor Re-assessment
Ensuring existing critical software suppliers maintain required security certifications.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Shared Assessments SIG) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://sharedassessments.org/sig/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
