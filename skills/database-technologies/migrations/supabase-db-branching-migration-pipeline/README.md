# Supabase Db Branching Migration Pipeline

## Description
Manages preview database branching, declarative schema diffing, and migrations using Supabase CLI. Use when running ephemeral preview environments and GitOps migrations with Supabase.

## Purpose
Supabase CLI allows developers to spin up local Docker PostgreSQL environments, capture schema changes as timestamped SQL migrations, and push them to production instances.

## When to Use
- When executing supabase db branching migration pipeline in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Supabase CLI, PostgreSQL) cannot be provisioned.

## Supported Technologies
- Supabase CLI
- PostgreSQL
- Preview Branching
- GitOps

## Example Use Cases
### Pull Request Database Preview Environments
Spinning up isolated ephemeral Supabase branches for every open GitHub pull request.

### Row-Level Security (RLS) Policy Versioning
Tracking and applying PostgreSQL RLS security policies via versioned SQL migrations.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Supabase CLI) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://supabase.com/docs/guides/cli/managing-environments
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
