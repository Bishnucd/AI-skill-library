# Smart Agenda Pre Read Tracker

## Description
Tracks attendee reading completion of pre-meeting briefing documents before meeting kickoff. Use when enforcing Amazon-style silent reading and pre-read preparation cultures.

## Purpose
Presenting slides wastes valuable meeting time. Following Amazon six-pager culture, organizers distribute written memos in advance, tracking reading completion before allowing discussion to begin.

## When to Use
- When executing smart agenda pre read tracker in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Pre-Read Analytics, Document Tracking) cannot be provisioned.

## Supported Technologies
- Pre-Read Analytics
- Document Tracking
- Markdown
- Webhooks

## Example Use Cases
### Amazon-Style Silent Reading Meetings
Allocating the first 15 minutes of meetings for silent reading of technical architecture memos.

### Board Meeting Prep Verification
Confirming board directors reviewed financial disclosures prior to governance votes.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Pre-Read Analytics) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://www.aboutamazon.com/news/workplace/the-anatomy-of-an-amazon-six-pager
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
