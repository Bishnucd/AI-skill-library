# source-credibility-audit

## What it does

Audits claims and their citations: traces each to its origin, scores the source on provenance,
primacy, date, method, interest, and corroboration, checks whether the citation actually supports
the claim, detects circular sourcing, and grades every claim A–X with a specific fix.

## Why it exists

A statistic can be real, widely cited, and still wrong for the claim it is attached to — a vendor
survey of 87 people becomes "40% of teams" through twelve repetitions. Auditing the citation-claim
fit and tracing to the origin catches errors that source reputation alone will not.

## When to use

- Fact-checking a draft before publication.
- Reviewing a research report or a vendor whitepaper.
- Deciding whether a number is safe to repeat.
- Investigating where a widely cited statistic came from.

## When not to use

- Original research design and data collection.
- Legal review of defamation or disclosure obligations.
- Academic peer review, which has its own criteria.

## Requirements

- The document or claim set, with citations.
- Web or database access to trace sources.
- Access to archives for link-rot cases.

## How to use

1. Provide the document and the claims that matter most.
2. The agent extracts claims, traces origins, and scores each source.
3. It checks the citation-claim fit sentence by sentence.
4. It grades claims and lists the specific repair for each weak one.
5. It reports circular sourcing and uncited assertions separately.

## Example

```
Use source-credibility-audit on market-brief.md.
```

Result: 14 claims graded (3 A, 4 B, 5 C, 2 D), the headline statistic traced to an 87-person
vendor survey, and six uncited assertions listed for sourcing or removal.

## Limitations

- Cannot verify proprietary datasets.
- Paywalled sources cannot be method-checked, so they are capped at grade B.
- Predictions are attributed, not verified.
- Cannot detect deliberate fabrication that is internally consistent and has a plausible fake
  primary source; it will flag the absence of independent corroboration.

## Source and attribution

Originally authored for Community List. The six-axis source evaluation and citation-claim fit
check reflect standard verification practice; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
