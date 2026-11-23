# Supply Chain Vendor Dependency Mapping

## Description
Maps multi-tier supplier dependencies, raw material single points of failure, and geopolitical trade risks. Use when assessing supply chain vulnerability and business continuity.

## Purpose
Disruptions occur at Tier 2 and Tier 3 suppliers that companies don't directly monitor. Deconstructing bills of materials (BOM) maps physical and logical dependencies back to raw source origins.

## When to Use
- When executing supply chain vendor dependency mapping in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Supply Chain Mapping, Single Point of Failure (SPOF)) cannot be provisioned.

## Supported Technologies
- Supply Chain Mapping
- Single Point of Failure (SPOF)
- Risk Management
- BOM Analysis

## Example Use Cases
### Electric Vehicle Battery Raw Material Audit
Mapping lithium, cobalt, and nickel refining dependencies across international processing hubs.

### Aerospace Avionics Microchip Dual-Sourcing
Identifying single-foundry microcontrollers across avionics systems to establish qualified second sources.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Supply Chain Mapping) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Supply_chain_risk_management
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
