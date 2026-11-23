# Tanstack React Query Cache Invalidation

## Description
Manages server state, optimistic updates, and smart cache invalidation using TanStack React Query. Use when eliminating redundant API fetches and keeping UI in sync with backend data.

## Purpose
Managing server data in global client stores causes stale data bugs. TanStack Query manages caching, automatic background refetching on window focus, and optimistic mutation rollbacks.

## When to Use
- When executing tanstack react query cache invalidation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (TanStack Query, React Query) cannot be provisioned.

## Supported Technologies
- TanStack Query
- React Query
- Server State Management
- Cache Invalidation

## Example Use Cases
### Instant-Feedback Todo Item Checkbox
Updating checkbox UI in 0ms optimistically while syncing mutation to the backend in the background.

### Window Focus Background Data Synchronization
Automatically refreshing live dashboard metrics whenever a user tabs back into the browser window.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (TanStack Query) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
