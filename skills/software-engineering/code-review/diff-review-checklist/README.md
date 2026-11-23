# diff-review-checklist

## What it does

Reviews a git diff against a fixed set of questions about correctness, concurrency, security,
test value, and operability. Findings are prioritised as blocker/major/minor/nit and each one
names the file, the line, the input that breaks it, and the fix.

## Why it exists

Reviews drift toward whatever the reviewer happens to notice: naming, formatting, one
favourite bug class. Meanwhile the expensive defects — a missing authorisation check, a
non-atomic update, a retry that double-charges — slip through. A checklist with severities
makes the review repeatable and makes the merge decision explicit.

## When to use

- Any pull request that touches behaviour.
- Reviewing AI-generated changes, which are often plausible and subtly wrong.
- Pre-merge checks on auth, payments, migrations, or concurrency code.

## When not to use

- Formatting-only changes; use a formatter.
- A greenfield design discussion where no code exists yet.
- Security assessment of a whole system — that needs threat modelling.

## Requirements

- The diff (`git diff`, a patch file, or PR access).
- The surrounding code for context.
- Ideally, the ability to run the test suite.

## How to use

1. Provide the diff and the PR description.
2. The agent states the intent in one sentence and maps the blast radius.
3. It reports findings by severity with `file:line` references.
4. It states what it did not review, and whether tests cover the change.
5. It ends with an explicit verdict.

## Example

```
Use diff-review-checklist on the current branch against main.
```

Result: one blocker (missing tenant check), two majors (non-atomic balance update, no
idempotency on retry), three minors, and a verdict of REQUEST CHANGES.

## Limitations

- Static review cannot prove runtime behaviour; findings are marked unverified when the
  suite was not run.
- Large diffs are reviewed by group, which can miss cross-file interactions.
- Does not replace domain knowledge: it will ask rather than guess at business rules.
- Style opinions are deliberately out of scope.

## Source and attribution

Originally authored for Community List. The severity model and the "does the test fail if
reverted" heuristic are common practice in code review literature; no third-party skill
content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
