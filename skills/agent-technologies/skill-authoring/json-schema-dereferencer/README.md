# Json Schema Dereferencer

## Description
Resolves and bundles remote, local, and circular $ref references in JSON Schema specifications. Use when compiling complex, modular schemas for agent tool parameter validation.

## Purpose
Complex schemas split across multiple files or sharing common definition models rely on $ref pointers. Resolving and dereferencing schemas into self-contained objects is essential for LLM tool calling.

## When to Use
- When executing json schema dereferencer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (@apidevtools/json-schema-ref-parser, Node.js) cannot be provisioned.

## Supported Technologies
- @apidevtools/json-schema-ref-parser
- Node.js
- JSON Schema
- TypeScript

## Example Use Cases
### Multi-File OpenAPI Bundling
Inlining external component models into unified tool parameter schemas.

### Agent Tool Registry Compilation
Resolving shared domain entity schemas across dozens of agent tool specs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (@apidevtools/json-schema-ref-parser) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/APIDevTools/json-schema-ref-parser
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
