# Curl To Multi Language Code Snippet Generator

## Description
Converts raw curl HTTP commands into idiomatic Python, JavaScript, and Go SDK calls automatically. Use when enriching API documentation with copy-pasteable multi-language examples.

## Purpose
Developers prefer native language code over raw curl. Automated snippet generators parse curl commands, headers, and JSON bodies, compiling them into idiomatic requests in Python, Node, and Go.

## When to Use
- When executing curl to multi language code snippet generator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (curlconverter, Multi-Language Snippets) cannot be provisioned.

## Supported Technologies
- curlconverter
- Multi-Language Snippets
- API Documentation
- CLI Automation

## Example Use Cases
### Documentation Code Tab Automation
Generating 5 language tabs for 100 API endpoints automatically from single curl definitions.

### Interactive API Explorer Code Export
Allowing developers to export their configured sandbox test call into copyable Python code.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (curlconverter) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://curlconverter.com/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
