# agent-eval-harness

## What it does

Builds a small evaluation harness around a real decision: 30–100 labelled tasks drawn from
actual usage, executable graders wherever possible, a calibrated model judge only where
necessary, and a report that includes per-category pass rates, cost, and latency alongside a
stored baseline.

## Why it exists

Prompt and model changes are usually judged by trying a few examples and feeling good about
the result. That is how a fix for one case silently breaks twelve others. A harness with a
baseline turns "seems better" into "pass rate 0.71 → 0.79 with three regressions listed",
which is a decision a team can actually make.

## When to use

- Before shipping a prompt, model, tool-schema, or retrieval change.
- Choosing between two models on a real task distribution.
- Adding a quality gate to CI.
- Diagnosing why an agent that demos well fails in production.

## When not to use

- Benchmarking general model capability (use public benchmarks).
- A one-off task where no regression risk exists.
- Measuring latency or cost alone; that needs load testing, not an eval harness.

## Requirements

- Access to real inputs, or a labelled sample.
- A runner language (Node or Python) and API access to the system under test.
- A human available to label ~20 outputs for judge calibration.

## How to use

1. State the decision the eval supports.
2. Provide real inputs and their expected outcomes where you know them.
3. The agent writes the task set with provenance and picks grading methods per task type.
4. It runs the current system to establish a baseline.
5. It reports the comparison, including cost, latency, and every regression.

## Example

```
Use agent-eval-harness to compare the current triage prompt with the proposed rewrite.
```

Result: 64 tasks, 41 executable graders, 23 rubric graders at 86% human agreement, baseline
0.71 vs candidate 0.79, three regressions named with inputs, cost and p95 latency deltas.

## Limitations

- Small task sets are directional, not statistically strong; the skill says so in the report.
- Model judges drift when the judge model changes; the judge version is recorded.
- Cannot source real user data without access; synthetic tasks are weaker.
- Does not measure safety or red-team behaviour unless such tasks are included.

## Source and attribution

Originally authored for Community List. The pass@k framing and binary-rubric judging
approach are standard evaluation practice; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
