# Traveling Salesperson Tsp Solver

## Description
Solves Traveling Salesperson and vehicle routing optimization problems using Google OR-Tools. Use when optimizing multi-stop delivery routes and minimizing total travel distance.

## Purpose
Multi-stop routing suffers from combinatorial explosion. Constraint programming solvers use distance matrices and metaheuristics (guided local search) to find near-optimal routes in seconds.

## When to Use
- When executing traveling salesperson tsp solver in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Python 3.10+, Google OR-Tools) cannot be provisioned.

## Supported Technologies
- Python 3.10+
- Google OR-Tools
- Distance Matrix API
- NumPy

## Example Use Cases
### Field Service Dispatch
Optimizing technician daily visitation schedules across 15 client repair sites.

### Courier Delivery Sequencing
Ordering parcel drop-offs to minimize vehicle fuel consumption and route duration.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Python 3.10+) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.google.com/optimization/routing/tsp
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
