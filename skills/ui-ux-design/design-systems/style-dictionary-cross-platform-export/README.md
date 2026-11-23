# Style Dictionary Cross Platform Export

## Description
Transforms design tokens into platform-specific variables (CSS, SCSS, Android XML, iOS Swift) using Style Dictionary. Use when automating design token compilation in multi-platform systems.

## Purpose
Style Dictionary parses token JSON files and compiles them into platform targets (CSS Custom Properties, SCSS variables, iOS Swift structs, Android XML resources) with custom value transforms.

## When to Use
- When executing style dictionary cross platform export in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Style Dictionary, Build Tool) cannot be provisioned.

## Supported Technologies
- Style Dictionary
- Build Tool
- CSS Variables / Swift / XML
- Design Tokens

## Example Use Cases
### Multi-Platform Design System Build Pipeline
Compiling 500 design tokens into CSS variables, Swift enums, and Android XML in 2 seconds.

### Theme Variant Compilation (Light/Dark/High-Contrast)
Building separate CSS variable files for default light, dark mode, and high-contrast accessibility themes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Style Dictionary) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://styledictionary.com/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
