# Ddos Rate Limiting Leaky Bucket Redis

## Description
Implements high-precision leaky-bucket rate limiting algorithms in Redis Lua scripts to smooth traffic bursts. Use when protecting sensitive backend resources from burst-oriented traffic spikes.

## Purpose
Unlike fixed window counters that allow double traffic at boundary edges, leaky bucket algorithms enforce a steady, constant outflow rate, smoothing traffic spikes before reaching databases.

## When to Use
- When executing ddos rate limiting leaky bucket redis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Redis Lua Scripts, Leaky Bucket Algorithm) cannot be provisioned.

## Supported Technologies
- Redis Lua Scripts
- Leaky Bucket Algorithm
- Traffic Shaping
- FastAPI

## Example Use Cases
### Database Write Traffic Smoothing
Preventing traffic surges from overwhelming relational database write connection pools.

### Third-Party API Quota Management
Pacing outbound calls to third-party vendors strictly within contractual requests-per-second caps.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Redis Lua Scripts) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Leaky_bucket
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
