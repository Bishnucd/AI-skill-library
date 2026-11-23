# Mermaid Diagram Architecture Flow

## Description
Generates text-based system architecture and sequence diagrams using Mermaid syntax. Use when rendering technical architecture diagrams inside markdown documentation.

## Purpose
Mermaid is a JavaScript-based diagramming tool that parses Markdown-like text definitions to dynamically render SVG flowcharts, sequence diagrams, and class hierarchies.

## When to Use
- When executing mermaid diagram architecture flow in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Mermaid.js, Markdown) cannot be provisioned.

## Supported Technologies
- Mermaid.js
- Markdown
- Architecture Diagrams
- Documentation

## Example Use Cases
### Microservice Authentication Flow
Documenting OAuth2 authorization code grant exchanges between browser, API, and IdP.

### Database Entity Relationship Schema
Diagramming relational foreign key linkages and cardinality across core database tables.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Mermaid.js) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://mermaid.js.org/intro/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
