# Hazardous Material Truck Routing Restriction

## Description
Calculates compliant heavy commercial vehicle routes respecting bridge clearances, weight limits, and hazmat tunnels. Use when routing freight trucks and dangerous goods cargo.

## Purpose
Commercial trucks cannot use residential streets or tunnels when hauling flammable goods. Commercial routing checks vehicle height, axle weight, and hazmat classes against road restrictions.

## When to Use
- When executing hazardous material truck routing restriction in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Truck Routing, Hazmat Restrictions) cannot be provisioned.

## Supported Technologies
- Truck Routing
- Hazmat Restrictions
- Valhalla / GraphHopper
- OSM Tags

## Example Use Cases
### Freight Logistics Fleet Safety
Preventing 18-wheel tractor-trailers from colliding with low-clearance overpasses.

### Chemical Transport Compliance
Routing fuel tankers legally around municipal water reservoir protection zones.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Truck Routing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/valhalla/valhalla/blob/master/docs/truck_routing.md
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
