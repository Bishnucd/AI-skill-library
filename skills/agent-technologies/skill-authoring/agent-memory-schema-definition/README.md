# Agent Memory Schema Definition

## Description
Designs structured episodic and semantic memory schemas for long-running AI agent sessions. Use when implementing persistent memory, user preferences, and stateful agent history.

## Purpose
Agents lose context when conversation histories overflow token limits. Structuring memory into working memory, archival memory, and recall storage enables stateful multi-session continuity.

## When to Use
- When executing agent memory schema definition in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (MemGPT / Letta, Postgres / pgvector) cannot be provisioned.

## Supported Technologies
- MemGPT / Letta
- Postgres / pgvector
- JSON Schema
- Python

## Example Use Cases
### Long-Term User Personalization
Remembering developer preferences, project conventions, and past decisions across sessions.

### Complex Multi-Day Project Tracking
Preserving task milestones and unresolved blockers across agent restarts.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (MemGPT / Letta) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://github.com/cpacker/MemGPT
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
