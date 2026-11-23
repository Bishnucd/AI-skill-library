# Binary Int8 Vector Quantization

## Description
Applies scalar INT8 and 1-bit binary vector quantization to accelerate vector search and reduce RAM by 32x. Use when scaling in-memory vector databases to hundreds of millions of items.

## Purpose
Quantization compresses 32-bit floating point vectors into 8-bit integers or 1-bit binary flags, enabling hardware SIMD Hamming distance operations that execute in nanoseconds.

## When to Use
- When executing binary int8 vector quantization in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Binary Quantization (BQ), Scalar Quantization (SQ)) cannot be provisioned.

## Supported Technologies
- Binary Quantization (BQ)
- Scalar Quantization (SQ)
- SIMD / Hamming Distance
- Vector DB

## Example Use Cases
### Billion-Scale Vector Similarity Search
Fitting 100 million vector embeddings into 12GB of RAM on a single standard server instance.

### Real-Time Edge Audio Fingerprint Matching
Matching audio fingerprint vectors on low-power IoT devices using 1-bit binary XOR operations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Binary Quantization (BQ)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://qdrant.tech/articles/binary-quantization/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
