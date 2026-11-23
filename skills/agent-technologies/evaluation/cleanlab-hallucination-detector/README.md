# Cleanlab Hallucination Detector

## Description
Detects untrustworthy responses and hallucinations in LLM outputs using Cleanlab Studio trust scores. Use when flagging low-confidence agent responses in enterprise workflows.

## Purpose
Cleanlab estimates prediction uncertainty and trustworthiness in generative model outputs, computing statistical trust scores to catch hallucinations before users see them.

## When to Use
- When executing cleanlab hallucination detector in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Cleanlab Studio) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Cleanlab Studio
- Scikit-Learn
- Pandas

## Example Use Cases
### Automated Human-in-the-Loop
Triggering human verification when agent financial advice falls below confidence thresholds.

### Knowledge Base Curation
Auditing documentation articles to remove conflicting or contradictory statements.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/cleanlab/cleanlab
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
