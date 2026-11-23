# Kafka Event Stream Consumer

## Description
Implements resilient, fault-tolerant Apache Kafka consumers with consumer groups and dead-letter queues. Use when streaming event ingestion and microservice event sourcing.

## Purpose
Event-driven stream pipelines must process high-throughput message topics with at-least-once delivery semantics, rebalance handling, and dead-letter queue isolation for malformed messages.

## When to Use
- When executing kafka event stream consumer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Apache Kafka, librdkafka / kafka-python) cannot be provisioned.

## Supported Technologies
- Apache Kafka
- librdkafka / kafka-python
- Avro / JSON Schema
- DLQ

## Example Use Cases
### Real-Time Telemetry Ingestion
Ingesting 100,000 IoT sensor events per second into analytical databases.

### Financial Ledger Event Sourcing
Processing payment ledger entries with idempotent consumer offset guarantees.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Apache Kafka) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://kafka.apache.org/documentation/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
