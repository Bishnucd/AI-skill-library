# Tauri Cross Compilation

## Description
Configures multi-platform Rust and web-view cross-compilation builds for lightweight desktop binaries using Tauri. Use when building resource-efficient native desktop apps.

## Purpose
Tauri provides native webview rendering with a lightweight Rust backend, producing binaries under 15MB. Cross-compilation requires target toolchains, native library dependencies, and CI build matrices.

## When to Use
- When executing tauri cross compilation in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Rust, Tauri v2) cannot be provisioned.

## Supported Technologies
- Rust
- Tauri v2
- Cargo
- GitHub Actions

## Example Use Cases
### Lightweight Desktop Client
Replacing heavy Electron runtimes with sub-15MB Tauri native binaries.

### Multi-OS Desktop CI/CD
Building universal macOS, Windows, and Linux packages simultaneously.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Rust) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://tauri.app/v1/guides/building/cross-platform
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
