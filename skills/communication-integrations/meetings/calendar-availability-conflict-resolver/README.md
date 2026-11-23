# Calendar Availability Conflict Resolver

## Description
Calculates optimal meeting time slots across multi-participant, multi-timezone calendars via free-busy queries. Use when automating meeting scheduling and calendar coordination.

## Purpose
Scheduling meetings across distributed teams requires querying free/busy windows, normalizing timezone offsets, respecting working hours, and resolving conflicting reservations.

## When to Use
- When executing calendar availability conflict resolver in production workflows.
- Use when structured standards, deterministic outputs, and error handling are required.

## When NOT to Use
- Ad-hoc, unstructured exploratory tasks where formal workflows add unnecessary overhead.
- Environments where required dependencies (Google Calendar API, Microsoft Graph API) cannot be provisioned.

## Supported Technologies
- Google Calendar API
- Microsoft Graph API
- Date-fns / Luxon
- TypeScript

## Example Use Cases
### Automated Executive Scheduling
Finding common open slots between busy leadership calendars across continents.

### Interview Scheduling Bot
Coordinating candidate interview loops across multiple internal interviewers.

## Usage Instructions
1. Review the operational workflow defined in `SKILL.md`.
2. Ensure runtime dependencies (Google Calendar API) are configured in the host environment.
3. Execute the workflow steps sequentially, validating intermediate outputs.
4. Verify the final generated artifact against declared acceptance criteria.

## Source and Attribution
- **Source:** https://developers.google.com/calendar/api/v3/reference/freebusy
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
