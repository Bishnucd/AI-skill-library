# Gptcache Semantic Cache Layer

## Description
Caches LLM generation and vector embedding responses using GPTCache similarity matching. Use when reducing API latency from 2,000ms to 20ms and cutting LLM costs by 60%.

## Purpose
Exact key-value caching misses semantically identical questions phrased differently. GPTCache embeds incoming queries and returns cached responses if similarity exceeds a strict threshold.

## When to Use
- When executing gptcache semantic cache layer in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (GPTCache, Semantic Caching) cannot be provisioned.

## Supported Technologies
- GPTCache
- Semantic Caching
- Vector Search
- Cost Optimization

## Example Use Cases
### High-Volume Customer FAQ Bot
Serving identical customer return policy questions instantly from cache with zero API costs.

### Enterprise Helpdesk Search Cache
Accelerating response times for common IT password reset inquiries across 10,000 employees.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (GPTCache) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/zilliztech/GPTCache
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
