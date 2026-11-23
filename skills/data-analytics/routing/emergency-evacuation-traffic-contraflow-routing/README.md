# Emergency Evacuation Traffic Contraflow Routing

## Description
Models mass civilian evacuation clearance times and dynamic highway lane contraflow during natural disasters. Use when planning hurricane, wildfire, and tsunami evacuation operations.

## Purpose
Disaster evacuations overwhelm highways. Modeling evacuation demand and reversing inbound highway lanes into outbound traffic (contraflow) maximizes vehicle egress capacity and saves lives.

## When to Use
- When executing emergency evacuation traffic contraflow routing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Evacuation Traffic Modeling, SUMO Simulator) cannot be provisioned.

## Supported Technologies
- Evacuation Traffic Modeling
- SUMO Simulator
- Contraflow
- Disaster Planning

## Example Use Cases
### Hurricane Evacuation Route Clearance
Determining exact mandatory evacuation order trigger times prior to hurricane storm surges.

### Wildfire Community Egress Planning
Modeling neighborhood evacuation bottlenecks for mountain communities with single exit roads.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Evacuation Traffic Modeling) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.fema.gov/emergency-managers/national-preparedness/plan
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
