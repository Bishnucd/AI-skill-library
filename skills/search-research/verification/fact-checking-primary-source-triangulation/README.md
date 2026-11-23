# Fact Checking Primary Source Triangulation

## Description
Triangulates dubious claims against three independent, authoritative primary records before public verification. Use when preventing the spread of secondary-source reporting errors.

## Purpose
Multiple news outlets repeating the same unverified wire report creates an illusion of consensus. Triangulation traces claims back to the root source, verifying against 3 independent primary documents.

## When to Use
- When executing fact checking primary source triangulation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Fact-Checking, Source Triangulation) cannot be provisioned.

## Supported Technologies
- Fact-Checking
- Source Triangulation
- Primary Evidence
- Journalistic Verification

## Example Use Cases
### Financial Earnings Rumor Verification
Refusing to publish unverified blog rumors until confirmed against SEC filings and audited earnings call transcripts.

### Government Policy Change Fact-Check
Verifying claimed regulatory changes against published executive orders and agency register notices.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Fact-Checking) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Triangulation_(social_science)
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
