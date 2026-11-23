# Dead Code Elimination Knip Ts Prune

## Description
Identifies unused exports, dead files, and unreferenced dependencies using Knip and ts-prune. Use when pruning bloated codebases and speeding up compilation times.

## Purpose
Dead code clutters repositories, confuses developers, and increases bundle sizes. Knip analyzes project ASTs to identify unused files, unused exports, duplicate types, and uninstalled npm packages.

## When to Use
- When executing dead code elimination knip ts prune in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Knip, ts-prune) cannot be provisioned.

## Supported Technologies
- Knip
- ts-prune
- Dead Code Elimination
- TypeScript

## Example Use Cases
### Legacy TypeScript Monorepo Cleanup
Deleting 15,000 lines of dead code and 20 abandoned npm packages to speed up TypeScript compiler build times.

### Frontend Webpack Bundle Reduction
Eliminating unused component exports to improve tree-shaking and reduce client JavaScript payload.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Knip) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/webpro-nl/knip
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
