# Testcontainers Ephemeral Docker Testing

## Description
Provisions real ephemeral PostgreSQL, Redis, and Kafka Docker containers in integration tests with Testcontainers. Use when eliminating flaky in-memory database mocks.

## Purpose
In-memory databases (H2, sqlite) don't support advanced PostgreSQL features (JSONB, CTEs). Testcontainers spins up real Docker containers during test startup and terminates them cleanly on completion.

## When to Use
- When executing testcontainers ephemeral docker testing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Testcontainers, Docker) cannot be provisioned.

## Supported Technologies
- Testcontainers
- Docker
- Integration Testing
- Real Databases

## Example Use Cases
### PostgreSQL JSONB and Full-Text Search Testing
Testing complex PostgreSQL queries against an authentic PostgreSQL 16 engine in CI.

### Kafka Event Streaming Integration Tests
Spinning up ephemeral Kafka and Zookeeper containers to test event publishing and consumer commits.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Testcontainers) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://testcontainers.com/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
