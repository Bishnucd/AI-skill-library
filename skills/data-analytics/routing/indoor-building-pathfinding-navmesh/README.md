# Indoor Building Pathfinding Navmesh

## Description
Performs multi-floor indoor routing across corridors, stairs, elevators, and rooms using Navigation Meshes and A*. Use when building indoor navigation for airports, hospitals, and malls.

## Purpose
GPS fails indoors. Indoor routing models architectural floorplans as navigation meshes (NavMesh) and floor transition portals (elevators, stairs), computing shortest accessible routes across levels.

## When to Use
- When executing indoor building pathfinding navmesh in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (NavMesh, A* Search) cannot be provisioned.

## Supported Technologies
- NavMesh
- A* Search
- Indoor Mapping (IMDF)
- TypeScript

## Example Use Cases
### Hospital Patient Wayfinding
Guiding patients from parking garages to specific diagnostic clinic rooms across 5 hospital floors.

### Airport Gate Navigation
Directing travelers from security checkpoints to departure gates with estimated walking times.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (NavMesh) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Navigation_mesh
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
