# agent-skill-authoring

## What it does

Authors and reviews agent skills with attention to the two things that decide whether a skill
works: whether it activates on the right requests, and whether its body gives an executable
procedure. Includes a positive/negative trigger test table and a safety review for
third-party skills.

## Why it exists

Most broken skills fail in one of two ways. Either the description is too vague to match real
user phrasing, so the skill never loads, or it is too broad and hijacks unrelated tasks. Or
the body is a pile of adjectives ("be thorough", "use best practices") that changes nothing
about the model's behaviour. This skill makes both failure modes explicit and testable.

## When to use

- Writing a new skill.
- Debugging a skill that never triggers.
- Converting a long prompt or a checklist into a skill.
- Auditing a downloaded skill before installing it.

## When not to use

- Building an agent framework or orchestration layer.
- Writing a system prompt for a single application, where there is no routing decision.
- Evaluating model quality generally — that is an eval harness.

## Requirements

- An agent runtime that supports skills, or the ability to test descriptions manually.
- The user's real phrasing for the task, ideally from logs or tickets.
- For third-party skills: the original source and licence.

## How to use

1. Describe the task and paste real user phrasings if you have them.
2. The agent writes the description and the trigger table before the body.
3. Review the trigger table; adjust any phrase that matches the wrong skill.
4. The agent writes the body, pushing detail into `references/`.
5. Test activation both ways and run it once on a real input.

## Example

```
Use agent-skill-authoring to turn this 600-word refund policy checklist into a skill.
```

Result: a narrow description, 6 positive and 4 negative triggers, a 110-line `SKILL.md`, and
a `references/policy-exceptions.md` loaded only when an exception is hit.

## Limitations

- Trigger testing depends on the target agent's routing; results may differ between runtimes.
- Cannot measure how much a skill improves task success without an eval harness.
- Does not choose the skill's category or file location in a repository.
- Safety review is a checklist, not a guarantee; novel injection patterns can pass it.

## Source and attribution

Originally authored for Community List. Field constraints and the progressive-disclosure
model follow the Agent Skills specification
(https://github.com/agentskills/agentskills/blob/main/docs/specification.mdx), which was read
directly during authoring. No third-party skill content is included.

## Licence

MIT. See the repository [LICENSE](../../../../LICENSE).
