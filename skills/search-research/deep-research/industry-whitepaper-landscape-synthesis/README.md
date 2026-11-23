# Industry Whitepaper Landscape Synthesis

## Description
Deconstructs competing analyst whitepapers (Gartner, Forrester, IDC) into objective market landscape models. Use when cutting through vendor-sponsored marketing fluff to identify true technology trends.

## Purpose
Analyst reports often reflect vendor sponsorship and subjective scoring. Synthesizing multiple independent reports normalizes scoring methodologies to build an objective view of market capability.

## When to Use
- When executing industry whitepaper landscape synthesis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Analyst Synthesis, Market Landscape) cannot be provisioned.

## Supported Technologies
- Analyst Synthesis
- Market Landscape
- Competitive Intelligence
- Research Evaluation

## Example Use Cases
### Enterprise SIEM Vendor Selection Evaluation
Synthesizing Gartner, Forrester, and IDC reports to produce an objective vendor shortlist for an enterprise RFP.

### Cloud Observability Market Trajectory Mapping
Analyzing shifts in analyst quadrant positions over 3 consecutive years to predict market consolidation.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Analyst Synthesis) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.gartner.com/en/research/methodologies/magic-quadrant
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
