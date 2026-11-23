# Pelias Geocoder Autocomplete Api

## Description
Implements fast real-time address autocomplete and search queries using the open-source Pelias geocoder. Use when building address search inputs with instant typeahead suggestions.

## Purpose
Pelias is a modular, open-source geocoding engine built on Elasticsearch. Its /v1/autocomplete endpoint delivers sub-50ms address suggestions prioritized by user focus points.

## When to Use
- When executing pelias geocoder autocomplete api in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Pelias Geocoder, Elasticsearch) cannot be provisioned.

## Supported Technologies
- Pelias Geocoder
- Elasticsearch
- Node.js / REST
- GeoJSON

## Example Use Cases
### Checkout Address Autocomplete
Speeding up e-commerce shipping address entry and eliminating typo delivery errors.

### Ride-Hailing Pickup Point Search
Delivering instant location suggestions centered around a user's current GPS coordinates.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Pelias Geocoder) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://pelias.io/
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
