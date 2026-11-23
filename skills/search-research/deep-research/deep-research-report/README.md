# deep-research-report

## What it does

Runs a structured research task: decomposes the question into answerable sub-questions, plans
source types, searches in four passes including a disconfirming pass, extracts cited claims rather
than summaries, reconciles conflicts, and writes a report that separates established fact from
inference.

## Why it exists

Most AI research output is fluent and unfalsifiable. It cites one blog post for a market size,
omits the source that disagrees, and states a percentage with no date or denominator. This skill
makes the evidence chain explicit: every claim has a source, every number has a date, and the
gaps section is mandatory.

## When to use

- Multi-source briefs, landscape reviews, and due-diligence memos.
- Questions where sources are likely to disagree.
- Checking a claim that is widely repeated but rarely verified.
- Comparing options where no single document has the answer.

## When not to use

- A single fact lookup.
- Questions answerable from the user's own data.
- Academic literature reviews, which need database-specific methodology.

## Requirements

- Web or database access.
- Enough time for four search passes; this is not a one-query skill.
- Permission to read the sources; paywalled material will be reported, not guessed.

## How to use

1. State the question and the decision it informs.
2. The agent writes sub-questions and a source plan for approval.
3. It runs the passes and extracts claims with dates and source interest.
4. It reports conflicts rather than averaging them.
5. It delivers the report with a confidence rating and a gaps section.

## Example

```
Use deep-research-report to decide whether to migrate CI from X to Y.
```

Result: 11 sources across four types, a resolved conflict about migration cost, four named gaps,
and a medium-confidence recommendation.

## Limitations

- Cannot read paywalled sources; it reports them as gaps.
- Source quality depends on what is publicly indexed.
- Cannot verify claims that require private data.
- Recency depends on search coverage; very recent changes may be missed.

## Source and attribution

Originally authored for Community List. The claim-extraction and disconfirming-search approach
reflects standard research method; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
