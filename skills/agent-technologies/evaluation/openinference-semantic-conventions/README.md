# Openinference Semantic Conventions

## Description
Instruments AI applications with OpenInference semantic telemetry conventions for standardized OpenTelemetry traces. Use when standardizing LLM observability across heterogeneous tools.

## Purpose
OpenInference defines vendor-neutral semantic conventions for tracing LLMs, vector stores, retrievers, and embedding models, avoiding lock-in to proprietary tracing formats.

## When to Use
- When executing openinference semantic conventions in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (OpenInference, OpenTelemetry) cannot be provisioned.

## Supported Technologies
- OpenInference
- OpenTelemetry
- Python / JavaScript
- JSON

## Example Use Cases
### Enterprise Telemetry Standardization
Ensuring all internal AI services export uniform telemetry attributes regardless of language.

### Multi-Vendor Observability
Routing traces concurrently to local debugging tools and enterprise APM monitors.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (OpenInference) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/Arize-ai/openinference
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
