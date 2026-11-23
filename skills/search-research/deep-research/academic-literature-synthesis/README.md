# Academic Literature Synthesis

## Description
Synthesizes peer-reviewed academic literature across arXiv, PubMed, and IEEE Xplore into structured state-of-the-art reviews. Use when conducting scientific literature reviews and research summaries.

## Purpose
Scientific research requires surveying dozens of papers, identifying methodological shifts, comparing empirical benchmark results, and tracking citation lineages across research groups.

## When to Use
- When executing academic literature synthesis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Semantic Scholar API, arXiv API) cannot be provisioned.

## Supported Technologies
- Semantic Scholar API
- arXiv API
- BibTeX
- Markdown

## Example Use Cases
### AI Research Exploration
Summarizing recent advances in state-space models and sparse attention architectures.

### Technical Whitepaper Citations
Backing product claims with rigorous peer-reviewed scientific citations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Semantic Scholar API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.nature.com/articles/d41586-020-02638-3
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
