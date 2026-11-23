# Geohash Spatial Proximity Clustering

## Description
Encodes latitude and longitude into hierarchical alphanumeric Geohash strings for prefix-based spatial search. Use when implementing fast radius and proximity searches in NoSQL databases.

## Purpose
Geohash interleaves latitude and longitude bits into Base32 strings. Shared prefix characters represent geographic proximity, allowing fast bounding-box searches using string prefix queries.

## When to Use
- When executing geohash spatial proximity clustering in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Geohash, Base32) cannot be provisioned.

## Supported Technologies
- Geohash
- Base32
- Redis / DynamoDB
- Python / JavaScript

## Example Use Cases
### Proximity Search in NoSQL
Finding nearby restaurants in DynamoDB without deploying expensive spatial extensions.

### Location Telemetry Aggregation
Grouping vehicle GPS pings into spatial clusters by truncating Geohash characters.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Geohash) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Geohash
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
