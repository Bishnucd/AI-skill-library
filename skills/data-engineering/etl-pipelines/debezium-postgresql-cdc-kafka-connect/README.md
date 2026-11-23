# Debezium Postgresql Cdc Kafka Connect

## Description
Captures row-level database changes from PostgreSQL Write-Ahead Logs (WAL) in real-time using Debezium and Kafka Connect. Use when streaming low-latency database events to event brokers.

## Purpose
Debezium captures committed row changes from PostgreSQL logical replication slots without touching application code, publishing structured JSON/Avro events to Kafka with zero query overhead.

## When to Use
- When executing debezium postgresql cdc kafka connect in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Debezium, Kafka Connect) cannot be provisioned.

## Supported Technologies
- Debezium
- Kafka Connect
- PostgreSQL WAL
- Change Data Capture (CDC)

## Example Use Cases
### Microservice Event Cache Invalidation
Invalidating distributed Redis caches instantaneously whenever order status updates in Postgres.

### Real-Time Search Index Ingestion
Streaming product inventory modifications into Elasticsearch indices with sub-second latency.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Debezium) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://debezium.io/documentation/reference/stable/connectors/postgresql.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
