# Toll Cost Calculation Toll Avoidance

## Description
Calculates road toll fees along driving itineraries and generates toll-avoiding route comparisons. Use when computing business travel expense reimbursements and toll-free alternatives.

## Purpose
Driving routes often incur high bridge and highway toll charges. Calculating toll costs across vehicle payment tags (E-ZPass, FasTrak) and presenting toll-free options allows cost-aware trip planning.

## When to Use
- When executing toll cost calculation toll avoidance in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (TollGuru API / OSRM, Toll Cost Modeling) cannot be provisioned.

## Supported Technologies
- TollGuru API / OSRM
- Toll Cost Modeling
- REST
- Route Options

## Example Use Cases
### Commercial Fleet Toll Expense Forecasting
Forecasting monthly highway toll expenditures across national freight shipping corridors.

### Commuter Route Cost Comparison
Helping daily commuters decide whether toll lanes save enough time to justify daily fees.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (TollGuru API / OSRM) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://tollguru.com/toll-api
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
