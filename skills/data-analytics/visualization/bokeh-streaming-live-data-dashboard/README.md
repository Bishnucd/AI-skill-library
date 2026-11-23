# Bokeh Streaming Live Data Dashboard

## Description
Streams real-time streaming time-series data to browser canvases using Python Bokeh Server. Use when monitoring live industrial sensors, financial order books, and streaming metrics.

## Purpose
Bokeh Server synchronizes Python data models directly with browser client JavaScript via WebSockets, allowing real-time append streaming to live figures without page reloads.

## When to Use
- When executing bokeh streaming live data dashboard in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Bokeh, WebSockets) cannot be provisioned.

## Supported Technologies
- Bokeh
- WebSockets
- Python
- Real-Time Streaming

## Example Use Cases
### Cryptocurrency Order Book Depth Chart
Streaming live bids and asks updates from exchange WebSockets into real-time visual charts.

### Wind Turbine Vibration Sensor Monitor
Displaying 50Hz bearing accelerometer telemetry with rolling 60-second time windows.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Bokeh) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.bokeh.org/en/latest/docs/user_guide/server.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
