# Memcached Slab Allocation Memory Tuning

## Description
Monitors Memcached slab allocator memory utilization and optimizes item eviction rates. Use when tuning high-speed distributed in-memory cache clusters.

## Purpose
Memcached allocates memory in fixed-size slab classes. Poorly tuned chunk growth factors cause slab calcification and premature LRU item evictions even when memory appears available.

## When to Use
- When executing memcached slab allocation memory tuning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Memcached, Slab Allocator) cannot be provisioned.

## Supported Technologies
- Memcached
- Slab Allocator
- In-Memory Cache
- Memory Tuning

## Example Use Cases
### Social Network Cache Eviction Prevention
Preventing 10% hourly cache evictions by rebalancing slab classes to match JSON session sizes.

### High-Volume Session Store Optimization
Tuning Memcached memory efficiency to store 5 million user sessions in 8GB of RAM.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Memcached) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/memcached/memcached/wiki/ConfiguringServer#slab-allocator
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
