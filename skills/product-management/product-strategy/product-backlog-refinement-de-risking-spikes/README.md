# Product Backlog Refinement De Risking Spikes

## Description
Structures product backlog grooming and allocates time-boxed research spikes to eliminate architectural uncertainty. Use when keeping sprint delivery predictable and free of unexpected blockers.

## Purpose
Uncertain technical requirements cause sprint roll-overs. A research spike is a time-boxed investigation (1–2 days) that writes throwaway code to answer technical unknowns before user story estimation.

## When to Use
- When executing product backlog refinement de risking spikes in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Backlog Grooming, Research Spikes) cannot be provisioned.

## Supported Technologies
- Backlog Grooming
- Research Spikes
- Risk Mitigation
- Scrum / Agile

## Example Use Cases
### Third-Party Payment Gateway Integration Spike
Verifying Apple Pay API sandbox compatibility before scheduling checkout redesign user stories.

### Database Index Performance Verification Spike
Benchmarking query latency on a 50M-row test database before committing to new search UI features.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Backlog Grooming) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.mountaingoatsoftware.com/blog/spikes
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
