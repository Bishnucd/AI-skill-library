# Osrm Map Matching Gps Snapping

## Description
Snaps noisy, drift-prone GPS coordinate traces to logical road network segments using OSRM map matching. Use when cleaning vehicle telemetry and reconstructing traveled routes.

## Purpose
Smartphone GPS pings drift into buildings or adjacent parallel roads. OSRM map matching uses Hidden Markov Models to snap noisy coordinate sequences to the most probable road segments.

## When to Use
- When executing osrm map matching gps snapping in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OSRM (Open Source Routing Machine), Hidden Markov Models (HMM)) cannot be provisioned.

## Supported Technologies
- OSRM (Open Source Routing Machine)
- Hidden Markov Models (HMM)
- GPS Trace Cleaning

## Example Use Cases
### Rideshare Fare Mileage Calculation
Snapping driver GPS pings to official road geometries to calculate exact billable mileage.

### Fleet Speed Limit Compliance
Matching vehicle speeds against posted road speed limits on the exact snapped highway.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OSRM (Open Source Routing Machine)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://project-osrm.org/docs/v5.24.0/api/#match-service
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
