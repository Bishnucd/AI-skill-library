# Network Resilience Offline Queue Mobile

## Description
Implements persistent mutation request queues with exponential backoff and connectivity listeners. Use when buffering user actions during mobile network dead zones.

## Purpose
Mobile networks drop constantly. Buffering mutating user actions (likes, comments, uploads) in persistent local queues ensures actions automatically execute once connectivity returns.

## When to Use
- When executing network resilience offline queue mobile in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (WorkManager (Android), BGTaskScheduler (iOS)) cannot be provisioned.

## Supported Technologies
- WorkManager (Android)
- BGTaskScheduler (iOS)
- Network Reachability
- SQLite

## Example Use Cases
### Social Media Offline Commenting
Allowing users to write comments in subways that post automatically upon exiting.

### Mobile Form Submission Resilience
Ensuring customer lead forms are never lost due to momentary cellular connection drops.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (WorkManager (Android)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.android.com/topic/libraries/architecture/workmanager
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
