# Traffic Congestion Speed Profile Routing

## Description
Integrates historical and real-time traffic speed profiles to compute accurate time-dependent routing routes. Use when forecasting commute times across peak rush hour traffic periods.

## Purpose
Routing on static speed limits produces wildly inaccurate travel time estimates during rush hour. Ingesting floating-car speed records updates road edge weights with realistic speeds.

## When to Use
- When executing traffic congestion speed profile routing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OSRM Traffic Update, Speed Profiles) cannot be provisioned.

## Supported Technologies
- OSRM Traffic Update
- Speed Profiles
- CSV / CSV.gz
- Traffic Telemetry

## Example Use Cases
### Rush-Hour Commute Forecasting
Forecasting travel duration for trips departing at 8:00 AM vs 10:00 AM.

### Dynamic Ambulance Route Dispatch
Routing emergency vehicles around congested highway bottlenecks in real time.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OSRM Traffic Update) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/Project-OSRM/osrm-backend/wiki/Traffic
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
