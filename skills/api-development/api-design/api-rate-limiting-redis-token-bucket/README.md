# Api Rate Limiting Redis Token Bucket

## Description
Implements sliding-window and token-bucket API rate limiting algorithms backed by atomic Redis operations. Use when protecting API endpoints from abuse, credential stuffing, and noisy neighbors.

## Purpose
Rate limiting prevents service degradation from bursts or abusive clients. Sliding window log and token bucket algorithms executed via atomic Redis Lua scripts guarantee race-free quota tracking.

## When to Use
- When executing api rate limiting redis token bucket in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Redis, Lua Scripting) cannot be provisioned.

## Supported Technologies
- Redis
- Lua Scripting
- Node.js / Python
- Express / FastAPI

## Example Use Cases
### Public API Throttling
Enforcing tiered rate limits based on customer subscription plan.

### Login Brute-Force Prevention
Restricting rapid authentication attempts per IP and username.

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
