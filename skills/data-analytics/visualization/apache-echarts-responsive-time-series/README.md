# Apache Echarts Responsive Time Series

## Description
Constructs enterprise-grade responsive time-series charts with dynamic zoom sliders using Apache ECharts. Use when building financial charts or IoT dashboards with high refresh rates.

## Purpose
Apache ECharts is an open-source declarative charting library capable of rendering 100,000+ time-series datapoints with interactive dataZoom brushes, markLines, and SVG rendering.

## When to Use
- When executing apache echarts responsive time series in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Apache ECharts, Canvas / SVG) cannot be provisioned.

## Supported Technologies
- Apache ECharts
- Canvas / SVG
- JavaScript
- Time Series

## Example Use Cases
### Financial Stock Candlestick Telemetry
Rendering 5-minute OHLC candlestick pricing alongside volume bars and moving averages.

### Data Center Server Power Monitoring
Displaying 24-hour server rack power draw and temperature metrics with zoomable scrubbing.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Apache ECharts) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://echarts.apache.org/en/index.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
