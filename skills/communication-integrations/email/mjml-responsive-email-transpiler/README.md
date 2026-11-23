# Mjml Responsive Email Transpiler

## Description
Authors semantic, component-based email layouts in MJML and compiles them to bulletproof HTML. Use when building responsive email templates that render reliably across legacy Outlook.

## Purpose
Outlook desktop relies on the Microsoft Word HTML rendering engine, breaking modern CSS. MJML provides high-level tags (<mj-section>, <mj-column>) that compile to complex Outlook-compatible tables.

## When to Use
- When executing mjml responsive email transpiler in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (MJML CLI, Node.js) cannot be provisioned.

## Supported Technologies
- MJML CLI
- Node.js
- Responsive HTML Email
- Outlook VML

## Example Use Cases
### Bulletproof Outlook Email Rendering
Ensuring multi-column marketing newsletters render flawlessly on desktop Outlook 2016-2021.

### Rapid Email Template Prototyping
Writing clean 50-line MJML templates instead of 1,000 lines of brittle nested HTML tables.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (MJML CLI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://mjml.io/documentation/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
