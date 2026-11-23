# Scenic Green Pedestrian Routing Weighting

## Description
Calculates pleasant pedestrian routes prioritizing tree-lined parks, riverways, and low-noise streets over highways. Use when designing recreational walking and running route generators.

## Purpose
Pedestrians and runners prefer green, quiet streets over noisy car boulevards. Green routing penalizes road edges with high traffic noise and rewards paths through urban parks and waterways.

## When to Use
- When executing scenic green pedestrian routing weighting in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OpenRouteService (ORS), Green Routing) cannot be provisioned.

## Supported Technologies
- OpenRouteService (ORS)
- Green Routing
- Pedestrian Profiles
- OSM

## Example Use Cases
### Urban Running Route Generator
Generating scenic 5km and 10km circular running loops through city parks.

### Tourist Walking Itineraries
Guiding walking tourists along historic, pedestrianized streets rather than major roadways.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OpenRouteService (ORS)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://openrouteservice.org/dev/#/api-docs/v2/directions/{profile}/get
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
