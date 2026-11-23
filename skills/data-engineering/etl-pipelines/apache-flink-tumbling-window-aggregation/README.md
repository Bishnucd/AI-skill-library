# Apache Flink Tumbling Window Aggregation

## Description
Performs low-latency stateful stream aggregations with event-time watermarking using Apache Flink. Use when calculating sliding or tumbling window metrics over real-time telemetry.

## Purpose
Apache Flink provides true streaming computation with exactly-once state consistency, handling out-of-order event arrivals through watermarks and tumbling/sliding time windows.

## When to Use
- When executing apache flink tumbling window aggregation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Apache Flink, Java / Python (PyFlink)) cannot be provisioned.

## Supported Technologies
- Apache Flink
- Java / Python (PyFlink)
- Stream Processing
- Event Time

## Example Use Cases
### Credit Card Fraud Velocity Tracking
Detecting multiple transactions from the same card number occurring within 60-second windows.

### Network DDOS Attack Rate Spike Monitoring
Calculating incoming packet volume per IP address across 10-second tumbling windows.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Apache Flink) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/datastream/operators/windows/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
