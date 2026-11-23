# route-optimization

## What it does

Formalises a multi-stop routing problem — depot, vehicles, capacity, time windows, driver hours,
travel matrix, objective — solves it with an approach matched to problem size, then validates
the answer against the physical constraints and reports the improvement over a baseline.

## Why it exists

Route plans fail in predictable ways: straight-line distances make city routes impossible, a
solver silently drops an infeasible stop, capacity is modelled on one dimension when three
matter, and a plan labelled "optimal" is really a time-limited heuristic. Validation against
the real constraints catches these before a driver does.

## When to use

- Daily delivery or service-visit planning.
- Comparing a proposed route against the current manual plan.
- Adding time windows or capacity to an existing plan.
- Investigating a plan that assigns an impossible sequence.

## When not to use

- Single-stop navigation; use a maps application.
- Long-haul freight with hours-of-service regulations that need a compliance system.
- Problems where the travel matrix is unavailable and the user will not accept an approximation.

## Requirements

- Stop list with coordinates, service durations, and demand.
- Vehicle count and capacity per dimension.
- A routing/matrix provider with usage rights.
- Solver tooling such as OR-Tools, or a heuristic implementation.

## How to use

1. Answer the eight definition questions in step 1 of the skill.
2. The agent fetches or builds the travel matrix and caches it.
3. It selects a solver by size and reports the gap or time limit.
4. It validates every constraint and compares against a baseline.
5. It presents the plan with assumptions and any relaxed constraints.

## Example

```
Use route-optimization for 62 London deliveries, 4 vans, 09:00–17:00 windows.
```

Result: four routes, zero window violations, 18% less distance than the manual plan, and two
low-precision stops flagged as likely to add delay.

## Limitations

- Quality depends entirely on the travel matrix; a stale or coarse matrix invalidates the plan.
- Traffic is modelled at query time, not predicted for the delivery window.
- Does not handle dynamic re-optimisation after a stop is added mid-route.
- Legal driving-hour rules are modelled as constraints, not as a compliance certification.

## Source and attribution

Originally authored for Community List. Solver sizing reflects common vehicle-routing practice;
OR-Tools is referenced as an example implementation, not bundled. No third-party skill content
is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
