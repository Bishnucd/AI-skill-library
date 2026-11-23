# Atlas Declarative Schema Migration Hcl

## Description
Manages declarative database schemas and generates deterministic migration plans using Ariga Atlas and HCL. Use when applying modern declarative GitOps workflows to database DDL.

## Purpose
Atlas brings Terraform-like declarative principles to database management. Developers define desired schema states in HCL or SQL, and Atlas calculates the safest migration execution plan.

## When to Use
- When executing atlas declarative schema migration hcl in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Atlas (Ariga), HCL / Go) cannot be provisioned.

## Supported Technologies
- Atlas (Ariga)
- HCL / Go
- Declarative DDL
- Schema Diffing

## Example Use Cases
### Declarative PostgreSQL Schema GitOps
Maintaining entire PostgreSQL table and index definitions in version-controlled HCL repositories.

### Automated PR Schema Review Gates
Running Atlas lint in GitHub Actions to block pull requests containing unsafe table locks.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Atlas (Ariga)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://atlasgo.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
