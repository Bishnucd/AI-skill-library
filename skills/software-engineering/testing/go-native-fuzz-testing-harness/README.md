# Go Native Fuzz Testing Harness

## Description
Uncovers panics, memory corruptions, and crashes using Go 1.18+ native fuzzing harnesses (testing.F). Use when security testing network parsers, deserializers, and protocol codecs.

## Purpose
Fuzz testing provides random, mutated byte inputs to Go functions to discover unhandled edge cases and panics. Go includes native coverage-guided fuzzing directly in the standard toolchain.

## When to Use
- When executing go native fuzz testing harness in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Go Fuzzing, testing.F) cannot be provisioned.

## Supported Technologies
- Go Fuzzing
- testing.F
- Security Testing
- Go (Golang)

## Example Use Cases
### HTTP Header Parser Security Hardening
Fuzzing custom HTTP header parsing code to discover malformed inputs that trigger nil pointer panics.

### JSON Custom Unmarshaler Crash Discovery
Finding deeply nested JSON structures that cause recursive stack overflow panics in production.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Go Fuzzing) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://go.dev/doc/security/fuzz/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
