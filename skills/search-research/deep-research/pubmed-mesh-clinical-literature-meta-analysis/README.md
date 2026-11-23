# Pubmed Mesh Clinical Literature Meta Analysis

## Description
Formulates Medical Subject Headings (MeSH) search strings for systematic clinical literature reviews in PubMed. Use when synthesizing peer-reviewed medical evidence and clinical trial data.

## Purpose
Standard PubMed keyword searches miss relevant clinical studies. Structuring queries with controlled MeSH vocabularies, Boolean operators, and clinical trial filters ensures exhaustive evidence capture.

## When to Use
- When executing pubmed mesh clinical literature meta analysis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (PubMed, MeSH Terms) cannot be provisioned.

## Supported Technologies
- PubMed
- MeSH Terms
- Systematic Literature Review
- Evidence-Based Medicine

## Example Use Cases
### Pharmaceutical Clinical Efficacy Meta-Analysis
Synthesizing all randomized controlled trials comparing GLP-1 agonists against standard diabetic therapies.

### Medical Device Adverse Event Investigation
Reviewing published literature on surgical mesh failure rates to support regulatory compliance reports.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (PubMed) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pubmed.ncbi.nlm.nih.gov/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
