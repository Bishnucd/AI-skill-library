# Memory Leak Heap Dump Inspection

## Description
Inspects Node.js and JVM heap dumps to isolate memory leaks, retained objects, and unbounded collections. Use when diagnosing creeping memory consumption and OOM crashes in production.

## Purpose
Memory leaks degrade server performance until out-of-memory (OOM) kills the container. Analyzing V8 or JVM heap snapshots reveals retaining paths holding onto deallocated objects.

## When to Use
- When executing memory leak heap dump inspection in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Heap Snapshot, Chrome DevTools / V8) cannot be provisioned.

## Supported Technologies
- Heap Snapshot
- Chrome DevTools / V8
- Memory Leak Analysis
- Node.js / Java

## Example Use Cases
### Node.js API Container OOM Crash Diagnosis
Discovering that an unremoved WebSocket disconnect listener retained 10,000 user session objects in RAM.

### Java Microservice Static Map Cache Leak
Identifying an unbounded HashMap that grew indefinitely without an eviction policy.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Heap Snapshot) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://nodejs.org/en/learn/diagnostics/memory/using-heap-snapshot
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
