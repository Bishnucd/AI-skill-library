# Redis Caching Cache Aside Pattern

## Description
Implements the cache-aside pattern with TTL expiration, cache stampede protection, and key invalidation in Redis. Use when shielding databases from repetitive read traffic.

## Purpose
Cache-aside checks the cache first, querying the primary database only on cache misses, and populates the cache with a time-to-live (TTL). Probabilistic early expiration prevents cache stampedes.

## When to Use
- When executing redis caching cache aside pattern in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Redis, Python / Node.js) cannot be provisioned.

## Supported Technologies
- Redis
- Python / Node.js
- Distributed Caching
- Mutex Locking

## Example Use Cases
### Database Read Offloading
Absorbing 90%+ of repetitive read queries on high-traffic product catalog pages.

### Cache Stampede Mitigation
Preventing database crashes when hot cache keys expire during traffic spikes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Redis) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://redis.io/docs/latest/develop/use/patterns/cache-aside/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
