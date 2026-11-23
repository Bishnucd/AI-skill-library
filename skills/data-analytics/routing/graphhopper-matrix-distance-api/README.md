# Graphhopper Matrix Distance Api

## Description
Computes large-scale many-to-many (N x M) travel time and distance cost matrices using GraphHopper. Use when calculating cost matrices for dispatching, logistics, and clustering.

## Purpose
Vehicle routing solvers require knowing travel time between every pair of delivery stops. GraphHopper Matrix API calculates dense NxM distance matrices over road networks in milliseconds.

## When to Use
- When executing graphhopper matrix distance api in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GraphHopper, Java / REST) cannot be provisioned.

## Supported Technologies
- GraphHopper
- Java / REST
- Distance Matrix
- OpenStreetMap

## Example Use Cases
### Logistics Cost Matrix Precomputation
Calculating driving durations between 100 delivery locations to optimize courier routes.

### Store Catchment Proximity
Computing driving times from 500 customer locations to 10 retail warehouse depots.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GraphHopper) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.graphhopper.com/documentation/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
