# test-strategy-design

## What it does

Produces a risk-based test strategy: a table of behaviours, the level each is tested at, the
fixture it needs, the assertion that proves it, and whether the test would fail if the change
were reverted. Then it writes those tests, and lists what is deliberately left untested.

## Why it exists

High coverage with shipped bugs is common because tests assert on implementation instead of
behaviour, or because every test is an end-to-end test that is slow and flaky. Choosing the
level deliberately — and requiring each test to state how it fails — produces a suite that
runs fast and catches real regressions.

## When to use

- A suite is slow, flaky, or routinely skipped.
- Regressions keep shipping despite good coverage numbers.
- Starting tests for an untested module.
- Deciding between unit and end-to-end for a specific behaviour.

## When not to use

- Writing a single test for a known bug; just write it.
- Performance or load testing, which needs a different method.
- Exploratory QA where the goal is to find unknown issues.

## Requirements

- The code under test and its existing test runner.
- Access to recent production bugs or incident notes, if they exist.
- A way to run the suite locally.

## How to use

1. Point the agent at the module and the last few production bugs.
2. It inventories the current suite and its runtime.
3. It produces the behaviour table for review before writing tests.
4. It implements the tests, injecting clocks and fakes where needed.
5. It writes `TEST_STRATEGY.md`, including the deliberately untested list.

## Example

```
Use test-strategy-design for src/billing, using the three refund incidents from last quarter.
```

Result: 24 planned tests across four levels, 9 existing mock-heavy tests marked for removal,
and a regression test for each refund incident.

## Limitations

- Risk scoring depends on information the user supplies; without incident history it falls
  back to churn and complexity.
- Cannot measure real flake rates without CI history.
- Does not generate load, fuzz, or property-based suites unless asked.
- Refactors needed to make code testable are proposed, not performed silently.

## Source and attribution

Originally authored for Community List. The level taxonomy (unit, integration, contract,
end-to-end) is standard testing vocabulary; the "fails if reverted" criterion is common
practice. No third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
