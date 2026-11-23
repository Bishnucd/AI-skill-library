# D3 Force Directed Graph Layout

## Description
Implements interactive force-directed network graph layouts using D3.js physics simulations. Use when visualizing relational networks, knowledge graphs, and complex entity connections.

## Purpose
Relational data (social networks, citation trees, package dependencies) requires dynamic spatial layout. D3-force simulates particle physics (link attraction, charge repulsion, collision avoidance).

## When to Use
- When executing d3 force directed graph layout in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (D3.js, JavaScript / TypeScript) cannot be provisioned.

## Supported Technologies
- D3.js
- JavaScript / TypeScript
- SVG / Canvas
- Web Workers

## Example Use Cases
### Knowledge Graph Explorer
Interactively navigating entity relationships in enterprise knowledge graphs.

### Dependency Vulnerability Visualizer
Displaying deep transitive package dependency chains and blast radiuses.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (D3.js) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://d3js.org/d3-force
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
