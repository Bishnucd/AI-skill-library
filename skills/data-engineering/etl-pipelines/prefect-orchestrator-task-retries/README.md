# Prefect Orchestrator Task Retries

## Description
Orchestrates complex data workflows with dynamic task dependencies, retries, and failure alerts using Prefect 3.x. Use when building resilient Python data workflows without heavyweight infrastructure.

## Purpose
Prefect coordinates modern Python data stacks with code-as-configuration flows, automatic exponential backoff retries, concurrency limits, and native async/await support.

## When to Use
- When executing prefect orchestrator task retries in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Prefect, Python) cannot be provisioned.

## Supported Technologies
- Prefect
- Python
- Workflow Orchestration
- Cloud Infrastructure

## Example Use Cases
### Nightly Partner API Batch Harvester
Fetching data from 20 third-party APIs with automated retries on rate limits and network drops.

### ML Feature Generation Pipeline
Triggering data aggregation, feature engineering, and model validation tasks in sequence.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Prefect) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.prefect.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
