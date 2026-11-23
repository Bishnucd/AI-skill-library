# React Native Hermes Optimization

## Description
Configures and profiles the Hermes JavaScript engine and bytecode compilation for React Native apps. Use when optimizing mobile app startup time, memory footprint, and frame rates.

## Purpose
Hermes is an open-source JavaScript engine optimized for running React Native. It precompiles JavaScript into bytecode at build time, slashing Time to Interactive (TTI) and memory consumption.

## When to Use
- When executing react native hermes optimization in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (React Native, Hermes Engine) cannot be provisioned.

## Supported Technologies
- React Native
- Hermes Engine
- Flipper / Chrome DevTools
- TypeScript

## Example Use Cases
### App Startup Speedup
Decreasing cold-start launch time on budget Android hardware by up to 50%.

### Memory Leak Investigation
Tracking heap snapshots and garbage collection overhead in long-running sessions.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (React Native) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://reactnative.dev/docs/hermes
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
