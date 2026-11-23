# Shiki Syntax Highlighting Code Block

## Description
Renders syntax-highlighted code blocks at build time with TextMate grammars using Shiki. Use when generating beautiful, lightweight code snippets with zero client-side JavaScript.

## Purpose
Client-side highlighters (Prism.js) cause layout shifts and waste browser CPU. Shiki runs at build time, using identical TextMate grammars as VS Code to output static HTML with zero client JS.

## When to Use
- When executing shiki syntax highlighting code block in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Shiki, TextMate Grammars) cannot be provisioned.

## Supported Technologies
- Shiki
- TextMate Grammars
- Syntax Highlighting
- Static Site Generation

## Example Use Cases
### Developer Documentation Zero-JS Code Snippets
Rendering pristine syntax-highlighted code blocks in Next.js/Docusaurus with zero client bundle overhead.

### Technical Blog Post Code Visualizer
Highlighting code diffs with added and removed line styling matching VS Code editor themes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Shiki) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://shiki.style/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
