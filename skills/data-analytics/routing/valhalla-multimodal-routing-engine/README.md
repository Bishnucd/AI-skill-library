# Valhalla Multimodal Routing Engine

## Description
Calculates multimodal routes (pedestrian, transit, auto, bicycle) using open-source Valhalla routing engine. Use when building turn-by-turn routing with dynamic transit schedules.

## Purpose
Valhalla is an open-source routing engine designed for OpenStreetMap tile hierarchies, supporting true multimodal routing combining walking, buses, subways, and driving with elevation costs.

## When to Use
- When executing valhalla multimodal routing engine in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Valhalla, OpenStreetMap) cannot be provisioned.

## Supported Technologies
- Valhalla
- OpenStreetMap
- C++ / REST
- Transit Routing

## Example Use Cases
### Public Transit Navigation
Guiding commuters through subway transfers and walking legs in metropolitan areas.

### Bicycle Route Optimization
Selecting bike routes that prioritize designated bike lanes while avoiding steep hill gradients.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Valhalla) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://valhalla.github.io/valhalla/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
