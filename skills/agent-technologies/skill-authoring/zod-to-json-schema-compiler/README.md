# Zod To Json Schema Compiler

## Description
Compiles TypeScript Zod validation schemas into standardized JSON Schema Draft 2020-12 specifications. Use when exporting type-safe TypeScript interfaces to AI agent tool definitions.

## Purpose
TypeScript developers use Zod for runtime type checking. Compiling Zod schemas directly to JSON Schema ensures backend validation logic and agent tool parameter definitions stay perfectly synchronized.

## When to Use
- When executing zod to json schema compiler in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Zod, zod-to-json-schema) cannot be provisioned.

## Supported Technologies
- Zod
- zod-to-json-schema
- TypeScript
- JSON Schema

## Example Use Cases
### Full-Stack Type Synchronization
Sharing validation schemas between React forms, Node APIs, and AI agent tools.

### Automated Tool Spec Generation
Generating agent tool parameter schemas automatically from existing TypeScript domain code.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Zod) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/StefanTerdell/zod-to-json-schema
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
