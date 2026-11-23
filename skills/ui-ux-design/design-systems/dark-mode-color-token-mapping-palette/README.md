# Dark Mode Color Token Mapping Palette

## Description
Maps semantic surface, border, and text tokens between light and dark themes to preserve visual depth. Use when implementing polished dark mode support across applications.

## Purpose
Dark mode is not simply inverting colors; black text on white becomes glaring white on pure black. Polished dark themes use elevated grey surfaces (#121212 to #242424) and softened white text (87% opacity).

## When to Use
- When executing dark mode color token mapping palette in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Dark Mode, Semantic Tokens) cannot be provisioned.

## Supported Technologies
- Dark Mode
- Semantic Tokens
- Elevation & Surface Layers
- CSS Custom Properties

## Example Use Cases
### Developer IDE Web Application Dark Mode
Implementing a comfortable dark theme for code editors that preserves syntax token contrast without glare.

### Mobile Reading App Dark Theme Palette
Providing an OLED pure-black battery saver mode alongside a soft charcoal nighttime reading theme.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Dark Mode) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://m3.material.io/styles/color/advanced/dark-theme
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
