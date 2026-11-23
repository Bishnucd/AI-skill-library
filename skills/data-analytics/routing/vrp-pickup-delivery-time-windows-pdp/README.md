# Vrp Pickup Delivery Time Windows Pdp

## Description
Solves Pickup and Delivery Problems with Time Windows (PDPTW) and vehicle capacities using Google OR-Tools. Use when routing couriers transporting packages between multiple customer locations.

## Purpose
Couriers must pick up items from senders before delivering them to recipients while respecting vehicle capacity and customer time windows. PDPTW solvers enforce strict pickup-before-delivery constraints.

## When to Use
- When executing vrp pickup delivery time windows pdp in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Google OR-Tools, PDPTW) cannot be provisioned.

## Supported Technologies
- Google OR-Tools
- PDPTW
- Vehicle Routing
- Python

## Example Use Cases
### Same-Day Courier On-Demand Dispatch
Routing on-demand couriers picking up parcels from local boutiques and delivering to homes.

### Non-Emergency Medical Transport
Scheduling patient pick-up from homes and drop-off at medical clinics with strict appointment times.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Google OR-Tools) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.google.com/optimization/routing/pdp
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
