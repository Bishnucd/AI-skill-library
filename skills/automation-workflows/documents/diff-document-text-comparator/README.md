# Diff Document Text Comparator

## Description
Computes character, word, and block-level text diffs between document revisions with HTML visual highlights. Use when auditing contract amendments and tracking document revision histories.

## Purpose
Tracking changes between contract drafts requires semantic diffing. Myers diff algorithms compute added, deleted, and modified word sequences, rendering styled redline comparisons.

## When to Use
- When executing diff document text comparator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python difflib, google-diff-match-patch) cannot be provisioned.

## Supported Technologies
- Python difflib
- google-diff-match-patch
- HTML Diff
- Markdown

## Example Use Cases
### Legal Contract Redline Auditing
Instantly identifying all clause additions and deletions between contract versions.

### Policy Document Revision Tracking
Highlighting regulatory changes in updated compliance policy manuals.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python difflib) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.python.org/3/library/difflib.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
