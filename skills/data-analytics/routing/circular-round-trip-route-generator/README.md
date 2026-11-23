# Circular Round Trip Route Generator

## Description
Generates closed-loop circular running and cycling round-trips of specified target distance starting from an origin. Use when creating recreational loop routes for fitness and cycling apps.

## Purpose
Fitness users want a 25km cycling loop starting and ending at their front door. The algorithm picks random directional waypoints on a circle, routing a smooth closed loop matching target distance.

## When to Use
- When executing circular round trip route generator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OSRM / GraphHopper, Computational Geometry) cannot be provisioned.

## Supported Technologies
- OSRM / GraphHopper
- Computational Geometry
- Round Trip Generation
- Python

## Example Use Cases
### Cycling Training Loop Generator
Generating a fresh 40km Saturday morning cycling loop tailored to current wind direction.

### Tourist Walking Discovery Loops
Creating 3-mile self-guided circular walking tours exploring city attractions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OSRM / GraphHopper) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/Project-OSRM/osrm-backend/blob/master/docs/nodejs/api.md
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
