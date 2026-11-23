# Vite Code Splitting Manual Chunks Tuning

## Description
Optimizes Vite/Rollup production bundles with manualChunks vendor splitting and dynamic import routes. Use when reducing initial page load bundles and eliminating vendor duplication.

## Purpose
A monolithic vendor bundle forces users to re-download the entire application whenever any single dependency changes. manualChunks isolates rarely changing libraries (React, Lodash) into long-cached chunks.

## When to Use
- When executing vite code splitting manual chunks tuning in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Vite, Rollup manualChunks) cannot be provisioned.

## Supported Technologies
- Vite
- Rollup manualChunks
- Code Splitting
- Web Performance

## Example Use Cases
### Heavy Charting Library Lazy Loading
Deferring a 400KB charting library download until the user actually navigates to the analytics tab.

### Long-Term Browser Cache Hit Optimization
Allowing users to cache stable React vendor chunks across application feature deployments.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Vite) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://vitejs.dev/guide/build.html#chunking-strategy
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
