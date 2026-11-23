# email-triage-drafting

## What it does

Sorts an inbox by what is actually blocked rather than by sender urgency, extracts the real ask
from each message, and drafts replies in a fixed shape (answer first, then reason, then next step)
with every commitment made explicit.

## Why it exists

Inboxes are sorted by anxiety. The loudest sender gets answered first while a quiet decision sits
for three days. And replies often answer the wrong question, bury the "no", or accidentally
promise a date. Triage by blocking status plus a fixed reply shape plus a commitment check
addresses all three.

## When to use

- Clearing a backlog.
- Drafting a reply to a complex, sensitive, or multi-question thread.
- Reducing a long thread to a decision.
- Declining or escalating without damaging a relationship.

## When not to use

- Automated bulk marketing email.
- Legal correspondence, which needs review before any draft is used.
- Real-time chat, where a different etiquette applies.

## Requirements

- Access to the messages (exported, or through an authorised integration).
- The user's real constraints: what they can promise and by when.
- A send step that remains manual unless explicitly authorised.

## How to use

1. Provide the messages or thread and the deadline situation.
2. The agent returns a triage table ordered by what is blocked.
3. It drafts replies for the `decide` and `reply` buckets.
4. It lists every commitment made and any open question for you.
5. You review and send. The skill never sends on its own.

## Example

```
Use email-triage-drafting on this week's inbox export.
```

Result: 23 messages bucketed, three drafts, and a flag on a draft that promised a delivery date
that was not confirmed.

## Limitations

- Cannot know your real capacity; it will ask rather than invent a date.
- Tone matching is approximate and should be reviewed for sensitive threads.
- Cannot verify facts held in other systems.
- Does not send email; it drafts only.

## Source and attribution

Originally authored for Community List. The triage buckets and reply shapes are original to this
project; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
