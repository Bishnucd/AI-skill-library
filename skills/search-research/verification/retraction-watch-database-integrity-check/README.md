# Retraction Watch Database Integrity Check

## Description
Screens scientific literature citations against the Retraction Watch database to avoid citing discredited research. Use when verifying the validity of scientific and medical claims.

## Purpose
Retracted scientific papers continue to be cited hundreds of times by unsuspecting researchers. Querying the Retraction Watch database verifies whether cited studies were retracted for fraud or error.

## When to Use
- When executing retraction watch database integrity check in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Retraction Watch Database, Scientific Integrity) cannot be provisioned.

## Supported Technologies
- Retraction Watch Database
- Scientific Integrity
- Academic Audit
- Citation Screening

## Example Use Cases
### Corporate R&D Scientific Citation Screening
Screening 200 foundational chemistry papers to ensure no research projects rely on fraudulent retracted data.

### Medical Device Grant Proposal Verification
Auditing grant literature bibliographies to guarantee 100% citation integrity before NIH submission.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Retraction Watch Database) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://retractionwatch.com/retraction-watch-database-user-guide/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
