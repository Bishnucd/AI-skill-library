# dashboard-spec

## What it does

Converts a recurring decision into a written dashboard specification: metric definitions with
formulas and exclusions, grain, chart type per question, layout, filters, all UI states, and
acceptance criteria — before any chart is built.

## Why it exists

Dashboards fail socially, not technically. Two teams define "active user" differently, a panel
shows zero because a query failed, and the chart that everyone screenshots is a dual-axis line
that implies a correlation that is not there. Writing the definitions and states down first
makes those failures visible while they are still cheap to fix.

## When to use

- Before building or rebuilding a dashboard.
- When a dashboard exists but no decision is attributed to it.
- When metric definitions are contested.
- When adding panels to an existing dashboard.

## When not to use

- One-off analysis for a single question — use a notebook or report.
- Exploratory data work where the questions are not yet known.
- Real-time operational monitoring, which needs alerting design more than layout.

## Requirements

- A named decision owner and the cadence of the decision.
- Access to the metric definitions or the tables that would define them.
- The target BI tool, if the layout must match its capabilities.

## How to use

1. State the decision, the audience, and the cadence.
2. The agent drafts metric definitions and asks you to confirm the contested ones.
3. It proposes the layout and chart types, one question per panel.
4. It specifies loading, empty, partial, and error states.
5. It writes acceptance criteria that a reviewer can test.

## Example

```
Use dashboard-spec for a weekly churn review with the CS lead.
```

Result: a decision statement, five metrics with formulas, a two-row layout, explicit error
states, and a flag that the existing churn definition double-counts downgrades.

## Limitations

- Does not build the dashboard; it produces the specification and acceptance criteria.
- Cannot resolve genuine disagreement about business definitions; it surfaces the conflict.
- Assumes a BI tool with standard chart types.
- Does not design alerts or on-call thresholds.

## Source and attribution

Originally authored for Community List. Chart-selection guidance follows standard
visualisation practice (question type determines encoding); no third-party skill content is
included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
