# Concurrency Mutex Lock Order Inspection

## Description
Verifies strict lock hierarchy and timeout policies across multi-mutex locks to eliminate deadlocks. Use when reviewing multithreaded systems that acquire multiple locks.

## Purpose
Deadlocks occur when Thread 1 holds Lock A and waits for Lock B, while Thread 2 holds Lock B and waits for Lock A. Enforcing a strict global lock ordering invariant prevents deadlocks mathematically.

## When to Use
- When executing concurrency mutex lock order inspection in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Lock Ordering, Deadlock Prevention) cannot be provisioned.

## Supported Technologies
- Lock Ordering
- Deadlock Prevention
- Concurrency
- Mutex Synchronization

## Example Use Cases
### Multi-Account Money Transfer Lock Ordering
Sorting source and destination account IDs numerically to ensure two accounts are always locked in identical order.

### High-Throughput Database Buffer Pool Review
Verifying page latch acquisition hierarchies to prevent deadlocks under heavy concurrent read/write loads.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Lock Ordering) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Deadlock
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
