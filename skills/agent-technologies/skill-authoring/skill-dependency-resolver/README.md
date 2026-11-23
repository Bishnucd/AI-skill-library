# Skill Dependency Resolver

## Description
Validates and resolves environment dependencies, binaries, and prerequisite configurations for AI skills. Use when verifying host environment readiness before skill execution.

## Purpose
Agent skills frequently require host CLI tools (git, node, docker). A dependency resolver checks prerequisite binaries, versions, and environment variables before tool execution begins.

## When to Use
- When executing skill dependency resolver in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Bash / PowerShell, Node.js) cannot be provisioned.

## Supported Technologies
- Bash / PowerShell
- Node.js
- Python venv
- Docker

## Example Use Cases
### Agent Environment Preflight
Ensuring required CLI utilities are present before attempting compilation or container builds.

### Cross-Platform Tool Adapters
Detecting differences between Windows PowerShell and POSIX shells for agent commands.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Bash / PowerShell) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.npmjs.com/cli/v9
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
