# Reverse Image Search Forensic Source Tracing

## Description
Traces original publication origins and stolen creative assets across Google Vision, TinEye, and Yandex. Use when verifying photo authenticity and identifying original photographers.

## Purpose
Misinformation often pairs real photographs with false contextual headlines. Reverse image search queries global web indexes to find the earliest appearance, original high-res source, and creator context.

## When to Use
- When executing reverse image search forensic source tracing in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Reverse Image Search, Google Cloud Vision Web Detection) cannot be provisioned.

## Supported Technologies
- Reverse Image Search
- Google Cloud Vision Web Detection
- TinEye
- Image Forensics

## Example Use Cases
### Breaking News Disaster Photo Verification
Confirming that a viral earthquake photo was actually taken during an unrelated event in 2018.

### Commercial Photography Copyright Enforcement
Locating 30 unauthorized commercial websites using a photographer copyrighted catalog photos.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Reverse Image Search) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://cloud.google.com/vision/docs/detecting-web
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
