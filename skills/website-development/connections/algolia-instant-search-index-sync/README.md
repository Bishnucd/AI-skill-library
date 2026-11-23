# Algolia Instant Search Index Sync

## Description
Synchronizes database records into Algolia search indices with incremental diff batching. Use when delivering typo-tolerant, instant search-as-you-type experiences.

## Purpose
Relational databases are slow at fuzzy typo-tolerant full-text search. Algolia provides hosted search APIs optimized for sub-10ms response times, configured via synchronized JSON records.

## When to Use
- When executing algolia instant search index sync in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Algolia, InstantSearch) cannot be provisioned.

## Supported Technologies
- Algolia
- InstantSearch
- Index Synchronization
- Search as you Type

## Example Use Cases
### E-Commerce Typo-Tolerant Product Search
Serving instant search results as users type, correctly matching "sneekers" to "sneakers" in 8ms.

### Documentation Instant Search Bar
Providing instant full-text search across 5,000 documentation articles directly in client browsers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Algolia) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
