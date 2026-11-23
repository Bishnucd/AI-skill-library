# Location Geofencing Background Tracking

## Description
Configures low-power mobile geofencing, significant motion changes, and background location services. Use when triggering location-based alerts and tracking mobile journeys.

## Purpose
Continuous GPS tracking rapidly drains smartphone batteries. Leveraging OS-managed hardware geofencing and significant location change APIs enables battery-efficient boundary monitoring.

## When to Use
- When executing location geofencing background tracking in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (CoreLocation (iOS), FusedLocationProvider (Android)) cannot be provisioned.

## Supported Technologies
- CoreLocation (iOS)
- FusedLocationProvider (Android)
- Geofencing
- Battery Optimization

## Example Use Cases
### Store Arrival Detection
Alerting restaurant staff when a customer pulls into the parking lot for curbside pickup.

### Automated Mileage Logging
Tracking business driving trips automatically using significant location change triggers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (CoreLocation (iOS)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.apple.com/documentation/corelocation/monitoring_the_user_s_proximity_to_geographic_regions
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
