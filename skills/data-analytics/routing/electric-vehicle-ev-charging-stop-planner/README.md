# Electric Vehicle Ev Charging Stop Planner

## Description
Plans long-distance electric vehicle routes optimizing battery consumption, charging station stops, and charging times. Use when routing EVs with range constraints and elevation awareness.

## Purpose
EV routing must model kilowatt-hour consumption based on vehicle aerodynamics, speed, elevation gain, and regenerative braking, inserting high-speed DC charging stops when battery reaches 15%.

## When to Use
- When executing electric vehicle ev charging stop planner in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (EV Routing, Battery Consumption Models) cannot be provisioned.

## Supported Technologies
- EV Routing
- Battery Consumption Models
- GraphHopper / OpenRouteService
- Python

## Example Use Cases
### Long-Distance EV Road Trip Planning
Routing electric cars across 1,000 miles with optimal 20-minute fast charging pauses.

### Electric Fleet Battery Management
Ensuring electric delivery vans complete daily delivery routes without depleting charge.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (EV Routing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/graphhopper/graphhopper/blob/master/docs/core/ev.md
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
