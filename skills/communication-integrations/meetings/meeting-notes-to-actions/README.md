# meeting-notes-to-actions

## What it does

Turns a transcript or rough notes into a decision log with named deciders, an action list where
every item has one owner, a due date or an explicit "no date agreed", and a completion test, plus
open questions and a flag for agreement that only sounded like agreement.

## Why it exists

Meeting summaries blur discussion into decisions. "We discussed the pricing change" becomes
"we decided to change pricing" in the follow-up, and three weeks later nobody can say who
approved it. Separating decisions from discussion, requiring a named decider, and flagging soft
agreement prevents that drift.

## When to use

- After any meeting that produced a decision or tasks.
- When a transcript needs to become a follow-up email.
- When "so we're agreed" needs to be pinned down.
- When actions keep getting lost between meetings.

## When not to use

- One-to-one conversations of a personal nature.
- Recorded content that must be transcribed verbatim for legal reasons.
- Brainstorming sessions with no decisions yet.

## Requirements

- A transcript, recording, or reasonably complete notes.
- The attendee list and who has authority for each topic.
- Permission to process the recording.

## How to use

1. Provide the transcript and attendee list.
2. The agent reads the whole thing before writing.
3. It outputs decisions, actions, open questions, and unconfirmed agreement.
4. Review the actions: confirm owners and dates.
5. Send the action list as the follow-up, not the full summary.

## Example

```
Use meeting-notes-to-actions on this 48-minute transcript.
```

Result: three decisions with deciders, seven owned actions with completion tests, two open
questions, and one "sounds good" flagged rather than counted as approval.

## Limitations

- Cannot determine authority; it infers from context and flags uncertainty.
- Low-quality transcripts produce gaps that are marked rather than filled.
- Does not schedule meetings or update task trackers.
- Sensitive matters are summarised at a high level by design.

## Source and attribution

Originally authored for Community List. The decision/action/open-question separation is original
to this project; no third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
