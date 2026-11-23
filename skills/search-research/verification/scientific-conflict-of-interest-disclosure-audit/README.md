# Scientific Conflict Of Interest Disclosure Audit

## Description
Investigates author industry funding disclosures, corporate patent ownership, and sponsor grants to evaluate research bias. Use when evaluating scientific study objectivity.

## Purpose
Industry-funded studies are significantly more likely to report favorable outcomes. Auditing mandatory ICMJE conflict-of-interest disclosures, patent holdings, and industry consulting fees reveals hidden bias.

## When to Use
- When executing scientific conflict of interest disclosure audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Conflict of Interest (COI), Funding Disclosures) cannot be provisioned.

## Supported Technologies
- Conflict of Interest (COI)
- Funding Disclosures
- ICMJE Guidelines
- Research Integrity

## Example Use Cases
### Dietary Supplement Clinical Trial Evaluation
Revealing that a positive clinical trial for a nutritional supplement was funded entirely by the manufacturer.

### Medical Device Advisory Panel Screening
Screening expert academic panel members to ensure zero financial ties to competing device manufacturers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Conflict of Interest (COI)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.icmje.org/disclosure-of-interest/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
