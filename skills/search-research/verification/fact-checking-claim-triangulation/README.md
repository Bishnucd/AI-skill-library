# Fact Checking Claim Triangulation

## Description
Verifies factual claims by cross-referencing multiple independent primary sources and evaluating corroboration. Use when fact-checking critical claims, metrics, and news reports.

## Purpose
Relying on a single secondary source risks propagating misinformation. Rigorous fact-checking requires triangulating claims across at least two independent primary origin records.

## When to Use
- When executing fact checking claim triangulation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Primary Source Verification, OSINT) cannot be provisioned.

## Supported Technologies
- Primary Source Verification
- OSINT
- Fact-Checking Guidelines
- Markdown

## Example Use Cases
### Editorial Pre-Publication Check
Verifying factual figures and corporate quotes before releasing investigative reports.

### AI Claim Grounding
Auditing LLM-generated market statistics against official government or financial filings.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Primary Source Verification) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.poynter.org/ifcn/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
