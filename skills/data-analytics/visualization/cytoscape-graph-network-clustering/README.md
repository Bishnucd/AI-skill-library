# Cytoscape Graph Network Clustering

## Description
Visualizes large interconnected network graphs and detects community clusters using Cytoscape.js. Use when analyzing social networks, fraud rings, or knowledge graphs.

## Purpose
Cytoscape.js is a graph theory analysis and visualization library capable of rendering complex node-edge graphs with CoSE physics layouts and community clustering algorithms.

## When to Use
- When executing cytoscape graph network clustering in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Cytoscape.js, Force-Directed Layout) cannot be provisioned.

## Supported Technologies
- Cytoscape.js
- Force-Directed Layout
- Graph Theory
- JavaScript

## Example Use Cases
### Anti-Money Laundering Mule Detection
Visualizing circular fund routing between shell company accounts and suspicious nodes.

### Corporate Org Chart & Influence Mapping
Mapping cross-departmental collaboration networks from email communication graphs.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Cytoscape.js) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://js.cytoscape.org/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
