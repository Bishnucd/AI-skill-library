# Ast Circular Dependency Detection Madge

## Description
Detects circular module dependencies and import cycles in JavaScript/TypeScript codebases using Madge. Use when preventing runtime initialization bugs and bundler chunk bloat.

## Purpose
Circular imports (Module A imports B, B imports A) cause undefined runtime imports and break bundler tree-shaking. Madge parses Abstract Syntax Trees (AST) to detect and visualize cycles.

## When to Use
- When executing ast circular dependency detection madge in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Madge, AST Analysis) cannot be provisioned.

## Supported Technologies
- Madge
- AST Analysis
- Circular Dependencies
- TypeScript / JavaScript

## Example Use Cases
### Frontend Monorepo Build Stabilization
Eliminating circular import cycles that caused mysterious webpack runtime undefined crashes.

### Tree-Shaking Bundle Size Optimization
Removing hidden import loops that prevented bundlers from tree-shaking unused library exports.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Madge) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/pahen/madge
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
