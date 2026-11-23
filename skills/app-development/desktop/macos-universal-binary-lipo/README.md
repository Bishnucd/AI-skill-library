# Macos Universal Binary Lipo

## Description
Combines x86_64 and arm64 Apple Silicon executable slices into universal Mach-O binaries using lipo. Use when building single universal application bundles for macOS.

## Purpose
macOS runs on both Intel x86_64 and Apple Silicon arm64 hardware. Compiling both architecture slices and merging them with lipo creates a single application bundle running natively on all Macs.

## When to Use
- When executing macos universal binary lipo in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (macOS, lipo CLI) cannot be provisioned.

## Supported Technologies
- macOS
- lipo CLI
- Mach-O
- Clang

## Example Use Cases
### Native Apple Silicon Optimization
Delivering peak performance on M1/M2/M3 Macs while retaining full compatibility with legacy Intel hardware.

### Single Download Distribution
Simplifying website download pages to a single "Download for Mac" button.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (macOS) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
