# Chartjs Canvas Performance Optimization

## Description
Optimizes HTML5 canvas chart rendering for dense datasets using Chart.js decimation and parsing flags. Use when eliminating browser lag when graphing 50,000+ data points.

## Purpose
Rendering raw high-frequency data locks browser UI threads. Chart.js performance optimization applies Largest-Triangle-Three-Buckets (LTTB) decimation, disabled animations, and normalized coordinates.

## When to Use
- When executing chartjs canvas performance optimization in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Chart.js, HTML5 Canvas) cannot be provisioned.

## Supported Technologies
- Chart.js
- HTML5 Canvas
- LTTB Decimation
- Browser Performance

## Example Use Cases
### IoT Sensor High-Frequency Telemetry
Graphing 10Hz vibration sensor readouts without dropping browser UI frame rates.

### Continuous Audio Waveform Display
Rendering minute-long audio amplitude spikes on lightweight tablet hardware.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Chart.js) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.chartjs.org/docs/latest/general/performance.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
