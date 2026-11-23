# Corporate Registry Opencorporates Verification

## Description
Verifies company incorporation status, beneficial ownership, and registered directors across OpenCorporates and state registries. Use when performing corporate due diligence and fraud audits.

## Purpose
Fraudulent shell companies boast slick websites while lacking legal corporate existence. Querying government company registries verifies official incorporation dates, active standing, and director identities.

## When to Use
- When executing corporate registry opencorporates verification in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OpenCorporates API, Corporate Registries) cannot be provisioned.

## Supported Technologies
- OpenCorporates API
- Corporate Registries
- Beneficial Ownership
- Due Diligence

## Example Use Cases
### Vendor Procurement Anti-Fraud Audit
Confirming that a new multi-million dollar software supplier is an active legal entity with legitimate corporate officers.

### Offshore Shell Company Investigation
Tracing beneficial ownership of real estate holding entities across Caribbean corporate registers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OpenCorporates API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://api.opencorporates.com/documentation/REST-API-introduction
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
