# Crashpad Breakpad Minidump Reporter

## Description
Configures Crashpad and Breakpad to capture C++ native process crashes and transmit minidump files to telemetry servers. Use when diagnosing native desktop crashes in production.

## Purpose
Uncaught native memory faults and segfaults kill processes instantly without emitting JavaScript stack traces. Crashpad captures memory state and register minidumps for offline post-mortem debugging.

## When to Use
- When executing crashpad breakpad minidump reporter in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Crashpad, Google Breakpad) cannot be provisioned.

## Supported Technologies
- Crashpad
- Google Breakpad
- C++ / Electron
- Sentry / Backtrace

## Example Use Cases
### Native Crash Diagnostic Pipeline
Tracing intermittent C++ segmentation faults occurring on specific GPU hardware.

### Release Health Monitoring
Monitoring crash-free session rates immediately following new desktop version deployments.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Crashpad) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://chromium.googlesource.com/crashpad/crashpad/+/master/doc/overview.md
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
