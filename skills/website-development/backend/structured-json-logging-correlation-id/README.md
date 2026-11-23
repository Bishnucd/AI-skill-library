# Structured Json Logging Correlation Id

## Description
Implements structured JSON logging with distributed correlation and request ID propagation across microservices. Use when tracing requests across distributed backend microservice architectures.

## Purpose
Unstructured string logs are impossible to query across hundreds of containers. Structured JSON logging attaches timestamp, log level, message, user_id, and correlation_id to every log entry.

## When to Use
- When executing structured json logging correlation id in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Structured Logging, Correlation IDs) cannot be provisioned.

## Supported Technologies
- Structured Logging
- Correlation IDs
- Winston / Loguru
- Distributed Systems

## Example Use Cases
### Distributed Microservice Error Tracing
Querying Kibana/Datadog for a single correlation_id to see the complete log history across 8 services.

### Automated Log Parsing and Alerting
Parsing structured error_code fields in log aggregators to trigger automated PagerDuty incidents.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Structured Logging) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://opentelemetry.io/docs/concepts/signals/logs/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
