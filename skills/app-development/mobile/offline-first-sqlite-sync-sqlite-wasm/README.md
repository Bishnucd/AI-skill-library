# Offline First Sqlite Sync Sqlite Wasm

## Description
Architects offline-first local SQLite databases with synchronization engines (WatermelonDB / PowerSync). Use when building mobile applications that work seamlessly without internet connectivity.

## Purpose
Mobile apps in elevators or subways must remain fully responsive. Offline-first architectures write reads and writes to local SQLite, synchronizing changes to cloud backends in the background.

## When to Use
- When executing offline first sqlite sync sqlite wasm in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (SQLite, WatermelonDB / PowerSync) cannot be provisioned.

## Supported Technologies
- SQLite
- WatermelonDB / PowerSync
- CRDTs
- TypeScript / Kotlin

## Example Use Cases
### Field Inspection Tools
Allowing utility technicians to fill inspection reports in remote rural areas without cell service.

### Instant Mobile Note Taking
Ensuring note creation and editing is instant with zero network loading spinners.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (SQLite) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://nozbe.github.io/WatermelonDB/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
