# Design Token Architecture

## Description
Architecture guidelines, formatting standards, and compiler workflows for establishing cross-platform design token systems based on the W3C Design Tokens Community Group specification.

## Purpose
Enables design system engineers, product designers, and AI agents to create a single source of truth for UI design attributes that automatically compiles into CSS, iOS Swift, and Android Jetpack Compose code.

## When to Use
- Establishing a new design system or migrating an existing component library to multi-brand or dark mode theming.
- Bridging the gap between Figma design variables and frontend engineering repositories.
- Enforcing WCAG 2.1 accessibility color contrast across an entire digital product suite.

## When NOT to Use
- Single-page prototype applications with no design system or theming requirements.
- Purely functional backend APIs with no user-facing visual interfaces.

## Supported Technologies
- Design Token Spec: W3C Design Tokens Community Group (DTCG)
- Tools: Style Dictionary, Tokens Studio for Figma, Token Transformer, Tailwind CSS

## Dependencies
- Node.js 18+ with `style-dictionary` installed.

## Example Use Cases
### Use Case 1: Multi-Theme Dark Mode Engine
Structuring semantic color tokens so that toggling `.dark` class flips semantic aliases from light neutral values to dark neutral values while preserving interactive brand hues.

### Use Case 2: Multi-Platform Brand Sync
Distributing a central JSON design token repository that auto-compiles to CSS variables for React, Swift structs for iOS, and Compose themes for Android via GitHub Actions.

## Usage Instructions
1. Structure tokens in JSON using the 3-tier taxonomy (Global, Semantic, Component).
2. Follow W3C `$value` and `$type` syntax.
3. Configure `config.json` for Style Dictionary.
4. Run `style-dictionary build` to generate target platform code.

## Limitations
- Token compilers require consistent naming conventions across designers and developers to avoid breaking references.

## Source and Attribution
- **Original Source:** W3C Design Tokens Community Group & Amazon Style Dictionary
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
