# Feature Prioritization Rice Matrix

## Description
Scores and ranks product backlog feature candidates using the RICE framework (Reach, Impact, Confidence, Effort). Use when prioritizing roadmap features objectively against competing requests.

## Purpose
Roadmap prioritization easily falls victim to the loudest executive voice. The RICE framework calculates an objective score ($Reach \times Impact \times Confidence / Effort$) to rank initiatives.

## When to Use
- When executing feature prioritization rice matrix in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (RICE Scoring, Spreadsheets) cannot be provisioned.

## Supported Technologies
- RICE Scoring
- Spreadsheets
- Roadmapping
- Markdown

## Example Use Cases
### Quarterly Roadmap Prioritization
Defending roadmap trade-offs to executive stakeholders with transparent numeric criteria.

### Backlog Triage
Quickly separating high-leverage quick-wins from low-impact engineering sinkholes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (RICE Scoring) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
