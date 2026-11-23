# Docusaurus Docs As Code Pipeline

## Description
Configures modern docs-as-code documentation sites with MDX, search, and versioning using Docusaurus. Use when building and deploying developer documentation portals from markdown repos.

## Purpose
Docs-as-code treats documentation like software: stored in git, reviewed in pull requests, and compiled automatically. Docusaurus provides interactive MDX components, versioning, and instant search.

## When to Use
- When executing docusaurus docs as code pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Docusaurus v3, React / MDX) cannot be provisioned.

## Supported Technologies
- Docusaurus v3
- React / MDX
- Algolia DocSearch
- GitHub Pages

## Example Use Cases
### Open-Source Project Docs
Deploying beautiful, searchable documentation sites for open-source libraries.

### Internal Engineering Handbooks
Maintaining version-controlled engineering standards and architecture decision records.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Docusaurus v3) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docusaurus.io/docs
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
