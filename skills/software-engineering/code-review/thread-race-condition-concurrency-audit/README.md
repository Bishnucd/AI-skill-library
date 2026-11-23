# Thread Race Condition Concurrency Audit

## Description
Audits multithreaded and async code for race conditions, deadlock cycles, and lock-ordering hazards. Use when reviewing concurrent systems and asynchronous backend services.

## Purpose
Concurrent data access without synchronization causes intermittent, unreproducible bugs. Systematic concurrency audits check shared state mutability, lock ordering, and thread-safety invariants.

## When to Use
- When executing thread race condition concurrency audit in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Thread Auditing, Race Conditions) cannot be provisioned.

## Supported Technologies
- Thread Auditing
- Race Conditions
- Concurrency
- Deadlock Detection

## Example Use Cases
### Go Microservice Race Detector Audit
Running go test -race in CI to catch unsynchronized map writes across parallel HTTP handlers.

### Java Banking Ledger Multithread Review
Verifying synchronized account transfer methods to prevent race conditions during concurrent balance withdrawals.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Thread Auditing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Race_condition
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
