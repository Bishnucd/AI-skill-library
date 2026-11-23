# Libpostal International Address Parser

## Description
Parses and normalizes unstructured international street addresses using the libpostal C library and NLP models. Use when deduplicating messy global address databases.

## Purpose
International address formats vary wildly across countries. libpostal uses statistical language models trained on OpenStreetMap data to decompose messy strings into discrete components.

## When to Use
- When executing libpostal international address parser in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (libpostal, C / Python bindings) cannot be provisioned.

## Supported Technologies
- libpostal
- C / Python bindings
- Address Parsing
- NLP

## Example Use Cases
### Global Customer Deduplication
Merging duplicate customer records formatted with different international conventions.

### Address Validation Preprocessing
Decomposing messy single-line user input into clean database fields.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (libpostal) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/openvenues/libpostal
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
