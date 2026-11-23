# Academic Plagiarism Similarity Text Audit

## Description
Compares document texts against published web and academic corpora using n-gram overlap and semantic text matching. Use when verifying original authorship and detecting plagiarism.

## Purpose
Plagiarism detection decomposes text into sliding n-gram shingles, calculating Jaccard similarity and MinHash signatures against millions of indexed academic articles and web pages.

## When to Use
- When executing academic plagiarism similarity text audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Plagiarism Detection, N-Gram Overlap) cannot be provisioned.

## Supported Technologies
- Plagiarism Detection
- N-Gram Overlap
- String Similarity
- Text Forensics

## Example Use Cases
### Academic Thesis Submission Originality Screening
Screening doctoral dissertations to ensure all quoted external sources are properly attributed.

### Freelance Technical Article Originality Audit
Verifying that contracted blog articles were not copy-pasted from existing competitor websites.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Plagiarism Detection) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Plagiarism_detection
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
