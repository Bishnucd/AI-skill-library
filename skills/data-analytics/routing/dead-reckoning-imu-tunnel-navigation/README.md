# Dead Reckoning Imu Tunnel Navigation

## Description
Estimates vehicle position inside GPS-denied tunnels using smartphone accelerometer, gyroscope, and wheel speed dead reckoning. Use when maintaining continuous navigation in underground tunnels.

## Purpose
GPS signals vanish inside underground highway tunnels. Dead reckoning fuses IMU accelerometer readings, heading compass gyroscopes, and last known speed to project vehicle movement until GPS restores.

## When to Use
- When executing dead reckoning imu tunnel navigation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Dead Reckoning, Inertial Measurement Unit (IMU)) cannot be provisioned.

## Supported Technologies
- Dead Reckoning
- Inertial Measurement Unit (IMU)
- Extended Kalman Filter (EKF)
- Mobile

## Example Use Cases
### Underground Tunnel GPS Bridge
Preventing navigation apps from freezing when vehicles drive through 2-mile highway tunnels.

### Subway Train Position Tracking
Estimating subway train locations between stations using onboard smartphone accelerometer pings.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Dead Reckoning) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Dead_reckoning
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
