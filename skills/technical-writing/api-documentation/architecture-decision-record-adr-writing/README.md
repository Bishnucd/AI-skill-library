# Architecture Decision Record Adr Writing

## Description
Documents pivotal technical decisions, context, and consequences using Architecture Decision Records (ADRs). Use when preserving engineering rationale for future developers.

## Purpose
Code shows how software works; ADRs explain why it was built that way. Capturing Title, Status, Context, Decision, and Consequences preserves architectural knowledge across team turnover.

## When to Use
- When executing architecture decision record adr writing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (ADR, Architecture Documentation) cannot be provisioned.

## Supported Technologies
- ADR
- Architecture Documentation
- Technical Decision Records
- Markdown

## Example Use Cases
### Database Migration Architectural Record
Recording why the engineering team chose PostgreSQL over MongoDB for transactional consistency.

### Microservice Communication Protocol Selection
Documenting the architectural trade-offs that led to selecting gRPC over REST for internal services.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (ADR) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://adr.github.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
