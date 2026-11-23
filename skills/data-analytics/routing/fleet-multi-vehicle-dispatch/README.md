# Fleet Multi Vehicle Dispatch

## Description
Assigns multi-stop delivery orders across vehicle fleets with capacity, shift hour, and delivery time-window constraints. Use when managing logistics fleet operations and dispatch scheduling.

## Purpose
Logistics fleets must balance multiple vehicles with limited carrying weight and strict customer delivery time windows. Capacitated Vehicle Routing Problem (CVRP) solvers optimize fleet allocation.

## When to Use
- When executing fleet multi vehicle dispatch in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Google OR-Tools) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Google OR-Tools
- Capacitated Vehicle Routing (CVRP)
- Pandas

## Example Use Cases
### Grocery Delivery Dispatch
Scheduling 500 home grocery deliveries across 20 refrigerated vans within 2-hour delivery windows.

### Waste Management Fleet Routing
Balancing bin collection routes across trucks to maximize fill capacity before depot return.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.google.com/optimization/routing/cvrp
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
