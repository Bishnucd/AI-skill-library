# W3c Design Tokens Community Group Spec

## Description
Authors standardized, platform-agnostic design tokens adhering to the W3C Design Tokens Community Group (DTCG) format. Use when creating interoperable design token architectures.

## Purpose
The W3C Design Tokens Community Group specifies a standard JSON format using $value, $type, and $description properties, allowing tokens to be shared between Figma, CSS, iOS, and Android.

## When to Use
- When executing w3c design tokens community group spec in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (W3C DTCG Format, Design Tokens) cannot be provisioned.

## Supported Technologies
- W3C DTCG Format
- Design Tokens
- JSON Schema
- Cross-Platform

## Example Use Cases
### Enterprise Cross-Platform Token Architecture
Maintaining a single source of truth for design tokens compiled to Web, iOS, and Android apps.

### Figma to Code Automated Token Sync
Syncing design tokens directly from Figma Variables into GitHub repositories in W3C DTCG JSON format.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (W3C DTCG Format) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://design-tokens.github.io/community-group/format/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
