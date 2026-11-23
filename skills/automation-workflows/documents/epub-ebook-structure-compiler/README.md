# Epub Ebook Structure Compiler

## Description
Compiles clean HTML/Markdown chapters, CSS styles, and metadata into validated EPUB 3 digital publication ebooks. Use when automating eBook generation and digital publishing pipelines.

## Purpose
EPUB 3 is the open standard for reflowable digital books. Compiling structured HTML chapters with spine manifests, navigation documents (toc.xhtml), and Dublin Core metadata ensures compatibility.

## When to Use
- When executing epub ebook structure compiler in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (EPUB 3, epubcheck) cannot be provisioned.

## Supported Technologies
- EPUB 3
- epubcheck
- Python ebooklib / Pandoc
- ZIP

## Example Use Cases
### Documentation eBook Compilation
Packaging entire product documentation libraries into downloadable offline EPUB books.

### Automated Book Publishing
Generating bookstore-ready EPUB files from continuous markdown authoring repos.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (EPUB 3) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.w3.org/publishing/epub3/epub-overview.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
