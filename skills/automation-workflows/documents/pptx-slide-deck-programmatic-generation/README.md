# Pptx Slide Deck Programmatic Generation

## Description
Generates branded PowerPoint PPTX presentation decks with dynamic charts, tables, and shapes using python-pptx. Use when automating recurring executive slide decks and reporting presentations.

## Purpose
Manually updating weekly executive slide decks wastes hours. Scripting PowerPoint generation from master slide layouts populates charts, tables, and text boxes directly from SQL metrics.

## When to Use
- When executing pptx slide deck programmatic generation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (python-pptx, Office Open XML) cannot be provisioned.

## Supported Technologies
- python-pptx
- Office Open XML
- Python 3.10+
- PowerPoint

## Example Use Cases
### Weekly Business Review Decks
Auto-generating 20-slide weekly executive performance decks every Monday morning.

### Personalized Sales Pitch Decks
Generating customized prospect presentations embedding client logos and industry stats.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (python-pptx) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://python-pptx.readthedocs.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
