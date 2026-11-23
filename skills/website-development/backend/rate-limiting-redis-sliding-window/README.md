# Rate Limiting Redis Sliding Window

## Description
Implements distributed sliding-window log rate limiting in Redis with atomic Lua scripts. Use when protecting backend endpoints from DDoS, credential stuffing, and brute force attacks.

## Purpose
Fixed-window rate limits allow traffic spikes at window boundaries. Redis sliding-window logs store timestamps in sorted sets (ZSET), removing expired entries and counting requests atomically.

## When to Use
- When executing rate limiting redis sliding window in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Redis, Sliding Window Rate Limiting) cannot be provisioned.

## Supported Technologies
- Redis
- Sliding Window Rate Limiting
- Lua Scripts
- Backend Security

## Example Use Cases
### Login Endpoint Brute-Force Shield
Restricting failed login attempts to 5 per minute per IP address to block credential stuffing.

### Public API Tier Rate Limiting
Enforcing 100 requests per minute quotas on free tier API keys across distributed servers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Redis) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://redis.io/glossary/rate-limiting/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
