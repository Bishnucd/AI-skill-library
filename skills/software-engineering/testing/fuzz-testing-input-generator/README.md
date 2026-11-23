# Fuzz Testing Input Generator

## Description
Executes coverage-guided fuzz testing using libFuzzer or Go native fuzzing to uncover memory corruption and crashes. Use when hardening security-critical data decoders and network protocol parsers.

## Purpose
Fuzzing injects mutated byte payloads while monitoring code execution paths to discover deep edge-case crashes, memory panics, and buffer overflows that standard unit tests never reach.

## When to Use
- When executing fuzz testing input generator in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Go Fuzzing, libFuzzer) cannot be provisioned.

## Supported Technologies
- Go Fuzzing
- libFuzzer
- AFL++
- C / Go / Rust

## Example Use Cases
### Protocol Parser Hardening
Fuzzing network packet parsers to eliminate remote denial-of-service vulnerabilities.

### File Format Decoder Testing
Discovering unhandled panic exceptions in custom image and audio file parsers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Go Fuzzing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://go.dev/security/fuzz/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
