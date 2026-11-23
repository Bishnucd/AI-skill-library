# Tauri Ipc Command Handler

## Description
Implements type-safe Inter-Process Communication (IPC) commands and event listeners between Rust and webview in Tauri. Use when building high-performance desktop native logic.

## Purpose
Tauri exposes native system capabilities to frontend web frameworks via typed #[tauri::command] handlers, ensuring thread safety and memory isolation.

## When to Use
- When executing tauri ipc command handler in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Tauri v2, Rust) cannot be provisioned.

## Supported Technologies
- Tauri v2
- Rust
- TypeScript
- IPC

## Example Use Cases
### Native File System Manipulation
Allowing web UI to execute fast, multi-threaded file system scans via Rust.

### Hardware Sensor Access
Streaming low-level OS telemetry directly to frontend dashboard components.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Tauri v2) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://tauri.app/develop/calling-rust/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
