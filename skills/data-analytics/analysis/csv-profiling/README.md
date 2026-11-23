# csv-profiling

## What it does

Profiles a tabular dataset before analysis: encoding and delimiter detection, per-column types
and null rates, cardinality, distributions, duplicate and candidate-key checks, date and
numeric plausibility, and a list of cleaning steps that are actually required.

## Why it exists

Most wrong analyses are not wrong maths; they are wrong assumptions. A column that is 40%
`"N/A"` strings gets averaged as if it were zero. A "unique" ID turns out to have duplicates. A
date column is silently midnight for a third of rows. Profiling surfaces those before they
propagate into a number someone presents to a client.

## When to use

- Opening an unfamiliar dataset.
- Reconciling two sources that disagree.
- Before writing cleaning or transformation code.
- Reviewing a dataset a colleague supplied.

## When not to use

- Already-validated warehouse tables with documented contracts.
- Unstructured text or images; different profiling method.
- Real-time streams, where profiling is a monitoring problem.

## Requirements

- The dataset file, or read access to it.
- A runtime with a data library (pandas, Polars, DuckDB) or plain streaming code.

## How to use

1. Provide the file path and any known context (what a row represents).
2. The agent detects format and profiles columns without modifying the file.
3. It reports the five findings most likely to invalidate an analysis.
4. It lists the cleaning steps required, with the exact rule per column.

## Example

```
Use csv-profiling on ./data/orders.csv — one row per order line.
```

Result: 1.28M rows profiled, `customer_id` shown to be non-unique, three date formats
detected, negative quantities traced to cancelled orders, and a seven-item cleaning list.

## Limitations

- Exact distinct counts on very large files use memory; the skill says when it approximated.
- Does not validate against a business definition of correctness — only internal consistency.
- Does not profile nested JSON or array columns beyond basic type detection.
- Outlier detection is descriptive; it does not decide what to do about them.

## Source and attribution

Originally authored for Community List. Column-profiling categories are common data-quality
practice; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
