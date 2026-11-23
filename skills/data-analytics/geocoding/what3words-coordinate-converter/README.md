# What3words Coordinate Converter

## Description
Converts between GPS coordinates and unique 3-word geographic address identifiers using the what3words API. Use when referencing precise 3m x 3m ground locations in remote areas.

## Purpose
Rural areas and construction sites lack street addresses. what3words divides the planet into 57 trillion 3m x 3m squares, assigning each square a memorable 3-word combination (e.g. ///filled.count.soap).

## When to Use
- When executing what3words coordinate converter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (what3words API, REST) cannot be provisioned.

## Supported Technologies
- what3words API
- REST
- GPS Coordinates
- TypeScript / Python

## Example Use Cases
### Rural Emergency Dispatch
Directing emergency ambulances to exact trailheads or park entrances lacking street addresses.

### Construction Site Logistics
Designating exact equipment drop-off gates on massive multi-acre job sites.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (what3words API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.what3words.com/public-api/docs
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
