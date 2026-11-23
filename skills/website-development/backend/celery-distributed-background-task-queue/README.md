# Celery Distributed Background Task Queue

## Description
Orchestrates asynchronous distributed background job queues and worker retries using Celery and Redis. Use when executing heavy video encoding, report generation, and email jobs off the web thread.

## Purpose
Long-running tasks block web request threads. Celery offloads work to asynchronous background worker processes, handling task retries with exponential backoff, rate limits, and scheduling.

## When to Use
- When executing celery distributed background task queue in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Celery, Redis / RabbitMQ) cannot be provisioned.

## Supported Technologies
- Celery
- Redis / RabbitMQ
- Background Workers
- Python

## Example Use Cases
### Async PDF Invoice Generation Pipeline
Generating 100-page customer PDF billing statements in the background without timing out HTTP requests.

### Batch Marketing Email Dispatcher
Distributing 100,000 promotional emails across 10 concurrent worker processes with rate limit controls.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Celery) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.celeryq.dev/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
