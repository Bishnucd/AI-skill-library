# Llamaparse Complex Document Extraction

## Description
Parses complex multi-column PDFs, financial tables, and embedded diagrams using vision-augmented LlamaParse. Use when standard OCR fails to preserve table structures and spatial hierarchies.

## Purpose
LlamaParse uses vision LLMs to parse complex PDF layouts, converting complex tables, embedded formulas, and multi-column magazine pages into clean, semantic Markdown.

## When to Use
- When executing llamaparse complex document extraction in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (LlamaParse, Multimodal Parsing) cannot be provisioned.

## Supported Technologies
- LlamaParse
- Multimodal Parsing
- PDF Layout Extraction
- Markdown

## Example Use Cases
### SEC 10-K Financial Statement Extraction
Accurately extracting balance sheet tables with nested row headers without column corruption.

### Scientific Paper Equation and Diagram Parsing
Converting PDF research papers with multi-column text and LaTeX math formulas into clean markdown.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (LlamaParse) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.llamaindex.ai/en/stable/llama_cloud/llama_parse/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
