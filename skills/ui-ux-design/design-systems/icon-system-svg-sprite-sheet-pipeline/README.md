# Icon System Svg Sprite Sheet Pipeline

## Description
Compiles scalable SVG icon sets into optimized SVG sprite sheets and tree-shakeable icon components. Use when delivering lightweight, scalable icon libraries in web applications.

## Purpose
Icon fonts suffer from anti-aliasing blur and FOIT. SVG sprite sheets provide crisp vector rendering, instant caching, and zero render blocking using the <svg><use href="#icon-id"/></svg> pattern.

## When to Use
- When executing icon system svg sprite sheet pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SVG Sprite Sheets, SVG Optimization (SVGO)) cannot be provisioned.

## Supported Technologies
- SVG Sprite Sheets
- SVG Optimization (SVGO)
- Icon System
- Web Performance

## Example Use Cases
### Enterprise Web App Icon System Overhaul
Replacing a 2MB legacy icon font with a 45KB optimized SVG sprite sheet, improving First Contentful Paint.

### Design System SVG Icon React Component
Wrapping SVG sprite icons in a type-safe <Icon name="settings" size="md" /> React component.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SVG Sprite Sheets) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://css-tricks.com/svg-sprites-use-better-icon-fonts/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
