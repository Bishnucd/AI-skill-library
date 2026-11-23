# Turn By Turn Navigation Formatter

## Description
Parses road geometry and routing graph maneuvers into human-readable turn-by-turn navigational directions. Use when formatting GPS routing itineraries for mobile drivers.

## Purpose
Raw routing paths are polyline coordinate arrays. Turning them into navigation prompts requires mapping bearing changes to turn maneuvers (slight right, sharp left), street names, and voice cues.

## When to Use
- When executing turn by turn navigation formatter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OSRM, Valhalla) cannot be provisioned.

## Supported Technologies
- OSRM
- Valhalla
- JSON
- TypeScript

## Example Use Cases
### In-App Navigation Guidance
Displaying heads-up driving directions in driver-dispatch smartphone applications.

### Delivery Itinerary Summaries
Generating printed turn-by-turn route sheets for delivery drivers in rural areas.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OSRM) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://project-osrm.org/docs/v5.24.0/api/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
