# Mysql Slow Query Log Pt Query Digest

## Description
Profiles and analyzes MySQL slow query logs using Percona pt-query-digest. Use when debugging high MySQL latency and prioritizing query tuning initiatives.

## Purpose
pt-query-digest aggregates and parses gigabytes of MySQL slow query logs, generating statistical distribution summaries of query classes ranked by cumulative lock and execution time.

## When to Use
- When executing mysql slow query log pt query digest in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Percona Toolkit, pt-query-digest) cannot be provisioned.

## Supported Technologies
- Percona Toolkit
- pt-query-digest
- MySQL Slow Log
- Query Profiling

## Example Use Cases
### E-Commerce Peak Season Latency Debugging
Pinpointing unindexed search queries causing MySQL master CPU to spike to 100% during sales.

### Database Optimization Prioritization
Providing engineering teams with data-backed reports on which 3 queries to refactor first.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Percona Toolkit) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://docs.percona.com/percona-toolkit/pt-query-digest.html
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
