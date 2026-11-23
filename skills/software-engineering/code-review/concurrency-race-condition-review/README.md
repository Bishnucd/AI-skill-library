# Concurrency Race Condition Review

## Description
Audits multi-threaded and asynchronous code for data races, deadlocks, and atomicity violations. Use when reviewing concurrent Go routines, async Node.js, or multi-threaded Java applications.

## Purpose
Concurrency bugs are notoriously difficult to reproduce in production. Code reviews must inspect shared mutable state, mutex acquisition order, atomic variables, and channel ownership.

## When to Use
- When executing concurrency race condition review in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Go Race Detector, ThreadSanitizer) cannot be provisioned.

## Supported Technologies
- Go Race Detector
- ThreadSanitizer
- Mutex / Atomics
- Static Analysis

## Example Use Cases
### High-Throughput Service Review
Auditing in-memory cache and counter updates in high-concurrency Go services.

### Financial Transaction Safety
Preventing balance double-spend vulnerabilities caused by concurrent API requests.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Go Race Detector) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://go.dev/doc/articles/race_detector
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
