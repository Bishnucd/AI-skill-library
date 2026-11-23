# Polyline6 Encoded Path Compression

## Description
Compresses coordinate path arrays into compact ASCII strings using Google Encoded Polyline Algorithm Format (Polyline6). Use when transmitting multi-thousand point route geometries over HTTP.

## Purpose
Transmitting arrays of thousands of float coordinates consumes megabytes of JSON bandwidth. The polyline algorithm computes delta offsets and encodes coordinates into compact ASCII strings.

## When to Use
- When executing polyline6 encoded path compression in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Polyline Algorithm (5 & 6 decimals), Data Compression) cannot be provisioned.

## Supported Technologies
- Polyline Algorithm (5 & 6 decimals)
- Data Compression
- Python / JavaScript

## Example Use Cases
### Route Payload Size Reduction
Shrinking a 5,000-point GPS route payload from 500KB JSON down to 12KB encoded text.

### URL-Encoded Route Directions
Passing complete driving paths within browser URL query parameter limits.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Polyline Algorithm (5 & 6 decimals)) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.google.com/maps/documentation/utilities/polylinealgorithm
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
