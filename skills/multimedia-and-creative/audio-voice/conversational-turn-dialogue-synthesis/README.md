# Conversational Turn Dialogue Synthesis

## Description
Synthesizes natural multi-speaker dialogues with humanlike turn-taking, pauses, and backchannel responses. Use when generating realistic two-person podcast interviews or simulated calls.

## Purpose
Human conversations involve overlapping acknowledgments ("yeah", "uh-huh"), varying pause gaps, and reactive pitch shifts. Multi-speaker synthesis coordinates timing between distinct voice profiles.

## When to Use
- When executing conversational turn dialogue synthesis in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Turn-Taking Synthesis, Multi-Speaker Audio) cannot be provisioned.

## Supported Technologies
- Turn-Taking Synthesis
- Multi-Speaker Audio
- Backchanneling
- Speech Prosody

## Example Use Cases
### Simulated Customer Support Training Scenarios
Generating realistic audio training calls between agitated callers and calm support agents.

### Automated Dual-Host Podcast Creation
Producing natural banter and dynamic turn-taking between two synthetic podcast co-hosts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Turn-Taking Synthesis) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://en.wikipedia.org/wiki/Turn-taking
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
